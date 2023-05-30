import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { RadarChart } from "echarts/charts";

const echarts = getEcharts([RadarChart]);

const props = {
  xAxis: {
    type: Object,
    default: () => {
      return {
        show: false,
      };
    },
  },
  yAxis: {
    type: Object,
    default: () => {
      return {
        show: false,
      };
    },
  },
};

export default defineComponent({
  name: "GraceRadar",
  ...generate(echarts, "radar", props),
});
