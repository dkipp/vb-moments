import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Firebase from 'firebase';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Firebase config - this is provided when you create your app
// Swap out these settings for your project settings
const firebaseConfig = {
  apiKey: 'AIzaSyARIllJX5NwVZf9T5brOqhx3dDvLgGZfl8',
  authDomain: 'playing-218ba.firebaseapp.com',
  databaseURL: 'https://playing-218ba.firebaseio.com',
  projectId: 'playing-218ba',
  storageBucket: 'playing-218ba.appspot.com',
  messagingSenderId: '1092711989826',
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends
Firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
