# 饼图

### 单独引入的用法

```js
<template>
  <GracePie :dataset="dataset" :series="series"></GracePie>
</template>

<script>
import { ref } from "vue";
import { GracePie } from "grace-charts";

export default {
  components: { GracePie },
  setup() {
    const dataset = ref({
      source: [
        { value: 1048, name: "中文" },
        { value: 735, name: "英语" },
        { value: 580, name: "法语法语法语" },
        { value: 484, name: "俄语" },
        { value: 1333, name: "阿姆哈拉语" },
        { value: 484, name: "泰语" },
        { value: 600, name: "拉丁语" },
      ],
    });
    const series = ref(
      [
        {
          name: "语言统计表",
          type: "pie",
          radius: "40%",
        },
      ]
    );
    return {
      dataset,
      series,
    };
  },
};
</script>

```

### 设置数据

<iframe scrolling="no" title="grace-line-06" src="https://codepen.io/nowords/embed/rNdaMKX?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/rNdaMKX">
  grace-line-06</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置半径

<iframe scrolling="no" title="grace-pie-02" src="https://codepen.io/nowords/embed/MWVYbeW?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/MWVYbeW">
  grace-pie-02</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 环形图

<iframe scrolling="no" title="grace-pie-01" src="https://codepen.io/nowords/embed/BaryQNO?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/BaryQNO">
  grace-pie-01</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 玫瑰图

<iframe scrolling="no" title="grace-pie-03" src="https://codepen.io/nowords/embed/BaryQzG?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" class="code-iframe">
  See the Pen <a href="https://codepen.io/nowords/pen/BaryQzG">
  grace-pie-03</a> by nowords (<a href="https://codepen.io/nowords">@nowords</a>)
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
