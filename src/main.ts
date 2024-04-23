import './assets/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// import ButtonPro from "../packages/button-pro/index";
// import InputPro from "../packages/input-pro/index";

import ElementPlusSuper from 'element-plus-super'

const app = createApp(App)

// app.component(ButtonPro.name || '', ButtonPro)
// app.component(InputPro.name || '', InputPro)

app.use(ElementPlusSuper)
app.use(createPinia())
app.use(router)

app.mount('#app')
