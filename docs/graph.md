# 关系图

### 单独引入的用法

```js
<template>
  <GraceGraph 
    :series="[
      {
        type: 'graph',
        data: graph.graphData,
        links: graph.graphLinks,
        coordinateSystem: null,
      },
    ]"
    :xAxis="{
      show: false,
    }"
    :yAxis="{
      show: false,
    }"
  >
  </GraceGraph>
</template>

<script>
import { ref } from "vue";
import { GraceGraph } from "grace-charts";

export default {
  components: { GraceGraph },
  setup() {
    const graph = ref({
      graphData: [
        {
          name: "Node 1",
          x: 300,
          y: 300,
        },
        {
          name: "Node 2",
          x: 800,
          y: 300,
        },
        {
          name: "Node 3",
          x: 550,
          y: 100,
        },
        {
          name: "Node 4",
          x: 550,
          y: 500,
        },
      ],
      graphLinks: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true,
          },
          lineStyle: {
            width: 5,
            curveness: 0.2,
          },
        },
        {
          source: "Node 2",
          target: "Node 1",
          label: {
            show: true,
          },
          lineStyle: {
            curveness: 0.2,
          },
        },
        {
          source: "Node 1",
          target: "Node 3",
        },
        {
          source: "Node 2",
          target: "Node 3",
        },
        {
          source: "Node 2",
          target: "Node 4",
        },
        {
          source: "Node 1",
          target: "Node 4",
        },
      ],
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: graphX,
      },
      yAxis: {
        type: "value",
      },
    });
    return {
      graph,
    };
  },
};
</script>
```

### 笛卡尔坐标系上的Graph

<iframe height="449.3333435058594" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tdaine/embed/gOemxQX?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/gOemxQX">
  Untitled</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Graph简单示例

<iframe height="473.3333740234375" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tdaine/embed/vYRxJoe?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/vYRxJoe">
  Untitled</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 基础关系图

<iframe height="422" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tdaine/embed/gOemGgj?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/gOemGgj">
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
