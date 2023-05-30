import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { ParallelChart } from "echarts/charts";

const echarts = getEcharts([ParallelChart]);

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
  name: "GraceParallel",
  ...generate(echarts, "parallel", props),
});
