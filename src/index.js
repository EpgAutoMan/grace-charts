import "./asset/chart.css";
import root from "./utils/root";
import GraceLine from "./packages/line";
import GracePie from "./packages/pie";
import GraceBar from "./packages/bar";
import GraceCandlestick from "./packages/candlestick";
import GraceRadar from "./packages/radar";
import GraceGauge from "./packages/gauge";
import GraceScatter from "./packages/scatter";
import GraceSunburst from "./packages/sunburst";
import GraceFunnel from "./packages/funnel";
import GraceSanKey from "./packages/sankey";
import GraceHeatmap from "./packages/heatmap";
import GraceGraph from "./packages/graph";
import GraceWordcloud from "./packages/wordcloud";
import GraceLiquidfill from "./packages/liquidfill";
import GraceTree from "./packages/tree";
import GraceTreemap from "./packages/treemap";
import GraceBoxplot from "./packages/boxplot";
import GraceParallel from "./packages/parallel";
import GraceMap from "./packages/map";
import GraceCustom from "./packages/custom";
import GraceCalendar from "./packages/custom/Calendar.vue";
import GraceGantt from "./packages/gantt/GraceGantt.vue";
import gantt from "./packages/gantt";

const charts = [
  GraceLine,
  GracePie,
  GraceBar,
  GraceRadar,
  GraceCandlestick,
  GraceGauge,
  GraceScatter,
  GraceSunburst,
  GraceFunnel,
  GraceSanKey,
  GraceHeatmap,
  GraceGraph,
  GraceWordcloud,
  GraceLiquidfill,
  GraceTree,
  GraceTreemap,
  GraceBoxplot,
  GraceParallel,
  GraceMap,
  GraceCustom,
  GraceCalendar,
  GraceGantt,
  gantt,
];

const graceCharts = {
  install: (app, options) => {
    root.config = options;
    charts.forEach((chart) => {
      app.component(chart.name, chart);
    });
  },
};

export {
  GraceLine,
  GracePie,
  GraceBar,
  GraceRadar,
  GraceCandlestick,
  GraceGauge,
  GraceScatter,
  GraceSunburst,
  GraceFunnel,
  GraceSanKey,
  GraceHeatmap,
  GraceGraph,
  GraceWordcloud,
  GraceLiquidfill,
  GraceTree,
  GraceTreemap,
  GraceBoxplot,
  GraceParallel,
  GraceMap,
  GraceCustom,
  GraceCalendar,
  GraceGantt,
};

export default graceCharts;
