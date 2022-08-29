import { createApp } from 'vue';
import './themes/style.css';
import App from './App.vue';
import baseRouter from './routers/Router';
import { AppRouter } from './modules/Module';
import modules from './routers/Modules';

AppRouter.registerModules(modules).generateRoutes();
const app = createApp(App).use(baseRouter);
app.mount('#app');