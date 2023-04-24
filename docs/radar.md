# 雷达图

### 单独引入的用法

```js
<template>
  <GraceRadar :radar="radar" :series="series"></GraceRadar>
</template>

<script>
import { ref } from "vue";
import { GraceRadar } from "grace-charts";

export default {
  components: { GracePie },
  setup() {
    const radar = ref({
      // shape: 'circle',
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 }
      ]
    });
    const series = ref(
      [
        {
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Allocated Budget"
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending"
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

<iframe scrolling="no" title="grace-gauge-03" src="https://codepen.io/nowords/embed/gOebgpN?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/gOebgpN">
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
| radar    | 同 echarts [radar](https://echarts.apache.org/zh/option.html#radar)     | Object           | null   |      |

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title) , grace-charts 属性与其基本一致
