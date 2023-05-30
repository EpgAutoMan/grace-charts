import { defineComponent } from "vue";
import generate from "../../base";
import "echarts-liquidfill";
import getEcharts from "../../chart";
const echarts = getEcharts([]);

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
  name: "GraceLiquidfill",
  ...generate(echarts, "liquidFill", props),
});
