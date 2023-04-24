# 数据集

为了不让使用变得复杂，grace-charts 的数据集与 echarts 完全一致，[可参见 Echarts](https://echarts.apache.org/handbook/zh/concepts/dataset)

## 使用 dataset

也可以使用 dataset 设置数据集，dimensions 表示数据维度，第一个维度默认是 X 轴，从第二个维度开始则是为 Y 轴数据：

```js
<template>
  <GraceBar :dataset="dataset"></GraceBar>
</template>

<script>
import { ref } from "vue";
import { GraceBar } from "grace-charts";

export default {
  components: { GraceBar },
  setup() {
    const dataset = ref({
      dimensions: ["时间", "数量A", "数量B"],
      source: [
        { 时间: "2020-01", 数量A: 100, 数量B: 10 },
        { 时间: "2020-02", 数量A: 110, 数量B: 70 },
        { 时间: "2020-03", 数量A: 120, 数量B: 50 },
        { 时间: "2020-04", 数量A: 130, 数量B: 30 },
        { 时间: "2020-05", 数量A: 140, 数量B: 20 },
      ],
    });
    return {
      dataset,
    };
  },
};
</script>
```

演示：

<iframe class="code-iframe" src="./code/data01.html" scrolling="no" frameborder="no"></iframe>

## 使用 series

可以使用 series 设置数据集：

```js
<template>
  <GraceLine :xAxis="xAxis" :yAxis="yAxis" :series="series"></GraceLine>
</template>

<script>
import { ref } from "vue";
import { GraceLine } from "grace-charts";

export default {
  components: { GraceLine },
  setup() {
    const xAxis = ref(
    	{
           type: 'category',
           data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
         }
    );
    const yAxis = ref({});
    const series = ref(
    	 [
            {
              type: 'bar',
              name: '2015',
              data: [89.3, 92.1, 94.4, 85.4]
            },
            {
              type: 'bar',
              name: '2016',
              data: [95.8, 89.4, 91.2, 76.9]
            },
            {
              type: 'bar',
              name: '2017',
              data: [97.7, 83.1, 92.5, 78.1]
            }
         ]
    );
    return {
      xAxis,
      yAxis,
      series,
    };
  },
};
</script>
```

演示：

<iframe class="code-iframe" src="./code/data02.html" scrolling="no" frameborder="no"></iframe>
