# 旭日图

### 单独引入的用法

```js
<template>
  <GraceSunburst :series="series"></GraceSunburst>
</template>

<script>
import { ref } from "vue";
import { GraceSunburst } from "grace-charts";

export default {
  components: { GraceSunburst },
  setup() {
    var data = [
      {
        name: "Grandpa",
        children: [
          {
            name: "Uncle Leo",
            value: 15,
            children: [
              {
                name: "Cousin Jack",
                value: 2,
              },
              {
                name: "Cousin Mary",
                value: 5,
                children: [
                  {
                    name: "Jackson",
                    value: 2,
                  },
                ],
              },
              {
                name: "Cousin Ben",
                value: 4,
              },
            ],
          },
          {
            name: "Aunt Jane",
            children: [
              {
                name: "Cousin Kate",
                value: 4,
              },
            ],
          },
          {
            name: "Father",
            value: 10,
            children: [
              {
                name: "Me",
                value: 5,
                itemStyle: {
                  color: "red",
                },
              },
              {
                name: "Brother Peter",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Mike",
        children: [
          {
            name: "Uncle Dan",
            children: [
              {
                name: "Cousin Lucy",
                value: 3,
              },
              {
                name: "Cousin Luck",
                value: 4,
                children: [
                  {
                    name: "Nephew",
                    value: 2,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Nancy",
        children: [
          {
            name: "Uncle Nike",
            children: [
              {
                name: "Cousin Betty",
                value: 1,
              },
              {
                name: "Cousin Jenny",
                value: 2,
              },
            ],
          },
        ],
      },
    ];
    const series=[
        {
          type: "sunburst",
          data: data,
        },
      ],
    return {
      series,
    };
  },
};
</script>
```

### 设置 series 数据

<iframe height="512.20703125" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/rNdyJGL?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/rNdyJGL">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 设置为圆角显示

<iframe height="488.859375" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/GRxWQwP?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/GRxWQwP">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 更改主题

内置三个主题：light dark neutral 默认主题为：neutral

<iframe height="491.43359375" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/skyeli/embed/WNzpzev?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/WNzpzev">
  Untitled</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 标签旋转

<iframe height="498.41015625" style="width: 100%;" scrolling="no" title="grace-sunburst-04" src="https://codepen.io/skyeli/embed/KKoWoKM?default-tab=js%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/skyeli/pen/KKoWoKM">
  grace-sunburst-04</a> by skye (<a href="https://codepen.io/skyeli">@skyeli</a>)
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

更多属性可参考[echarts](https://echarts.apache.org/zh/option.html#title), grace-charts 属性与其基本一致
