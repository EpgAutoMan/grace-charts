# 水球图

### 单独引入的用法

```js
<template>
  <GraceLiquidfill :series="series"></GraceLiquidfill>
</template>

<script>
import { ref } from "vue";
import { GraceLiquidfill } from "grace-charts";

export default {
  components: { GraceLiquidfill },
  setup() {
    return {
      series: [
        {
          type: "liquidFill",
          data: [0.6, 0.5, 0.4, 0.3],
        },
      ],
    };
  },
};
</script>
```

### 设置 series 数据

形状可配置参数：circle cardioid diamond square triangle-forward triangle pentagon star 默认形状为：circle

<iframe height="396.6015625" style="width: 100%;" scrolling="no" title="grace-liquidfill-01" src="https://codepen.io/skyeli/embed/KKoWvzR?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/KKoWvzR">
  grace-liquidfill-01</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置颜色和不透明度

<iframe height="381.67578125" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/mdxWByX?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/mdxWByX">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 更改主题

内置三个主题：light dark neutral 默认主题为：neutral

<iframe height="393.859375" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/yLKMpOq?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/yLKMpOq">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置禁用波浪波动

<iframe height="397.98828125" style="width: 100%;" scrolling="no" title="grace-liquidfill-04" src="https://codepen.io/skyeli/embed/KKoWZKQ?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/KKoWZKQ">
  grace-liquidfill-04</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置图形样式

<iframe height="398.8828125" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/rNdypMP?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/rNdypMP">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 可设置属性列表

| 属性     | 描述                                                                         | 类型             | 默认值 | 备注 |
| -------- | ---------------------------------------------------------------------------- | ---------------- | ------ | ---- |
| aria     | 是否启用无障碍                                                               | boolean          | false  |      |
| width    | 图表宽度                                                                     | [String, Number] | auto   |      |
| height   | 图表高度                                                                     | [String, Number] | 450    |      |
| renderer | 渲染引擎                                                                     | String           | canvas |      |
| title    | 标题配置                                                                     | Object           | null   |      |
| series   | 同 echarts-liquidfill [series](https://github.com/ecomfe/echarts-liquidfill) | Object           | {}     |      |

更多属性可参考[echarts-liquidfill](https://github.com/ecomfe/echarts-liquidfill), grace-charts 属性与其基本一致
