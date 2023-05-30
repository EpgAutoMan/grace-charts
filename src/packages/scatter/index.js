import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { ScatterChart } from "echarts/charts";

const echarts = getEcharts([ScatterChart]);
const props = {
  grid: {
    type: Object,
    default: () => {
      return {
        bottom: "45px",
        top: "100px",
        left: "5%",
        right: "5%",
      };
    },
  },
  legend: {
    type: Object,
    default: () => {
      return {
        orient: "horizontal",
        x: "center",
        left: "center",
        width: "auto",
        padding: [35, 0, 0, 0],
      };
    },
  },
};
export default defineComponent({
  name: "GraceScatter",
  ...generate(echarts, "scatter", props),
});
