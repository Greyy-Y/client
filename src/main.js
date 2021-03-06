import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BASEURL from "./config";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/element-variable.scss";
import "./assets/iconfont/iconfont.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

Vue.prototype.dayjs = dayjs;
Vue.prototype.baseUrl = BASEURL;
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
