import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import china from "../../asset/geoJson/china.json";
import { MapChart } from "echarts/charts";

const echarts = getEcharts([MapChart]);
echarts.registerMap("china", china);

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
  name: "GraceMap",
  ...generate(echarts, "map", props),
});
