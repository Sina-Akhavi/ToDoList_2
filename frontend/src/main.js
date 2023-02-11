// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';

// Vue.use(ElementUI);

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')





// import { createApp } from 'vue'
// import App from './App.vue'


// createApp(App).mount('#app')
