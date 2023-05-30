import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { CustomChart } from "echarts/charts";

const echarts = getEcharts([CustomChart]);

const props = {
  grid: {
    type: Object,
    default: () => {
      return {
        show: true,
        top: 40,
        bottom: 30,
        left: 0,
        right: 30,
        backgroundColor: "#fff",
        borderWidth: 0,
      };
    },
  },
  xAxis: {
    type: Object,
    default: () => {
      return {
        type: "time",
        position: "top",
        minInterval: 3600 * 24 * 1000,
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
          },
        },
        axisLabel: {
          interval: 0,
          insider: false,
          align: "center",
          formatter: `{yyyy}\n{MM}/{dd}`,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          lineStyle: {
            color: "#929ABA",
          },
        },
      };
    },
  },
};

export default defineComponent({
  name: "Gantt",
  ...generate(echarts, "custom", props),
});
