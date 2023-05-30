import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { PieChart } from "echarts/charts";

const echarts = getEcharts([PieChart]);

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
  series: {
    type: Array,
    default: () => {
      return [
        {
          type: "pie",
          radius: "40%",
          label: {
            formatter: "{b}: {d}%",
          },
        },
      ];
    },
  },
  legend: {
    type: Object,
    default: () => {
      return {
        top: "bottom",
        left: "center",
        padding: 10,
      };
    },
  },
};

export default defineComponent({
  name: "GracePie",
  ...generate(echarts, "pie", props),
});
