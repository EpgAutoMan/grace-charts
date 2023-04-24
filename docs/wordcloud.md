# 词云图

### 单独引入的用法

```js
<template>
  <GraceWordcloud :series="series"></GraceWordcloud>
</template>

<script>
import { ref } from "vue";
import { GraceWordcloud } from "grace-charts";

export default {
  components: { GraceWordcloud },
  setup() {
    return {
      series: [
        {
          type: "wordCloud",
          shape: "circle",
          data: [
            {
              name: "Streaming of segmented content",
              value: 6181,
            },
            {
              name: "Amy Schumer",
              value: 4386,
            },
            {
              name: "Jurassic World",
              value: 4055,
            },
            {
              name: "Charter Communications",
              value: 2467,
            },
            {
              name: "Chick Fil A",
              value: 2244,
            },
          ],
        },
      ],
    };
  },
};
</script>
```

### 设置 series 数据与形状

形状可配置参数：circle cardioid diamond square triangle-forward triangle pentagon star 默认形状为：circle

<iframe height="400.42578125" style="width: 100%;" scrolling="no" title="grace-wordcloud-01" src="https://codepen.io/skyeli/embed/OJvppav?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/OJvppav">
  grace-wordcloud-01</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置文字旋转范围和程度

<iframe height="396.453125" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/KKoWmmP?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/KKoWmmP">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 更改主题

内置三个主题：light dark neutral 默认主题为：neutral

<iframe height="393.515625" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/poLerjV?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/poLerjV">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置字体颜色及允许部分在画布外部绘制单词

<iframe height="327.953125" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/dymvWZd?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/dymvWZd">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 可设置属性列表

| 属性     | 描述                                                                        | 类型             | 默认值 | 备注 |
| -------- | --------------------------------------------------------------------------- | ---------------- | ------ | ---- |
| aria     | 是否启用无障碍                                                              | boolean          | false  |      |
| width    | 图表宽度                                                                    | [String, Number] | auto   |      |
| height   | 图表高度                                                                    | [String, Number] | 450    |      |
| renderer | 渲染引擎                                                                    | String           | canvas |      |
| title    | 标题配置                                                                    | Object           | null   |      |
| series   | 同 echarts-worldcloud [series](https://github.com/ecomfe/echarts-wordcloud) | Object           | {}     |      |

更多属性可参考[echarts-wordcloud](https://github.com/ecomfe/echarts-wordcloud), grace-charts 属性与其基本一致
