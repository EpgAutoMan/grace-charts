import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { BoxplotChart } from "echarts/charts";

const echarts = getEcharts([BoxplotChart]);

const props = {
  yAxis: {
    type: Object,
    default: () => {
      return {
        type: "value",
        splitArea: {
          show: true,
        },
      };
    },
  },
};

export default defineComponent({
  name: "GraceBoxplot",
  ...generate(echarts, "boxplot", props),
});
