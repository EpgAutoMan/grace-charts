<template>
  <div style="padding: 0 20px">
    <div style="width: 100% position: relative">
      <div class="title" style="float: left">
        <slot name="left_operations">
          <span>{{ opts.title }}</span>
        </slot>
      </div>

      <div class="month">
        <button class="button" type="button" @click="monthClick.setNext">
          下月
        </button>
        <button class="button" type="button" @click="monthClick.setCurrent">
          当月
        </button>
        <button class="button" type="button" @click="monthClick.setPre">
          上月
        </button>
      </div>
      <div class="dateTitle">
        {{ custom.calendar.range.replace("-", "年") + "月" }}
      </div>
    </div>
    <div>
      <grace-custom
        :series="custom.series"
        :events="opts.eventsClick"
        :tooltip="custom.tooltip"
        :height="custom.height"
        :calendar="custom.calendar"
      ></grace-custom>
    </div>
  </div>
</template>

<script>
import { computed, toRefs, watch, ref } from "vue";
import * as echarts from "echarts";
import { GraceCustom } from "../../index";
export default {
  name: "GraceCalendar",
  components: { GraceCustom },
  props: {
    series: {
      type: Object,
    },
    events: {
      type: Object,
      default: () => {
        return {};
      },
    },
    title: {
      type: String,
      default: null,
    },
    rectHeight: {
      type: Number,
      default: 15,
    },
    color: {
      type: Array,
      default: () => {
        return [
          "#88CFDA",
          "#99CD98",
          "#99CD98",
          "#F6DC95",
          "#F2A9A9",
          "#EF87AE",
          "#B489BC",
          "#778FC6",
          "#87ADDE",
        ];
      },
    },
    tooltip: {
      type: Object,
      default: () => {
        return {
          formatter: function (params) {
            let allTitle = [];
            if (
              params.data[1].length > 0 &&
              params.data[1][params.seriesName] &&
              params.data[1][params.seriesName].title
            ) {
              allTitle = [params.data[0]];
              allTitle.push(
                "任务" + ": " + params.data[1][params.seriesName].title
              );
            }
            if (
              params.data[1].length > 0 &&
              !params.data[1][params.seriesName]
            ) {
              allTitle = [params.data[0]];
              params.data[1].forEach((item) => {
                if (item.title) {
                  allTitle.push("任务" + allTitle.length + ": " + item.title);
                }
              });
            }
            return allTitle === [] ? "" : allTitle.join("<br>");
          },
        };
      },
    },
  },
  emits: ["changeMonth"],
  setup(props, context) {
    const { series, events, title, rectHeight, color, tooltip } = toRefs(props);
    const opts = computed(() => {
      const optsTemp = {
        series: series.value,
        eventsClick: events.value,
        title: title.value,
        rectHeight: rectHeight.value,
        color: color.value,
        tooltip: tooltip.value,
      };
      return optsTemp;
    });
    const defaultCustom = () => {
      return {
        tooltip: opts.value.tooltip,
        series: getSeries(nowYear),
        calendar: {
          left: "center",
          top: "80",
          splitLine: {
            show: false,
          },
          cellSize: [
            "auto",
            cellNum[nowMonth - 1].num > 75 / (opts.value.rectHeight + 4)
              ? 100 +
                (opts.value.rectHeight + 4) *
                  (cellNum[nowMonth - 1].num - 75 / (opts.value.rectHeight + 4))
              : 100,
          ],
          yearLabel: { show: false },
          orient: "vertical",
          dayLabel: {
            margin: 20,
            firstDay: 1,
            nameMap: "cn",
          },
          monthLabel: {
            show: true,
            align: "center",
            position: "start",
          },
          silent: true,
          range: nowYear + "-" + nowMonth,
        },
        height:
          cellNum[nowMonth - 1].num > 75 / (opts.value.rectHeight + 4)
            ? (100 +
                (opts.value.rectHeight + 4) *
                  (cellNum[nowMonth - 1].num -
                    75 / (opts.value.rectHeight + 4))) *
                5 +
              160
            : 160 + 100 * calculateMonthRow(nowYear, nowMonth),
      };
    };
    let nowYear = new Date().getFullYear(); //当前年
    let nowMonth = new Date().getMonth() + 1; //当前月
    /**
     * 月份切换
     */
    const monthClick = {
      setPre: () => {
        if (nowMonth === 1) {
          nowYear = nowYear - 1;
          nowMonth = 12;
        } else {
          nowMonth = nowMonth - 1;
        }
        monthClick.refresh();
      },
      setNext: () => {
        if (nowMonth === 12) {
          nowYear = nowYear + 1;
          nowMonth = 1;
        } else {
          nowMonth = nowMonth + 1;
        }
        monthClick.refresh();
      },
      setCurrent: () => {
        nowYear = new Date().getFullYear();
        nowMonth = new Date().getMonth() + 1;
        monthClick.refresh();
      },
      refresh: () => {
        context.emit("changeMonth", nowYear + "-" + nowMonth);
      },
    };
    function calculateMonthRow(year, month) {
      const day = new Date(year, month < 10 ? "0" + month : month, 0).getDate();
      const week = [7, 1, 2, 3, 4, 5, 6];
      const begin = week[new Date(nowYear + "-" + month + "-01").getDay()];
      const end =
        week[
          new Date(
            nowYear +
              "-" +
              month +
              "-" +
              new Date(year, month < 10 ? "0" + month : month, 0).getDate()
          ).getDay()
        ];
      return (day + (begin < 7 ? begin - 1 : 6) + (end < 7 ? 7 - end : 0)) / 7;
    }
    //rect颜色
    let nameColor = [];
    //分配颜色
    function assignColor(calendarOptions) {
      const colorCount = opts.value.color.length;
      let name = calendarOptions.map((item) => {
        return {
          name: item.userName,
          color: null,
        };
      });
      const res = new Map();
      name.filter(
        (item, index) =>
          !res.has(item.name) &&
          res.set(item.name, opts.value.color[(index % colorCount) + 1])
      );
      return [...res];
    }
    //将传入数据比较后返回
    function compare(property) {
      return function (a, b) {
        var value1 = Date.parse(a[property]);
        var value2 = Date.parse(b[property]);
        if (value1 < value2) {
          return -1;
        } else if (value1 > value2) {
          return 1;
        } else {
          return 0;
        }
      };
    }
    let cellNum = []; //每个月份，每天最多的任务条数，用于适配动态高度
    let itemStart = null;
    let itemEnd = null;
    let num = null;
    let nowTime = null;
    let result_day = null;
    let monthDay = null;
    //数据处理
    function getVirtulData(year, calendarOptions) {
      //根据开始时间排序
      calendarOptions = calendarOptions.sort(compare("start"));
      //给人名分配颜色
      nameColor = assignColor(calendarOptions);
      year = year || nowYear;
      let date = +echarts.number.parseDate(year + "-01-01");
      let end = +echarts.number.parseDate(+year + 1 + "-01-01");
      let dayTime = 3600 * 24 * 1000;
      let data = [];
      for (let time = date; time < end; time += dayTime) {
        let items = [];
        let originItems = [];
        //整理用户数据与日期关联并计算天数
        if (calendarOptions.length > 0) {
          calendarOptions.forEach((item) => {
            itemEnd = Date.parse(item.end);
            itemStart = Date.parse(item.start);
            let enddate1 = Date.parse(item.end);
            nowTime = Date.parse(formatDayTime(time, "yyyy-MM-dd"));
            let nowMonthStart = Date.parse(nowYear + "-" + nowMonth + "-01");
            let nowMonthEnd = Date.parse(new Date(nowYear, nowMonth, 0));
            //给此区间日期均赋值
            if (
              nowTime >= itemStart &&
              nowTime <= enddate1 &&
              nowTime >= nowMonthStart &&
              nowTime <= nowMonthEnd
            ) {
              let day = Math.abs(Date.parse(item.end) - Date.parse(item.start));
              result_day = Math.floor(day / (24 * 3600 * 1000)) + 1;
              monthDay = new Date(year, formatDayTime(time, "MM"), 0).getDate();
              num =
                Math.floor(
                  Math.abs(nowTime - Date.parse(item.start)) /
                    (24 * 3600 * 1000)
                ) + 1;

              items = dealData(data, items, item, originItems);
            }
          });
        } else {
          data.push([formatDayTime(time, "yyyy-MM-dd"), [], []]);
          if (data.length > 0) {
            calculateCellNum(time, data, []);
          }
          continue;
        }

        if (data.length > 0) {
          calculateCellNum(time, data, items);
        }

        data.push([formatDayTime(time, "yyyy-MM-dd"), items, originItems]);
      }
      return data;
    }
    function dealData(data, items, item, originItems) {
      if (data.length > 0) {
        /**
         * 优先考虑上一个·日期·的情况-上一个日期存在数据
         */
        if (data[data.length - 1][1].length > 0) {
          /**
           * 判断当前在上一个日期是否存在,该item在上一个日期中存在，需要延续
           */
          if (
            data[data.length - 1][1].filter((item1) => {
              return item1.title === item.title;
            }).length > 0
          ) {
            items = dealExistInLast(data, items, item, originItems);
          }
          //该item在上一个日期中不存在，需要寻找位置插入
          else {
            items = dealNotExistInLast(items, item, originItems);
          }
        }
        //上一个日期是空白的
        else {
          items = itemsPush(items, item.title, result_day, item.userName, true);
          originItems.push(item);
        }
      } else {
        items = itemsPush(items, item.title, result_day, item.userName, true);
        originItems.push(item);
      }
      return items;
    }
    function calculateCellNum(time, data, items) {
      let monthTemp = formatDayTime(time, "MM");
      if (cellNum.length <= 0) {
        cellNum.push({
          month: monthTemp,
          num: data[data.length - 1][1].length,
        });
      } else {
        const result = cellNum.filter((item) => item.month === monthTemp);
        if (result && result.length > 0) {
          if (result[0].num < items.length) {
            cellNum.splice(monthTemp - 1, 1, {
              month: formatDayTime(time, "MM"),
              num: items.length,
            });
          }
        } else {
          cellNum.push({
            month: formatDayTime(time, "MM"),
            num: items.length,
          });
        }
      }
      if (!cellNum[formatDayTime(time, "MM") - 1]) {
        cellNum.push({
          month: formatDayTime(time, "MM"),
          num: data[data.length - 1][1].length,
        });
      } else {
        if (cellNum < items.length) {
          cellNum.splice(formatDayTime(time, "MM") - 1, 1, {
            month: formatDayTime(time, "MM"),
            num: items.length,
          });
        }
      }
    }
    function dealExistInLast(data, items, item, originItems) {
      /**
       * 若存在,查找下标
       */
      const position = data[data.length - 1][1].findIndex(
        (item2) => item2.title === item.title
      );
      //当前items无数据
      if (items.length === 0) {
        for (let t = 0; t <= position; t = t + 1) {
          if (t < position) {
            items = itemsPush(items, null, 0, item.userName, false);
            originItems.push(items[items.length - 1]);
          } else {
            items = itemsPush(
              items,
              item.title,
              result_day,
              item.userName,
              false
            );
            originItems.push(item);
            break;
          }
        }
      }
      //当前items有数据,寻找位置插入
      else {
        items = dealItemsExistData(items, item, originItems, position);
      }
      return items;
    }
    function dealItemsExistData(items, item, originItems, position) {
      if (items.length < position) {
        let i = items.length;
        for (i; i < position; i++) {
          items = itemsPush(items, null, 0, item.userName, false);
          originItems.push(items[items.length - 1]);
        }
        if (i === position) {
          items = itemsPush(
            items,
            item.title,
            result_day,
            item.userName,
            false
          );
          originItems.push(item);
        }
      } else {
        //若当前item均为有效数据，则在末尾添加
        items = itemsSplice(
          items,
          position,
          item.title,
          result_day,
          item.userName,
          false
        );
        originItems.splice(position, 1, item);
      }
      return items;
    }
    function dealNotExistInLast(items, item, originItems) {
      let j = 0;
      for (j; j < items.length; j = j + 1) {
        //若当前为空数据，则替换
        if (!items[j].title) {
          items = itemsSplice(
            items,
            j,
            item.title,
            result_day,
            item.userName,
            true
          );
          originItems.splice(j, 1, item);
          break;
        }
      }
      //若当前item均为有效数据，则在末尾添加
      if (j === items.length) {
        items = itemsPush(items, item.title, result_day, item.userName, true);
        originItems.push(item);
      }
      return items;
    }
    function itemsPush(items, titlePush, days, name, isShow) {
      const dayEnd = monthDay - formatDayTime(nowTime, "dd");
      items.push({
        title: titlePush,
        days: days,
        name: name,
        end: itemEnd,
        start: itemStart,
        isFirst: nowTime === itemStart,
        isShow: isShow,
        num: num,
        monthDay: monthDay,
        isJumpMonth:
          formatDayTime(nowTime, "MM") < formatDayTime(itemEnd, "MM") ||
          formatDayTime(nowTime, "yyyy") < formatDayTime(itemEnd, "yyyy"),
        tillEndDay: monthDay - formatDayTime(nowTime, "dd") + 1,
        rectSum: dayEnd >= 7 ? 7 : (dayEnd % 7) + 1,
      });
      return items;
    }
    function itemsSplice(items, i, titleSplice, days, name, isShow) {
      const dayEnd = monthDay - formatDayTime(nowTime, "dd");
      items.splice(i, 1, {
        title: titleSplice,
        days: days,
        name: name,
        end: itemEnd,
        start: itemStart,
        isFirst: nowTime === itemStart,
        isShow: isShow,
        num: num,
        monthDay: monthDay,
        isJumpMonth:
          formatDayTime(nowTime, "MM") < formatDayTime(itemEnd, "MM") ||
          formatDayTime(nowTime, "yyyy") < formatDayTime(itemEnd, "yyyy"),
        tillEndDay: monthDay - formatDayTime(nowTime, "dd") + 1,
        rectSum: dayEnd > 7 ? 7 : (dayEnd % 7) + 1,
      });
      return items;
    }
    function calculateRectWidth(item, cellWidth, i) {
      if (item[1][i].isShow) {
        if (item[1][i].tillEndDay < item[1][i].days) {
          return cellWidth * item[1][i].tillEndDay;
        } else {
          return cellWidth * item[1][i].days;
        }
      } else {
        if (item[1][i].isJumpMonth) {
          return cellWidth * item[1][i].rectSum;
        } else {
          return cellWidth * (item[1][i].days - item[1][i].num + 1);
        }
      }
    }
    //处理series数据
    function getSeries(value) {
      const resultData = getVirtulData(value, opts.value.series[0].data);
      let seriesTemp = [];
      //渲染rect与text数据
      resultData.forEach((item) => {
        if (item[1].length > 0) {
          for (let i = 0; i < item[1].length; i = i + 1) {
            seriesTemp.push({
              id: JSON.stringify(item[1][i]),
              name: i,
              type: "custom",
              coordinateSystem: "calendar",
              renderItem: function (params, api) {
                //api.coord(...)，意思是进行坐标转换计算
                const cellPoint = api.coord(api.value(0));
                const cellHeight = params.coordSys.cellHeight;
                const cellWidth = params.coordSys.cellWidth;
                const xTemp = params.coordSys.x;
                const yTemp = params.coordSys.y;
                const widthTemp = params.coordSys.width;
                const heightTemp = params.coordSys.height;
                const height = opts.value.rectHeight;
                // if (isNaN(cellPoint[0]) || isNaN(cellPoint[1])) {
                //   return;
                // }
                const group = {
                  type: "group",
                  diffChildrenByName: false,
                  children: [],
                };
                group.children.push(
                  {
                    type: "rect",
                    shape: echarts.graphic.clipRectByRect(
                      {
                        x: !item[1][i].isShow
                          ? cellPoint[0] - cellWidth / 2 - 1
                          : cellPoint[0] - cellWidth / 2,
                        y:
                          cellPoint[1] - cellHeight / 2 + 35 + (height + 2) * i,
                        width: calculateRectWidth(item, cellWidth, i),
                        height: height,
                      },
                      {
                        x: xTemp,
                        y: yTemp,
                        width: widthTemp,
                        height: heightTemp,
                      }
                    ),
                    style: {
                      x: cellPoint[0] - cellWidth / 2,
                      y: cellPoint[1] - cellHeight / 2 + 35 + (height + 2) * i,
                      truncate: {
                        width: cellWidth,
                      },
                      lineWidth: "1px",
                      fill:
                        item[1][i].isShow ||
                        (cellPoint[0] < 100 && item[1][i].title) ||
                        (formatDayTime(api.value(0), "dd") === "01" &&
                          item[1][i].title)
                          ? nameColor.filter(
                              (itemName) => item[1][i].name === itemName[0]
                            )[0][1]
                          : "transparent",
                    },
                  },
                  {
                    type: "text",
                    style: {
                      x: cellPoint[0] - cellWidth / 2,
                      y:
                        cellPoint[1] -
                        cellHeight / 2 +
                        35 +
                        (height + 2) * i +
                        2,
                      width: calculateRectWidth(item, cellWidth, i),
                      text:
                        item[1][i].isShow ||
                        cellPoint[0] < 100 ||
                        (formatDayTime(api.value(0), "dd") === "01" &&
                          item[1][i].title)
                          ? item[1][i].title
                          : "",
                      font: api.font({ fontSize: opts.value.rectHeight - 4 }),
                      overflow: "truncate",
                      stroke: "#87ADDE",
                    },
                  }
                );

                return group;
              },
              dimensions: [undefined, { type: "ordinal" }],
              data: [item],
            });
          }
        }
      });
      //渲染日期数据
      seriesTemp.push({
        type: "custom",
        coordinateSystem: "calendar",
        renderItem: function (params, api) {
          //api.coord(...)，意思是进行坐标转换计算
          const cellPoint = api.coord(api.value(0));
          let cellHeight = params.coordSys.cellHeight;
          if (isNaN(cellPoint[0]) || isNaN(cellPoint[1])) {
            return;
          }
          const group = {
            type: "group",
            children: [],
          };
          group.children.push({
            type: "text",
            style: {
              x: cellPoint[0],
              y: cellPoint[1] - cellHeight / 2 + 15,
              text: formatDayTime(api.value(0), "dd"),
              fill: "#777",
              height: opts.value.rectHeight,
              textFont: api.font({ fontSize: 14 }),
            },
          });
          return group;
        },
        dimensions: [undefined, { type: "ordinal" }],
        data: resultData,
      });
      return seriesTemp;
    }
    function formatDayTime(val, format) {
      if (val) {
        let date = new Date(val);
        let Y = date.getFullYear();
        let M = date.getMonth() + 1;
        let D = date.getDate();
        if (M < 10) {
          M = "0" + M;
        }
        if (D < 10) {
          D = "0" + D;
        }
        if (format === "yyyy-MM-dd") {
          return Y + "-" + M + "-" + D;
        } else if (format === "MM") {
          return M + "";
        } else if (format === "dd") {
          return D + "";
        } else if (format === "yyyy") {
          return Y + "";
        }
      }
      return "";
    }

    //日历图配置
    const custom = ref(defaultCustom());
    watch(
      [series],
      async () => {
        custom.value = defaultCustom();
      },
      { deep: true }
    );
    return {
      monthClick,
      opts,
      custom,
      nowMonth,
      nowYear,
    };
  },
};
</script>

<style scoped>
.chart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
.button {
  vertical-align: middle;
  background-color: #5e6d80;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  font-size: 16px;
  float: right;
}
.button:hover {
  background-color: #9d9fa1;
}
.dateTitle {
  font-size: 30px;
  text-align: center;
  margin-left: 20%;
}
.title {
  font-size: 20px;
  float: right;
  margin: auto;
  line-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.month {
  font-size: 10px;
  float: right;
  margin-top: 3.75px;
}
</style>
