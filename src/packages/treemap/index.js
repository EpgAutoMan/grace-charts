import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { TreemapChart } from "echarts/charts";

const echarts = getEcharts([TreemapChart]);

const hideOpts = () => {
  return {
    show: false,
  };
};

const props = {
  xAxis: {
    type: Object,
    default: hideOpts,
  },
  yAxis: {
    type: Object,
    default: hideOpts,
  },
};

export default defineComponent({
  name: "GraceTreemap",
  ...generate(echarts, "treemap", props),
});
