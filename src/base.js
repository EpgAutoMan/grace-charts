import { h, ref, onMounted, onUnmounted, computed, toRefs, watch } from "vue";
import debounce from "./utils/debounce";
import { arrayOrObjIsEmpty } from "./utils/chartData";
import getDefaultSeries from "./series";

/**
 * Default animation when chart size changes
 */
const resizeAnimation = {
  duration: 1000,
  easing: "cubicOut",
};

/**
 * Default chart props
 */
const defaultProps = {
  aria: {
    type: Object,
    default: () => {
      return {
        enabled: false,
      };
    },
  },
  width: {
    type: [String, Number],
    default: "auto",
  },
  height: {
    type: [String, Number],
    default: 450,
  },
  emptyText: {
    type: String,
    default: "暂无数据",
  },
  resizeDebounce: {
    type: Number,
    default: 150,
  },
  renderer: {
    type: String,
    default: "canvas",
  },
  locale: {
    type: String,
    default: "ZH",
  },
  useDirtyRect: {
    type: Boolean,
    default: true,
  },
  title: {
    type: Object,
    default: null,
  },
  grid: {
    type: Object,
    default: () => {
      return {};
    },
  },
  radar: {
    type: Object,
    default: null,
  },
  legend: {
    type: Object,
    default: () => {
      return {};
    },
  },
  tooltip: {
    type: Object,
    default: () => {
      return {};
    },
  },
  polar: {
    type: Object,
    default: null,
  },
  toolbox: {
    type: Object,
    default: null,
  },
  brush: {
    type: Object,
    default: null,
  },
  timeline: {
    type: Object,
    default: null,
  },
  graphic: {
    type: Object,
    default: null,
  },
  geo: {
    type: Object,
    default: null,
  },
  xAxis: {
    type: Object,
    default: () => {
      return {
        type: "category",
      };
    },
  },
  yAxis: {
    type: Object,
    default: () => {
      return {
        type: "value",
      };
    },
  },
  dataset: {
    type: [Object, Array],
    default: () => {
      return {
        dimensions: [],
        source: [],
      };
    },
  },
  series: {
    type: [Object, Array],
    default: null,
  },
  events: {
    type: Object,
    default: null,
  },
  theme: {
    type: String,
    default: "neutral",
    validator(value) {
      return ["dark", "neutral", "light"].includes(value);
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  animation: {
    type: Boolean,
    default: true,
  },
  media: {
    type: Array,
    default: () => {
      return [];
    },
  },
  visualMap: {
    type: Object,
    default: () => {
      return null;
    },
  },
  parallel: {
    type: Object,
    default: null,
  },
  parallelAxis: {
    type: Array,
    default: () => {
      return [];
    },
  },
  log: {
    type: Boolean,
    default: false,
  },
  calendar: {
    type: Object,
    default: () => {
      return null;
    },
  },
  dataZoom: {
    type: Array || Object,
    default: () => {
      return null;
    },
  },
  color: {
    type: Array,
    default: () => {
      return [];
    },
  },
};

export default (echart, seriesType, chartProps = {}) => {
  return {
    props: { ...defaultProps, ...chartProps },
    setup(props, { expose }) {
      const container = ref(null);
      let instance = null;
      onMounted(() => {
        if (!parentObserver()) {
          init();
          addResizeListener();
        }
      });
      onUnmounted(() => {
        dispose();
        removeResizeListener();
      });
      const {
        aria,
        legend,
        tooltip,
        dataset,
        xAxis,
        yAxis,
        series,
        grid,
        title,
        radar,
        parallel,
        polar,
        toolbox,
        brush,
        timeline,
        graphic,
        geo,
        animation,
        loading,
        width,
        height,
        theme,
        locale,
        useDirtyRect,
        renderer,
        media,
        visualMap,
        parallelAxis,
        calendar,
        dataZoom,
        color,
        emptyText,
        resizeDebounce,
      } = toRefs(props);
      /**
       * Calculation echarts configuration item
       */
      const echartsOpts = computed(() => {
        const opts = {
          aria: aria.value,
          legend: legend.value,
          tooltip: tooltip.value,
          dataset: dataset.value,
          grid: grid.value,
          title: title.value,
          xAxis: xAxis.value,
          yAxis: yAxis.value,
          series: series.value,
          radar: radar.value,
          animation: animation.value,
          parallel: parallel.value,
          polar: polar.value,
          toolbox: toolbox.value,
          brush: brush.value,
          timeline: timeline.value,
          graphic: graphic.value,
          geo: geo.value,
          media: media.value,
          visualMap: visualMap.value,
          parallelAxis: parallelAxis.value,
          dataZoom: dataZoom.value,
          color: color.value,
        };
        opts.series = getDefaultSeries(opts.series, seriesType, dataset.value);
        if (seriesType === "custom" && calendar.value) {
          opts["calendar"] = calendar.value;
        }
        if (props.log) {
          // eslint-disable-next-line
          console.log(opts);
        }
        return opts;
      });
      // Monitor echarts configuration item changes
      watch(
        [
          aria,
          legend,
          tooltip,
          dataset,
          xAxis,
          yAxis,
          series,
          grid,
          parallel,
          polar,
          toolbox,
          brush,
          timeline,
          graphic,
          geo,
          title,
          radar,
          media,
          visualMap,
          calendar,
          dataZoom,
          color,
        ],
        () => {
          instance.setOption(echartsOpts.value, true);
        },
        { deep: true }
      );
      watch([width, height], () => handleResize());
      // Monitor loading changes
      watch(loading, () => isShowLoading());
      // Monitor theme locale useDirtyRect changes
      watch([series, width, height, theme, locale, useDirtyRect], () => {
        dispose();
        init();
      });
      const addResizeListener = () => {
        if (typeof window !== "undefined") {
          window.addEventListener("resize", handleResize, { passive: true });
        }
      };
      const removeResizeListener = () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", handleResize);
        }
      };
      // handling when displaying containers
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const currentValue = mutation.target.style.display;
          if (currentValue !== "none" && !parentObserver()) {
            init();
            addResizeListener();
            observer.disconnect();
          }
        });
      });
      // observe the closest invisible parent element
      const parentObserver = () => {
        let curr = container.value;
        while (curr) {
          if (curr.style && curr.style.display === "none") {
            observer.observe(curr, {
              attributes: true,
              attributeFilter: ["style"],
            });
            break;
          }
          curr = curr.parentNode;
        }
        return curr;
      };
      // handle the size of the container changes
      const handleResize = debounce(() => {
        if (instance !== null) {
          instance.resize({
            width: width.value,
            height: height.value,
            animation: resizeAnimation,
          });
        }
      }, resizeDebounce.value);
      // dispose echarts
      const dispose = () => {
        if (instance !== null && !instance.isDisposed()) {
          instance.dispose();
          instance = null;
        }
      };
      // init config
      const initOpts = computed(() => {
        return {
          width: width.value,
          height: height.value,
          locale: locale.value,
          useDirtyRect: useDirtyRect.value,
          renderer: renderer.value,
        };
      });
      // chart data is empty
      const isEmpty = computed(() => {
        return (
          !loading.value &&
          arrayOrObjIsEmpty(dataset.value, "source") &&
          arrayOrObjIsEmpty(series.value, "data")
        );
      });
      // empty text background color
      const emptyAreaBgColor = computed(() => {
        const bgColorMap = {
          dark: "rgba(43, 49, 64, 0.9)",
          light: "rgba(255, 255, 255, 0.9)",
          neutral: "rgba(238, 238, 238, 0.9)",
        };
        return bgColorMap[theme.value];
      });
      // init echarts
      const init = () => {
        instance = echart.init(container.value, props.theme, initOpts.value);
        instance.setOption(echartsOpts.value);
        isShowLoading();
        eventProxy();
      };
      // show or hide loading
      const isShowLoading = () => {
        if (instance !== null) {
          loading.value ? instance.showLoading() : instance.hideLoading();
        }
      };
      // get echarts instance
      const getInstance = () => {
        return instance;
      };
      // echarts event proxy
      const eventProxy = () => {
        if (props.events) {
          for (let key in props.events) {
            instance.on(key, (...args) => {
              props.events[key].apply(null, args);
            });
          }
        }
      };
      // dispatch action
      const dispatchAction = (action) => {
        if (instance !== null) {
          instance.dispatchAction(action);
        }
      };
      // expose methods to parent components
      if (typeof expose === "function") {
        expose({ getInstance, init, dispatchAction, dispose });
      }
      // render
      return () => {
        return h(
          "div",
          {
            class: "grace-chart-container",
          },
          [
            h("div", {
              class: "grace-chart-instance",
              ref: container,
            }),
            isEmpty.value
              ? h(
                  "div",
                  {
                    class: "grace-chart-empty",
                    style: { backgroundColor: emptyAreaBgColor.value },
                  },
                  [h("span", emptyText.value)]
                )
              : null,
          ]
        );
      };
    },
  };
};
