# 条形图

### 单独引入的用法

```js
<template>
  <GraceBar :dataset="dataset"></GraceBar>
</template>

<script>
import { ref } from "vue";
import { GraceBar } from "grace-charts";

export default {
  components: { GraceBar },
  setup() {
    const dataset = ref({
      dimensions: ["时间", "数量"],
      source: [
        { 时间: "2020-01", 数量: 100 },
        { 时间: "2020-02", 数量: 110 },
        { 时间: "2020-03", 数量: 120 },
        { 时间: "2020-04", 数量: 130 },
        { 时间: "2020-05", 数量: 140 },
      ],
    });
    return {
      dataset,
    };
  },
};
</script>
```

### 设置维度与数据

<iframe style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/timehaswings/embed/LYeBMpY?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/timehaswings/pen/LYeBMpY">
  Untitled</a> by Timehaswings (<a href="https://codepen.io/timehaswings">@timehaswings</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### X 轴、Y 轴标签旋转

<iframe style="width: 100%;" scrolling="no" title="grace-bar-05" src="https://codepen.io/timehaswings/embed/NWXOeqR?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/timehaswings/pen/NWXOeqR">
  grace-bar-05</a> by Timehaswings (<a href="https://codepen.io/timehaswings">@timehaswings</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 更改主题

内置三个主题：light dark neutral 默认主题为：neutral

<iframe style="width: 100%;" scrolling="no" title="grace-bar-04" src="https://codepen.io/timehaswings/embed/vYpVQQP?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/timehaswings/pen/vYpVQQP">
  grace-bar-04</a> by Timehaswings (<a href="https://codepen.io/timehaswings">@timehaswings</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 与折线图混合

<iframe style="width: 100%;" scrolling="no" title="grace-bar-03" src="https://codepen.io/timehaswings/embed/ZEvqmqK?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/timehaswings/pen/ZEvqmqK">
  grace-bar-03</a> by Timehaswings (<a href="https://codepen.io/timehaswings">@timehaswings</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 双 Y 轴

<iframe style="width: 100%;" scrolling="no" title="grace-bar-06" src="https://codepen.io/timehaswings/embed/dyJwMjX?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/timehaswings/pen/dyJwMjX">
  grace-bar-06</a> by Timehaswings (<a href="https://codepen.io/timehaswings">@timehaswings</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 可设置属性列表

| 属性     | 描述                                                                    | 类型             | 默认值             | 备注 |
| -------- | ----------------------------------------------------------------------- | ---------------- | ------------------ | ---- |
| aria     | 是否启用无障碍                                                          | boolean          | false              |      |
| width    | 图表宽度                                                                | [String, Number] | auto               |      |
| height   | 图表高度                                                                | [String, Number] | 450                |      |
| renderer | 渲染引擎                                                                | String           | canvas             |      |
| title    | 标题配置                                                                | Object           | null               |      |
| grid     | 同 echarts [grid](https://echarts.apache.org/zh/option.html#grid)       | Object           | {}                 |      |
| legend   | 同 echarts [legend](https://echarts.apache.org/zh/option.html#legend)   | Object           | {}                 |      |
| tooltip  | 同 echarts [tooltip](https://echarts.apache.org/zh/option.html#tooltip) | Object           | {}                 |      |
| toolbox  | 同 echarts [toolbox](https://echarts.apache.org/zh/option.html#toolbox) | Object           | null               |      |
| xAxis    | x 轴设置                                                                | Object           | {type: "category"} |      |
| yAxis    | y 轴设置                                                                | Object           | {type: "value"}    |      |

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title), grace-charts 属性与其基本一致
