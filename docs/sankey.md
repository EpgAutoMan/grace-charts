# 桑基图

### 单独引入的用法

```js
<template>
  <GraceSanKey :series="series"></GraceSanKey>
</template>

<script>
import { ref } from "vue";
import { GraceSanKey } from "grace-charts";

export default {
  components: { GraceSanKey },
  setup() {
    const series= [
      {
        type: "sankey",
        data: data1.nodes,
        links: data1.links,
      },
    ],
     const data1 = {
      nodes: [
        { name: "Total" },
        { name: "Environment" },
        { name: "Land use" },
        { name: "Cocoa butter (Organic)" },
        { name: "Cocoa mass (Organic)" },
        { name: "Hazelnuts (Organic)" },
        { name: "Cane sugar (Organic)" },
        { name: "Vegetables (Organic)" },
        { name: "Climate change" },
        { name: "Harmful substances" },
        { name: "Water use" },
        { name: "Resource depletion" },
      ],
      links: [
        { source: "Total", target: "Environment", value: 0.342284047256003 },
        { source: "Environment", target: "Land use", value: 0.32322870366987 },
        {
          source: "Land use",
          target: "Cocoa butter (Organic)",
          value: 0.177682517071359,
        },
        {
          source: "Land use",
          target: "Cocoa mass (Organic)",
          value: 0.137241325342711,
        },
        {
          source: "Land use",
          target: "Hazelnuts (Organic)",
          value: 0.00433076373512774,
        },
        {
          source: "Land use",
          target: "Cane sugar (Organic)",
          value: 0.00296956039863467,
        },
        {
          source: "Land use",
          target: "Vegetables (Organic)",
          value: 0.00100453712203756,
        },
        {
          source: "Environment",
          target: "Climate change",
          value: 0.0112886157414413,
        },
      ],
    };
    return {
      series,
    };
  },
};
</script>
```

### 设置 series 数据

<iframe height="400.546875" style="width: 100%;" scrolling="no" title="grace-sankey-01" src="https://codepen.io/skyeli/embed/VwXpOjz?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/VwXpOjz">
  grace-sankey-01</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置垂直显示

<iframe height="402.87890625" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/mdxWYmx?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/mdxWYmx">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 更改主题

内置三个主题：light dark neutral 默认主题为：neutral

<iframe height="397.94921875" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/gOemJGj?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/gOemJGj">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 可设置属性列表

| 属性     | 描述                                                                    | 类型             | 默认值 | 备注 |
| -------- | ----------------------------------------------------------------------- | ---------------- | ------ | ---- |
| aria     | 是否启用无障碍                                                          | boolean          | false  |      |
| width    | 图表宽度                                                                | [String, Number] | auto   |      |
| height   | 图表高度                                                                | [String, Number] | 450    |      |
| renderer | 渲染引擎                                                                | String           | canvas |      |
| title    | 标题配置                                                                | Object           | null   |      |
| grid     | 同 echarts [grid](https://echarts.apache.org/zh/option.html#grid)       | Object           | {}     |      |
| legend   | 同 echarts [legend](https://echarts.apache.org/zh/option.html#legend)   | Object           | {}     |      |
| tooltip  | 同 echarts [tooltip](https://echarts.apache.org/zh/option.html#tooltip) | Object           | {}     |      |
| toolbox  | 同 echarts [toolbox](https://echarts.apache.org/zh/option.html#toolbox) | Object           | null   |      |

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title), grace-charts 属性与其基本一致
