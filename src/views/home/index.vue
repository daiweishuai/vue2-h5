<template>
  <div>
    <div class="top-home-top">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of list3" :key="index">
          <router-link :to="item.to">
            <img :src="item.src" />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="top-home-classification">
      <van-swipe class="classification-swipe" indicator-color="white">
        <van-swipe-item>
          <van-grid :gutter="10" square>
            <van-grid-item
              v-for="(item, index) of list"
              :to="item.to"
              :key="index"
            >
              <img :src="item.src" alt="" srcset="" />
              {{ item.text }}
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid :gutter="10" square>
            <van-grid-item
              v-for="(item, index) of list2"
              :to="item.to"
              :key="index"
            >
              <img :src="item.src" alt="" srcset="" />
              {{ item.text }}
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div style="text-align: center">
      <img
        src="../../assets/images/jrtj.png"
        alt=""
        width="120"
        style="margin: 0 0 20px 0"
      />
    </div>
    <van-empty v-if="shopsList.length == 0" description="该地区暂无商铺" />
    <div v-else class="top-home-List">
      <div
        v-for="(item, index) in shopsList"
        :key="index"
        class="list-item"
        text="文字"
        @click="toDetail(item.shopsId)"
      >
        <img :src="item.shopsImage" />
        <div class="top-home-List-title">
          <p class="clearfix">
            <span class="l">{{ item.shopsName }}</span>
            <span class="r red">{{ item.score }}</span>
          </p>
          <p class="clearfix">
            <span class="l f14">起送：{{ item.shopsStart }}</span>
            <span class="r f14">运费：{{ item.freight }}</span>
          </p>
        </div>
      </div>
    </div>
    <tabbar />
  </div>
</template>

<script>
import tabbar from "../../components/tabbar";
import { shopsList } from "./data.js";
export default {
  name: "homeIndex",
  components: {
    tabbar,
  },
  data() {
    return {
      list: [
        {
          to: "/classifica?classificationId=1",
          src: require("../../assets/images/cf1.png"),
          text: "美食",
        },
        {
          to: "/classifica?classificationId=2",
          src: require("../../assets/images/cf2.png"),
          text: "饮品",
        },
        {
          to: "/classifica?classificationId=3",
          src: require("../../assets/images/cf3.png"),
          text: "甜品",
        },
        {
          to: "/classifica?classificationId=4",
          src: require("../../assets/images/cf4.png"),
          text: "鲜花",
        },
      ],
      list2: [
        {
          to: "/classifica?classificationId=5",
          src: require("../../assets/images/cf5.png"),
          text: "下午茶",
        },
        {
          to: "/classifica?classificationId=6",
          src: require("../../assets/images/cf6.png"),
          text: "超市",
        },
        {
          to: "/classifica?classificationId=7",
          src: require("../../assets/images/cf7.png"),
          text: "药品",
        },
        {
          to: "/classifica?classificationId=8",
          src: require("../../assets/images/cf8.png"),
          text: "买菜",
        },
      ],
      shopsList,
      list3: [
        {
          to: "/commodityDetail?shopsId=14",
          src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4083615963,856728706&fm=11&gp=0.jpg",
        },
        {
          to: "/commodityDetail?shopsId=20",
          src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1004056377,3540152604&fm=26&gp=0.jpg",
        },
        {
          to: "/commodityDetail?shopsId=13",
          src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3487836899,16466550&fm=26&gp=0.jpg",
        },
      ],
    };
  },
  methods: {
    toDetail(shopsId) {
      this.$router.push({
        path: "/commodityDetail",
        query: {
          shopsId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-home-classification {
  margin: 10px 0;
  :deep([class*="van-hairline"]::after) {
    border: none;
  }
  .classification-swipe {
    padding: 0 0 25px 0;
    :deep(.van-grid-item__content) {
      background: transparent;
      // box-shadow: 0 1px 4px 0 rgb(240 172 26 / 30%);
      img {
        margin: 5px 0;
        width: 70%;
        height: 90%;
      }
    }
    :deep(.van-swipe__indicator) {
      width: 20px;
      border-radius: 5px;
      opacity: 0.5;
    }
    :deep(.van-swipe__indicator--active) {
      background: #f0ab1a !important;
    }
  }
}
.top-home-List {
  width: 96%;
  margin: 0 auto;
  margin-bottom: 30px;
  background: #f8f8fa;
  column-count: 2;
  column-gap: 10px;
  .list-item {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background: #fefcf9;
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    -webkit-column-break-inside: avoid;
    img {
      min-height: 50px;
      width: 100%;
    }
    .top-home-List-title {
      box-sizing: border-box;
      width: 100%;
      padding: 5px;
      p {
        margin-bottom: 5px;
      }
    }
  }
}
.top-home-top {
  background: url("../../assets/images/round.png");
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
  .swipe {
    margin: 0 auto;
    width: 90%;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
