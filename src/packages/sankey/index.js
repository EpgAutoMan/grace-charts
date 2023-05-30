import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { SankeyChart } from "echarts/charts";

const echarts = getEcharts([SankeyChart]);
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
  name: "GraceSanKey",
  ...generate(echarts, "sankey", props),
});
