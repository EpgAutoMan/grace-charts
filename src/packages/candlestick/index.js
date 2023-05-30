import { defineComponent } from "vue";
import generate from "../../base";
import getEcharts from "../../chart";
import { CandlestickChart } from "echarts/charts";

const echarts = getEcharts([CandlestickChart]);

export default defineComponent({
  name: "GraceCandlestick",
  ...generate(echarts, "candlestick"),
});
