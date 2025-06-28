<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) of list"
        :name="item.name"
        :to="item.to"
        :icon="item.icon"
        :key="index"
        >{{ item.text }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "orderIndex",
  data() {
    return {
      active: 0,
      list: [
        {
          name: "/home",
          to: "/home",
          icon: "home-o",
          text: "首页",
        },
        {
          name: "/order",
          to: "/order",
          icon: "cart-circle-o",
          text: "订单",
        },
        {
          name: "/mime",
          to: "/mime",
          icon: "friends-o",
          text: "我的",
        },
      ],
    };
  },
  watch: {
    $route: {
      handler(value) {
        console.log(value, "===============");
        this.active = value.path;
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
