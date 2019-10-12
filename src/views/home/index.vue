<template>
  <div>
    <van-nav-bar title="首页|搜索" />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      isLoading: false,
      activeChannelIndex:0
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style lang='less' scoped>
// scoped的作用是此样式只在本组件中生效
// 样式不生效两种解决办法
// 1.在全局书写样式（APP.vue中）
// 2.利用深度作用选择器在局部书写样式
/deep/.van-pull-refresh__head {
  margin-top: 30px !important;
}
/deep/.van-list {
  margin-bottom: 100px
}
</style>