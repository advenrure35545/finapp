// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyBenF94ftP9SclBpDoVTV5m6b99ieu91IQ",
  authDomain: "finacial-project.firebaseapp.com",
  databaseURL: "https://finacial-project.firebaseio.com",
  projectId: "finacial-project",
  storageBucket: "finacial-project.appspot.com",
  messagingSenderId: "1090935837573"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
