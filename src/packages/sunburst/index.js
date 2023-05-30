import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { SunburstChart } from "echarts/charts";

const echarts = getEcharts([SunburstChart]);
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
  visualMap: {
    type: Object,
    default: () => {
      return {};
    },
  },
};

export default defineComponent({
  name: "GraceSunburst",
  ...generate(echarts, "sunburst", props),
});
