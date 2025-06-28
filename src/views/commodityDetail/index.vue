<template>
  <div class="top-commodity">
    <van-nav-bar
      :title="currentShopInfo.shopsName"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon :name="isCollection ? 'star' : 'star-o'" size="18" />
        收藏
      </template>
    </van-nav-bar>
    <div class="top-commodity-shop">
      <img :src="currentShopInfo.signImage" alt="" />
      <div class="top-commodity-shop-card">
        <p>{{ currentShopInfo.shopsName }}</p>
        <div>
          评分：<span>{{ currentShopInfo.score }}</span>
        </div>
        <van-tag type="danger">优质商家</van-tag>
        <br />
        <span class="top-commodity-shop-card-address"
          >地址：{{ currentShopInfo.address }}</span
        >
        <van-notice-bar scrollable :text="currentShopInfo.notice" />
      </div>
      <div class="top-commodity-list">
        <van-tree-select
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          :items="items"
        >
          <template #content>
            <van-card
              v-for="(item, index) in items[activeIndex].children"
              :key="index"
              :price="item.commodityMoney"
              :desc="item.commodityDescribe"
              :title="item.commodityName"
              :thumb="item.commodityImage"
            >
              <template #footer>
                <van-button
                  icon="minus"
                  type="primary"
                  size="mini"
                  round
                  plain
                  @click="addShop('delect', item.count, index)"
                />
                <span>{{ item.count }}</span>
                <van-button
                  icon="plus"
                  type="primary"
                  size="mini"
                  round
                  @click="addShop('add', item.count, index)"
                />
              </template>
            </van-card>
          </template>
        </van-tree-select>
      </div>
      <van-submit-bar
        :price="price"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>
    <!-- <prompt> </prompt> -->
  </div>
</template>

<script>
import { shopsList } from "../home/data";
export default {
  components: {},

  name: "commodityDetail",
  data() {
    return {
      items: [],
      price: 0,
      shopsList,
      activeId: "",
      activeIndex: 0,
    };
  },
  methods: {
    addShop(status, count, i) {
      if (status == "delect") {
        if (count > 0) {
          this.items[this.activeIndex].children[i].count = count - 1;
        }
      } else {
        this.items[this.activeIndex].children[i].count = count + 1;
      }
    },
    onSubmit() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
  },
  computed: {
    isCollection() {
      return "";
    },
    currentShopInfo() {
      const arr = this.shopsList.find(
        (item) => this.$route.query.shopsId == item.shopsId
      );
      return arr;
    },
  },
  mounted() {
    this.items = (this.currentShopInfo.commodity || []).map((item) => {
      return {
        ...item,
        children: item.children.map((son) => {
          return {
            ...son,
            count: 0,
          };
        }),
      };
    });
  },
};
</script>

<style lang="scss" scoped>
$a: 100vh;
$b: 390px;
.top-commodity {
  width: 100%;
  height: 100%;
  position: relative;
  background: #fefcf9;
  :deep(.van-nav-bar) {
    .van-nav-bar__left i,
    .van-nav-bar__left span,
    .van-nav-bar__right,
    .van-nav-bar__right i {
      color: #ed9428;
    }
  }
  .top-commodity-shop {
    img {
      width: 100%;
      height: 220px;
    }
    .top-commodity-shop-card {
      width: 80%;
      height: 150px;
      background: #fff;
      // opacity: 0.8;
      border-radius: 10px;
      position: absolute;
      left: 0;
      right: 0;
      top: 150px;
      margin: 0 auto;
      padding: 5px 10px;
      p {
        font-weight: bolder;
      }
      div {
        font-size: 14px;
        text-align: right;
        span {
          color: red;
          font-weight: bolder;
        }
      }
      .top-commodity-shop-card-address {
        font-size: 12px;
        color: #333;
      }
    }
  }
  .top-commodity-list {
    margin-top: 45px;
    height: calc(#{$a} - #{$b});
    :deep(.van-tree-select) {
      height: 100% !important;
    }
    button {
      vertical-align: middle;
      margin: 0 3px;
    }
  }
  :deep(.van-submit-bar__text) {
    text-align: left;
  }
}
</style>
