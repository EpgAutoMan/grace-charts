# 蜡烛图

```js
<template>
  <GraceCandlestick :series="series"></GraceCandlestick>
</template>

<script>
import { ref } from "vue";
import { GraceCandlestick } from "grace-charts";

export default {
  components: { GraceCandlestick },
  setup() {
    const series = ref(
      [
        {
          type: "candlestick",
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42],
          ],
        },
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

<iframe scrolling="no" title="grace-pie-04" src="https://codepen.io/nowords/embed/gOebLGB?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/gOebLGB">
  grace-pie-04</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 可设置属性列表

| 属性     | 描述                                                                    | 类型             | 默认值             | 备注 |
| -------- | ----------------------------------------------------------------------- | ---------------- | ------------------ | ---- |
| aria     | 是否启用无障碍                                                          | boolean          | false              |      |
| theme    | 主题                                                                    | String           | neutral            |      |
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
