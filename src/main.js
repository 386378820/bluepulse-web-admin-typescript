import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import $ from 'jquery';
Vue.config.productionTip = false;
Vue.prototype.$ = $;
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map