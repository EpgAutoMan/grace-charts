# 快速开始

## 完整引入

可一次性引入所有组件，但这会增加打包体积

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import graceCharts from "grace-charts";

const app = createApp(App);
app.use(graceCharts);

app.mount("#app");

// *.vue
<GraceLine :dataset="dataset"></GraceLine>
```

## 单个图表引入

也可以将单个图表引入到项目中

```js
<template>
  <GraceLine :dataset="dataset"></GraceLine>
</template>

<scrip进行引入并使用，版本请根据实际情况选择，建议选择最新的>
import { ref } from "vue";
import { GraceLine } from "grace-charts";

export default {
  components: { GraceLine },
  setup() {
    const dataset = ref({
      dimensions: [],
      source: [],
    });
    return {
      dataset,
    };
  },
};
</script>

```

## 通过 CDN

也可以直接通过 script 进行引入并使用，版本请根据个人情况选择，建议选择最新的

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.0.2/dist/vue.global.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts@5.3.0/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/grace-charts@0.2.3/dist/grace-charts.umd.min.js"></script>
```

在使用时，可像下面这样调用

```
  <div id="app">
    <grace-line :dataset="dataset"></grace-line>
  <div>
  <script>
    Vue.createApp({
      components: { 'grace-line': window['grace-charts']['GraceLine'] },
      setup(){
        return {
          dataset: Vue.ref(
            {
              dimensions: ["时间", "数量"],
              source: [
                { 时间: "2020-01", 数量: 100 },
                { 时间: "2020-02", 数量: 110 },
                { 时间: "2020-03", 数量: 120 },
                { 时间: "2020-04", 数量: 130 },
                { 时间: "2020-05", 数量: 140 },
              ],
            }
          ),
        }
      }
    }).mount('#app');
```

演示：

<iframe class="code-iframe" src="./code/start01.html" scrolling="no" frameborder="no"></iframe>
