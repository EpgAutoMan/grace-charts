# 矩形树图

### 单独引入的用法

```js
<template>
  <GraceTreemap :series="series"></GraceTreemap>
</template>

<script>
import { ref } from "vue";
import { GraceTreemap } from "grace-charts";

export default {
  components: { GraceTreemap },
  setup() {
    const series = ref(
      [
        {
          type: "treemap",
          data: [
            {
              name: "nodeA",
              value: 10,
              children: [
                {
                  name: "nodeAa",
                  value: 4
                },
                {
                  name: "nodeAb",
                  value: 6
                }
              ]
            },
            {
              name: "nodeB",
              value: 20,
              children: [
                {
                  name: "nodeBa",
                  value: 20,
                  children: [
                    {
                      name: "nodeBa1",
                      value: 20
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    );
    return {
      radar,
      series,
    };
  },
};
</script>

```

### 设置数据

<iframe scrolling="no" title="grace-treemap-01" src="https://codepen.io/nowords/embed/KKowWWB?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/KKowWWB">
  grace-treemap-01</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
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

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title) , grace-charts 属性与其基本一致
