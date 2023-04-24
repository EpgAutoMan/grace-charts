# 热力图

### 单独引入的用法

```js
<template>
  <GraceHeatmap :dataset="dataset"></GraceHeatmap>
</template>

<script>
import { ref } from "vue";
import { GraceHeatmap } from "grace-charts";

export default {
  components: { GraceHeatmap },
  setup() {
    const dataset = ref({
      dataset: {
        dimensions: ["hours", "days", "height"],
        source: [
          { hours: "12a", days: "Saturday", height: 1 },
          { hours: "1a", days: "Friday", height: 4 },
          { hours: "2a", days: "Thursday", height: 5 },
          { hours: "3a", days: "Wednesday", height: 1 },
          { hours: "4a", days: "Tuesday", height: 1 },
          { hours: "5a", days: "Monday", height: 2 },
          { hours: "6a", days: "Sunday", height: 5 },
          { hours: "7a", days: "Monday", height: 4 },
          { hours: "8a", days: "Wednesday", height: 1 },
          { hours: "9a", days: "Friday", height: 3 },
          { hours: "10a", days: "Saturday", height: 3 },
          { hours: "11a", days: "Friday", height: 7 },
        ],
      },
    });
    return {
      dataset,
    };
  },
};
</script>
```

### 设置维度和数据

<iframe height="440" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tdaine/embed/wvmJeZJ?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/wvmJeZJ">
  Untitled</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### X轴、Y轴标签旋转

<iframe height="470.6666259765625" style="width: 100%;" scrolling="no" title="grace-heatmap-02" src="https://codepen.io/tdaine/embed/YzaZxyy?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/YzaZxyy">
  grace-heatmap-02</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 更改主题

内置三个主题：light dark neutral 默认主题为：neutral

<iframe height="468.66668701171875" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tdaine/embed/VwXpzjv?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/VwXpzjv">
  Untitled</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
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
| tooltip  | 同 echarts [tooltip](https://echarts.apache.org/zh/option.html#tooltip) | Object           | {}                 |      |
| toolbox  | 同 echarts [toolbox](https://echarts.apache.org/zh/option.html#toolbox) | Object           | null               |      |
| xAxis    | x 轴设置                                                                | Object           | {type: "category"} |      |
| yAxis    | y 轴设置                                                                | Object           | {type: "value"}    |      |

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title), grace-charts 属性与其基本一致
