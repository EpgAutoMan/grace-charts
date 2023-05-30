import { createApp } from "vue";
import App from "./App.vue";
import graceCharts from "grace-charts";

const app = createApp(App);
app.use(graceCharts);

app.mount("#app");
