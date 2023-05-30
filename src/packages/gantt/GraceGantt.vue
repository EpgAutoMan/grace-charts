<template>
  <div
    style="overflow-y: hidden; overflow-x: hidden; width: 100%; display: flex"
    :style="{ height: ganttHeight }"
  >
    <div :style="{ width: layoutWidth[0] }">
      <div class="table-head">
        <table class="grace-table" aria-hidden="true">
          <thead>
            <tr>
              <th v-for="item in dataset.dimensions" :key="item" :id="item">
                {{ item }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-body" ref="leftBody">
        <table class="grace-table" aria-hidden="true">
          <tbody>
            <tr v-for="index in tableRows" :key="index">
              <td
                v-for="(item, headIndex) in dataset.dimensions"
                :key="item"
                :style="{ height: height.tdHeight - 1 + 'px' }"
              >
                <span v-if="headIndex === finishRateIndex">
                  {{
                    dataset.source[index - 1]
                      ? dataset.source[index - 1][item] * 100 + "%"
                      : ""
                  }}
                </span>
                <span v-else>
                  {{
                    dataset.source[index - 1]
                      ? dataset.source[index - 1][item]
                      : ""
                  }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="height: 30px; background-color: #eeeeee"></div>
    </div>
    <div :style="{ width: layoutWidth[1] }">
      <gantt
        ref="gantt"
        :height="ganttHeight"
        :series="series"
        :yAxis="yAxis"
        :dataset="dataset"
        :dataZoom="dataZoom"
        v-bind="$attrs"
      >
      </gantt>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/lib/echarts";

export default {
  name: "GraceGantt",
  props: {
    dataset: {
      type: Object,
      default: () => {
        return {
          dimensions: [],
          source: [],
        };
      },
    },
    startDateIndex: {
      type: Number,
      default: 2,
    },
    endDateIndex: {
      type: Number,
      default: 3,
    },
    finishRateIndex: {
      type: Number,
      default: 4,
    },
    ganttHeight: {
      type: String,
      default: "800px",
    },
    layoutWidth: {
      type: Array,
      default: () => {
        return ["40%", "60%"];
      },
    },
    rectHeight: {
      type: Number,
      default: 0.6,
    },
    planRectColor: {
      type: String,
      default: "#AACCF9",
    },
    finishRectColor: {
      type: String,
      default: "#ddb30b",
    },
  },
  setup(props) {
    const tableRows = ref(0);
    const height = ref({
      tdHeight: 30,
      thHeight: 40,
    });
    let containerHeight = 0;
    let tdNum = ref(0);
    let echartInstance = null;
    const gantt = ref(null);
    const leftBody = ref(null);
    const dataZoom = ref([
      {
        type: "slider",
        xAxisIndex: 0,
        filterMode: "weakFilter",
        borderColor: "transparent",
        backgroundColor: "#e2e2e2",
        height: 20,
        bottom: 10,
        start: 0,
        end: 20,
        handleIcon:
          "path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        handleSize: "80%",
        showDetail: false,
      },
      {
        type: "inside",
        id: "insideX",
        xAxisIndex: 0,
        filterMode: "weakFilter",
        start: 0,
        end: 26,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
      },
      {
        type: "slider",
        yAxisIndex: 0,
        zoomLock: false,
        width: 10,
        right: 15,
        top: 40,
        bottom: 30,
        start: 0,
        end: 100,
        handleSize: 0,
        showDetail: false,
      },
      {
        type: "inside",
        id: "insideY",
        yAxisIndex: 0,
        start: 95,
        end: 100,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
    ]);
    onMounted(() => {
      echartInstance = gantt.value.getInstance();
      containerHeight = echartInstance._api.getHeight();
      dataZoomMonitor(echartInstance);
      getLayoutTdHeight();
    });
    function dataZoomMonitor(instance) {
      instance.on("datazoom", function (params) {
        let startValue = instance._api.getOption().dataZoom[2].startValue;
        leftBody.value.scrollTop = startValue * 32;
      });
    }
    function getLayoutTdHeight() {
      tdNum.value =
        parseInt(
          (containerHeight - height.value.thHeight - 30) / height.value.tdHeight
        ) - 1;
      height.value.tdHeight =
        (containerHeight - height.value.thHeight - 30) / tdNum.value;
      let sourceLength = props.dataset.source.length;
      if (tdNum.value < sourceLength) {
        yAxis.value.data = [...Array(sourceLength).keys()];
        tableRows.value = sourceLength;
        dataZoom.value[2].end = (tdNum.value / sourceLength) * 100;
      } else {
        yAxis.value.data = [...Array(tdNum.value).keys()];
        dataZoom.value[2].start = 0;
        tableRows.value = tdNum.value;
      }
    }
    function renderItem(params, api) {
      let categoryIndex = api.value(0);
      // 计划开始日期对应的像素值
      let planStartDate = api.coord([
        api.value(props.startDateIndex),
        categoryIndex,
      ]);
      // 计划结束日期对应的像素值
      let planEndDate = api.coord([
        api.value(props.endDateIndex),
        categoryIndex,
      ]);
      let rectHeight = api.size([0, 1])[1] * props.rectHeight;
      // 计划时间矩形
      let rectPlanShape = calculateRect(
        planStartDate,
        planEndDate[0] - planStartDate[0],
        rectHeight,
        params
      );
      let rectActShape = null;
      let width = 0;
      if (api.value(props.finishRateIndex) !== 0) {
        if (api.value(props.finishRateIndex) >= 1) {
          width = planEndDate[0] - planStartDate[0];
        } else if (
          api.value(props.finishRateIndex) > 0 &&
          api.value(props.finishRateIndex) < 1
        ) {
          width =
            (planEndDate[0] - planStartDate[0]) *
            api.value(props.finishRateIndex);
        }
        // 实际进度矩形
        rectActShape = calculateRect(planStartDate, width, rectHeight, params);
      }
      return drawRect(api, rectActShape, rectPlanShape);
    }
    function calculateRect(planStartDate, width, rectHeight, params) {
      return echarts.graphic.clipRectByRect(
        {
          x: planStartDate[0],
          y: planStartDate[1] - rectHeight / 2,
          width: width,
          height: rectHeight,
        },
        {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height,
        }
      );
    }
    function drawRect(api, rectActShape, rectPlanShape) {
      if (rectActShape === null) {
        return (
          rectPlanShape && {
            type: "group",
            children: [
              {
                type: "rect",
                shape: rectPlanShape,
                style: {
                  fill: props.planRectColor,
                },
              },
            ],
          }
        );
      } else {
        return (
          rectPlanShape && {
            type: "group",
            children: [
              {
                type: "rect",
                shape: rectPlanShape,
                style: {
                  fill: props.planRectColor,
                },
              },
              {
                type: "rect",
                shape: rectActShape,
                style: {
                  fill: props.finishRectColor,
                },
              },
            ],
          }
        );
      }
    }
    const yAxis = ref({
      data: [],
      axisTick: {
        alignWithLabel: true,
      },
      splitLine: {
        lineStyle: {
          type: "solid",
          width: 1,
        },
      },
      axisLabel: {
        show: false,
      },
      inverse: true,
    });
    const series = ref([
      {
        type: "custom",
        renderItem: renderItem,
        itemStyle: {
          opacity: 0.8,
        },
        barCategoryGap: 40,
        encode: {
          x: [props.startDateIndex, props.endDateIndex],
          y: 0,
          tooltip: props.dataset.dimensions,
        },
        tooltip: {
          formatter: (params) => {
            let obj = params.data;
            let str = `${params.marker} ${obj["项目名称"]}<br/>`;
            for (let o in obj) {
              if (o !== "项目名称") {
                str += `<span>${o}: ${obj[o]}</span><br/>`;
              }
            }
            return str;
          },
        },
      },
    ]);
    return {
      series,
      yAxis,
      dataZoom,
      gantt,
      height,
      tdNum,
      tableRows,
      leftBody,
    };
  },
};
</script>
<style scoped>
.grace-table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
}
th {
  border: 1px solid #e6e6e6;
  color: #666666;
  font-size: 16px;
  height: 38px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
td {
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.table-head {
  background-color: #eeeeee;
  color: #000;
}
.table-body {
  width: 100%;
  height: calc(100% - 39px - 30px);
  overflow-y: hidden;
}
.table-head table,
.table-body table {
  table-layout: fixed;
}
.table-body table tr:nth-child(2n + 1) {
  background-color: #f2f2f2;
}
.table-body table tr:hover {
  background-color: #bbd6fa;
  transition: 0.2s;
}
</style>
