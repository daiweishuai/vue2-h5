<template>
  <div class="classification">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />

      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="classification-list">
      <van-empty v-if="shopsList.length == 0" description="暂无商铺" />
      <div
        v-for="(item, index) in showShopsList"
        :key="index"
        class="classification-list-item clearfix"
        v-on:click="toDetail(item.shopsId)"
      >
        <img :src="item.shopsImage" alt="" srcset="" class="l" />
        <div class="l">
          <p class="clearfix">
            <span class="l fb">{{ item.shopsName }}</span>
          </p>
          <p class="clearfix">
            <span class="l f12">起送：{{ item.shopsStart }}</span>
            <span class="l f12">运费：{{ item.freight }}</span>
            <span class="r f12 red fb">{{ item.score }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shopsList } from "../home/data";
export default {
  components: {},
  name: "ClassificaIndex",
  data() {
    return {
      value1: 0,
      value2: 0,
      option1: [
        { text: "全部", value: 0 },
        { text: "美食", value: 1 },
        { text: "饮品", value: 2 },
        { text: "甜品", value: 3 },
        { text: "鲜花", value: 4 },
        { text: "下午茶", value: 5 },
        { text: "超市", value: 6 },
        { text: "药品", value: 7 },
        { text: "买菜", value: 8 },
      ],
      option2: [
        { text: "默认排序", value: 0 },
        { text: "好评排序", value: 1 },
        { text: "起送费排序", value: 2 },
      ],
      shopsList,
    };
  },
  computed: {
    title() {
      // 1.获取路由上的classificationId参数，
      console.log(this.$route.query.classificationId);

      // 2.通过classificationId参数去匹配option1中的元素的value值
      const obj = this.option1.find((item) => item.value == this.value1);

      // 4.返回这个元素的text值
      return obj.text;
    },
    showShopsList() {
      // 1.依赖于value1和value2

      // 2.通过this.value1去筛选 this.shopsList中classificationType === this.value1的数组
      const arr = this.shopsList.filter(
        (item) => item.classificationType == this.value1 || this.value1 == 0
      );

      // 3.接着用arr数组，进行sort排序，当使用评分排序时，使用score字段，
      // 当使用距离排序时，使用shopsStart字段

      // 如果value2===评分
      if (this.value2 == 1) {
        return arr.sort((a, b) => b.score - a.score);
      }

      // 如果value2 === 起送费
      if (this.value2 == 2) {
        return arr.sort((a, b) => Number(a.shopsStart) - Number(b.shopsStart));
      }

      return arr;
    },
  },
  methods: {
    toDetail(shopsId) {
      this.$router.push({
        path: "/mime",
        query: {
          shopsId,
        },
      });
    },
  },
  mounted() {
    this.value1 = Number(this.$route.query.classificationId);
  },
};
</script>

<style lang="scss" scoped>
.classification {
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  :deep(.van-nav-bar) {
    width: 100%;
    .van-nav-bar__content {
      background: #ed9428;
      .van-nav-bar__left {
        span,
        .van-icon {
          color: #fff;
        }
      }
      .van-nav-bar__title {
        color: #fff;
      }
    }
  }
  :deep(.van-dropdown-menu) {
    width: 100%;
  }
}
.classification-list {
  width: 90%;
  padding: 0 5%;
  height: calc(100% - 95px);
  overflow: auto;
  .classification-list-item {
    width: 95%;
    padding: 10px 2.5%;
    margin: 10px 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    img {
      width: 30%;
      border-radius: 10px;
      min-height: 80px;
    }
    div {
      width: 65%;
      height: 40px;
      p {
        width: 100%;
        line-height: 30px;
        &:last-child {
          line-height: 40px;
        }
        span {
          margin: 5px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
