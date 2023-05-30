import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  ParallelComponent,
  ToolboxComponent,
  TimelineComponent,
  PolarComponent,
  BrushComponent,
  GraphicComponent,
  GeoComponent,
  DataZoomComponent,
  MarkPointComponent,
  CalendarComponent,
  TransformComponent,
  VisualMapComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import light from "./asset/theme/light.json";
import dark from "./asset/theme/dark.json";
import neutral from "./asset/theme/neutral.json";

const components = [
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  ParallelComponent,
  ToolboxComponent,
  TimelineComponent,
  DataZoomComponent,
  MarkPointComponent,
  CalendarComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  TransformComponent,
  VisualMapComponent,
  PolarComponent,
  BrushComponent,
  GraphicComponent,
  GeoComponent,
];

echarts.registerTheme("neutral", neutral);
echarts.registerTheme("light", light);
echarts.registerTheme("dark", dark);
/**
 * By introducing components on demand, the packaging volume can be reduced
 */
export default (charts) => {
  echarts.use(components.concat(charts));
  return echarts;
};
