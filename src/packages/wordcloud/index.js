import { defineComponent } from "vue";
import generate from "../../base";
import "echarts-wordcloud";
import getEcharts from "../../chart";
const echarts = getEcharts([]);
const hideOpts = () => {
  return {
    show: false,
  };
};

const props = {
  xAxis: {
    type: Object,
    default: hideOpts,
  },
  yAxis: {
    type: Object,
    default: hideOpts,
  },
};
export default defineComponent({
  name: "GraceWordcloud",
  ...generate(echarts, "wordCloud", props),
});
