import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { FunnelChart } from "echarts/charts";

const echarts = getEcharts([FunnelChart]);

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
  name: "GraceFunnel",
  ...generate(echarts, "funnel", props),
});
