import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { TreeChart } from "echarts/charts";

const echarts = getEcharts([TreeChart]);

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
  name: "GraceTree",
  ...generate(echarts, "tree", props),
});
