const wordCloud = {
  type: "wordCloud",
  gridSize: 5,
  rotationRange: [-90, 90],
  rotationStep: 20,
  shape: "circle",
  width: "90%",
  height: "90%",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  emphasis: {
    focus: "self",
    textStyle: {
      textShadowBlur: 3,
    },
  },
  textStyle: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: function () {
      return (
        "rgb(" +
        [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
        ].join(",") +
        ")"
      );
    },
  },
  data: [],
};

const liquidFill = {
  type: "liquidFill",
  outline: {
    show: false,
  },
  data: [],
};

const tree = {
  type: "tree",
  symbolSize: 7,
  label: {
    position: "left",
    verticalAlign: "middle",
    align: "right",
    fontSize: 9,
  },
  leaves: {
    label: {
      position: "right",
      verticalAlign: "middle",
      align: "left",
    },
  },
  emphasis: {
    focus: "descendant",
  },
  expandAndCollapse: true,
  animationDuration: 550,
  animationDurationUpdate: 750,
};

const treemap = {
  type: "treemap",
  levels: [
    {
      itemStyle: {
        borderWidth: 0,
        gapWidth: 5,
      },
    },
    {
      itemStyle: {
        gapWidth: 1,
      },
    },
    {
      colorSaturation: [0.35, 0.5],
      itemStyle: {
        gapWidth: 1,
        borderColorSaturation: 0.6,
      },
    },
  ],
};

const boxplot = {
  type: "boxplot",
  boxWidth: [7, 50],
  itemStyle: {
    color: "#fff",
    borderWidth: 1,
  },
  emphasis: {
    scale: true,
    itemStyle: {
      borderWidth: 2,
      shadowBlur: 5,
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowColor: "rgba(0, 0, 0, 0.2)",
    },
  },
};

const map = {
  type: "map",
  roam: true,
  animationDurationUpdate: 1000,
  universalTransition: true,
  label: {
    show: false,
  },
};

const seriesMap = {
  wordCloud,
  liquidFill,
  tree,
  treemap,
  boxplot,
  map,
};

/**
 * Merge user config and default config
 * @param {*} userSeries
 * @param {*} defaultSeries
 */
const mergeSeries = (userSeries, defaultSeries) => {
  if (userSeries instanceof Array) {
    for (let series of userSeries) {
      for (let key in defaultSeries) {
        if (!series[key]) {
          series[key] = defaultSeries[key];
        }
      }
    }
  } else if (userSeries instanceof Object) {
    for (let key in defaultSeries) {
      if (!userSeries[key]) {
        userSeries[key] = defaultSeries[key];
      }
    }
  }
};

export default (series, type, dataset) => {
  if (series) {
    if (seriesMap[type]) {
      mergeSeries(series, seriesMap[type]);
    }
  } else {
    if (dataset && dataset.dimensions) {
      const sis = [];
      for (let i = 0; i < dataset.dimensions.length - 1; i++) {
        sis.push({ type });
      }
      series = sis;
    }
  }
  return series;
};
