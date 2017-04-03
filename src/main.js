import Vue from 'vue'
import App from './App'

import '!script-loader!jquery/dist/jquery.min.js'
import '!script-loader!bootstrap/dist/js/bootstrap.min'
import '!script-loader!croppie/croppie.min'
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css'
import '!style-loader!css-loader!croppie/croppie.css'
import '!style-loader!css-loader!./assets/css/default.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
