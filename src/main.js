import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//公共css文件
import '@/assets/css/common.css'
//字体图标css文件
import '@/assets/css/iconfont.css'
//淘宝无线适配
import '@/assets/js/flexible'

//ly-tab插件
import LyTab from 'ly-tab'
Vue.use(LyTab)

//全局引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//全局引入vant 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
