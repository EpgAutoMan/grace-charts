# 散点图

```js
<template>
  <GraceScatter :dataset="dataset"></GraceScatter>
</template>

<script>
import { ref } from "vue";
import { GraceScatter } from "grace-charts";

export default {
  components: { GraceLine },
  setup() {
    const dataset = ref({
      dimensions: ["日期", "余额", "消费", "盈利"],
      source: [
        { 日期: "1-1", 余额: 1000, 消费: 2222, 盈利: 555 },
        { 日期: "1-2", 余额: 1000, 消费: 2222, 盈利: 555 },
        { 日期: "1-3", 余额: 1000, 消费: 2222, 盈利: 555 },
        { 日期: "1-4", 余额: 1000, 消费: 2222, 盈利: 555 },
      ],
    });
    return {
      dataset,
    };
  },
};
</script>
```
