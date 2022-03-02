import { createApp } from 'vue'
import App from './App.vue'

// Add bootstrap and font-awesome
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App)

app.mount('#app')
