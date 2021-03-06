// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import animate from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
// import './assets/swiper.css';

Vue.config.productionTip = false
Vue.use(animate);
Vue.use(VueAwesomeSwiper,{
  autoplay: {
    delay:1500,
    disableOnInteraction:false,
  },
  // autoplayDisableOnInteraction: false,
  loop: true,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
