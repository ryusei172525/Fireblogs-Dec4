import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

// main.jsが一番初めに読み込まれる部分なのでここにログインしているorしていないを書く
// ユーザ情報の取得に1秒以下ほどかかるので
let app;
firebase.auth().onAuthStateChanged(()=>{
  // !appの理由・・・appがない＝まだ読み込まれていない
  if(!app){
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});


