# 树图

### 单独引入的用法

```js
<template>
  <GraceTree :series="series"></GraceTree>
</template>

<script>
import { ref } from "vue";
import { GraceTree } from "grace-charts";

export default {
  components: { GraceTree },
  setup() {
    const data = {
      name: "A",
      children: [
        { name: "B1", children: [{ name: "C1" }, { name: "C2" }] },
        { name: "B2", children: [] },
        { name: "B3", children: [] },
        { name: "B4", children: [] },
        { name: "B5", children: [] },
        { name: "B6", children: [] },
        { name: "B7", children: [] },
        { name: "B8", children: [] }
      ]
    };
    const series = ref(
      [
        {
          type: "tree",
          data: [data],
          top: "1%",
          left: "7%",
          bottom: "1%",
          right: "20%",
          symbolSize: 7,
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 9
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left"
            }
          },
          emphasis: {
            focus: "descendant"
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    );
    return {
      series,
    };
  },
};
</script>

```

### 设置数据

<iframe scrolling="no" title="grace-gauge-03" src="https://codepen.io/nowords/embed/oNqgZbg?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/oNqgZbg">
  grace-gauge-03</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
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
| series   | 同 echarts [series](https://echarts.apache.org/zh/option.html#series)   | Object           | null   |      |

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title) , grace-charts 属性与其基本一致
