import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App.vue';
import router from './router';
import store from './store';
import { i18n, loadLanguageAsync } from './i18n';
import firebaseConfig from './firebase-config';

Vue.config.productionTip = false;

Vue.use(Vuex);

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  const userLang = navigator.language || navigator.userLanguage;
  loadLanguageAsync(userLang).then(() => {
    new Vue({
      router,
      store,
      i18n,
      render: h => h(App),
    }).$mount('#app');
  });
});
