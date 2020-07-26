import Vue from 'vue';
import App from './App.vue';
import IconBase from '@/components/icons/IconBase.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
import IconArrowUp from '@/components/icons/IconArrowUp.vue';
Vue.component('IconBase', IconBase);
Vue.component('IconClose', IconClose);
Vue.component('IconArrowDown', IconArrowDown);
Vue.component('IconArrowUp', IconArrowUp);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
