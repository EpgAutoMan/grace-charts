import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { CustomChart } from "echarts/charts";
//日历图
const echarts = getEcharts([CustomChart]);

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
      return { show: false };
    },
  },
  height: {
    type: [String, Number],
    default: () => {
      return 600;
    },
  },
  legend: {
    type: Object,
    default: () => {
      return { show: false };
    },
  },
};
export default defineComponent({
  name: "GraceCustom",
  ...generate(echarts, "custom", props),
});
