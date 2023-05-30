import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { HeatmapChart } from "echarts/charts";

const echarts = getEcharts([HeatmapChart]);
const props = {
  visualMap: {
    type: Object,
    default: () => {
      return {
        orient: "horizontal",
        top: "0%",
        left: "center",
        calculable: true,
      };
    },
  },
  yAxis: {
    type: Object,
    default: () => {
      return {
        type: "category",
        splitArea: {
          show: true,
        },
      };
    },
  },
  xAxis: {
    type: Object,
    default: () => {
      return {
        type: "category",
        splitArea: {
          show: true,
        },
      };
    },
  },
};

export default defineComponent({
  name: "GraceHeatmap",
  ...generate(echarts, "heatmap", props),
});
