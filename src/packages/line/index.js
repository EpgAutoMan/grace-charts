import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { LineChart } from "echarts/charts";

const echarts = getEcharts([LineChart]);
const props = {
  tooltip: {
    type: Object,
    default: () => {
      return {
        trigger: "axis",
      };
    },
  },
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
  name: "GraceLine",
  ...generate(echarts, "line", props),
});
