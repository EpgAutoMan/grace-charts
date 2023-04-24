# 漏斗图

### 单独引入的用法

```js
<template>
  <GraceFunnel :dataset="dataset"></GraceFunnel>
</template>

<script>
import { ref } from "vue";
import { GraceFunnel } from "grace-charts";

export default {
  components: { GraceFunnel },
  setup() {
    const dataset = ref({
      dataset: {
        dimensions: ["name", "value"],
        source: [
          { value: 60, name: "Visit" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
          { value: 100, name: "Show" },
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

### 设置维度与数据

<iframe height="518.6666564941406" style="width: 100%;" scrolling="no" title="grace-funnel-01" src="https://codepen.io/tdaine/embed/XWENPZm?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/XWENPZm">
  grace-funnel-01</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 标签位置改变

<iframe height="525.3333435058594" style="width: 100%;" scrolling="no" title="grace-funnel-02" src="https://codepen.io/tdaine/embed/jOzVeQV?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/jOzVeQV">
  grace-funnel-02</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 更改主题

内置三个主题：light dark neutral 默认主题为：neutral

<iframe height="450" style="width: 100%;" scrolling="no" title="grace-funnel-03" src="https://codepen.io/tdaine/embed/OJvbrJO?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/OJvbrJO">
  grace-funnel-03</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 漏斗图位置、方向改变

<iframe height="531.3333435058594" style="width: 100%;" scrolling="no" title="grace-funnel-04" src="https://codepen.io/tdaine/embed/KKoNbQL?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tdaine/pen/KKoNbQL">
  grace-funnel-04</a> by Tdaine (<a href="https://codepen.io/tdaine">@tdaine</a>)
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

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title), grace-charts 属性与其基本一致
