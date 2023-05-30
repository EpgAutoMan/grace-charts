import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { GaugeChart } from "echarts/charts";

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

const echarts = getEcharts([GaugeChart]);

export default defineComponent({
  name: "GraceGauge",
  ...generate(echarts, "gauge", props),
});
