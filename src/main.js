import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";

import {
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Empty,
  DropdownMenu,
  DropdownItem,
  NavBar,
  Icon,
  Tag,
  NoticeBar,
  TreeSelect,
  Card,
  Button,
  SubmitBar,
} from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Empty);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(NoticeBar);
Vue.use(TreeSelect);
Vue.use(Card);
Vue.use(Button);
Vue.use(SubmitBar);

Vue.config.productionTip = false;

Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
