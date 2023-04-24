# 地图

### 单独引入的用法

```js
<template>
  <GraceMap :series="series"></GraceMap>
</template>

<script>
import { ref } from "vue";
import { GraceMap } from "grace-charts";

export default {
  components: { GraceMap },
  setup() {
    const series = ref(
      {
        name: "中国",
        map: "china",
        data: [
          { name: "黑龙江省", value: 20057.34 },
          { name: "四川省", value: 15477.48 },
          { name: "广东省", value: 31686.1 },
        ],
      }
    );
    return {
      series,
    };
  },
};
</script>

```

### 设置数据

目前仅支持 geo 地图，国家仅支持中国，省份与城市的详细地图目前也不支持

<iframe scrolling="no" title="grace-parallel-01" src="https://codepen.io/nowords/embed/mdxyWzM?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/mdxyWzM">
  grace-parallel-01</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 可设置属性列表

| 属性    | 描述                                                                    | 类型             | 默认值 | 备注 |
| ------- | ----------------------------------------------------------------------- | ---------------- | ------ | ---- |
| aria    | 是否启用无障碍                                                          | boolean          | false  |      |
| width   | 图表宽度                                                                | [String, Number] | auto   |      |
| height  | 图表高度                                                                | [String, Number] | 450    |      |
| title   | 标题配置                                                                | Object           | null   |      |
| grid    | 同 echarts [grid](https://echarts.apache.org/zh/option.html#grid)       | Object           | {}     |      |
| tooltip | 同 echarts [tooltip](https://echarts.apache.org/zh/option.html#tooltip) | Object           | {}     |      |
| toolbox | 同 echarts [toolbox](https://echarts.apache.org/zh/option.html#toolbox) | Object           | null   |      |
| series  | 同 echarts [series](https://echarts.apache.org/zh/option.html#series)   | Object           | null   |      |

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title) , grace-charts 属性与其基本一致
