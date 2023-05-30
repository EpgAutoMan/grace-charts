import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { GraphChart } from "echarts/charts";

const echart = getEcharts([GraphChart]);

export default defineComponent({
  name: "GraceGraph",
  ...generate(echart, "graph"),
});
