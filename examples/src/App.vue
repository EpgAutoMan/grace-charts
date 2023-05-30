<template>
  <div style="padding: 0 20px">
    <h2>Grace Chart Examples</h2>
    <hr />
    <div style="margin: 10px"></div>
    <!-- <div class="chart-item">
      <grace-gantt
        :dataset="gantt.dataset"
        :startDateIndex="gantt.startDateIndex"
        :endDateIndex="gantt.endDateIndex"
        :finishRateIndex="gantt.finishRateIndex"
        :events="events"
        ganttHeight="550px"
        :layoutWidth="['40%', '60%']"
      ></grace-gantt>
    </div> -->
    <!-- <div>
      <grace-custom
        :series="custom.series"
        :calendar="custom.calendar"
        :visualMap="custom.visualMap"
        :title="custom.title"
        :height="300"
      ></grace-custom>
    </div> -->
    <div>
      <grace-calendar
        :series="calendar_custom.series"
        :events="events"
        :title="calendar_custom.title"
        :rectHeight="calendar_custom.height"
        :color="calendar_custom.color"
        @changeMonth="calendar_custom.changeMonth"
        :log="true"
      ></grace-calendar>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 33%">
        <grace-pie
          :title="{
            text: '饼图-纯净模式',
            subtext: '一年级二班',
          }"
          :dataset="{ dimensions: ['value1', 'value2'], source: [] }"
          :series="pie.series"
          theme="light"
        ></grace-pie>
      </div>
      <div style="flex: 1; min-width: 33%">
        <grace-pie
          :title="{
            text: '饼图-简约模式',
            subtext: '一年级二班',
          }"
          :tooltip="pie.tooltip"
          :dataset="pie.dataset"
          theme="neutral"
        ></grace-pie>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-pie
          :title="{
            text: '饼图-暗黑模式',
            subtext: '一年级二班',
          }"
          :dataset="pie.dataset"
          :series="pie.series"
          theme="dark"
        ></grace-pie>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-line
          :title="{
            text: '折线图',
          }"
          :loading="loading"
          :dataset="dataset"
          theme="light"
        ></grace-line>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-line
          :loading="loading"
          :dataset="dataset"
          theme="dark"
        ></grace-line>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-bar
          :title="{
            text: '柱状图',
          }"
          :events="events"
          :loading="loading"
          :dataset="dataset"
          theme="light"
        ></grace-bar>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-bar
          :loading="loading"
          :dataset="dataset"
          theme="dark"
        ></grace-bar>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-candlestick
          :loading="loading"
          :title="cs.title"
          :series="cs.series"
          theme="light"
        ></grace-candlestick>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-candlestick
          :loading="loading"
          :title="cs.titile"
          :series="cs.series"
          theme="dark"
        ></grace-candlestick>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-radar
          :loading="loading"
          :radar="radar"
          :title="{
            text: '雷达图',
          }"
          :dataset="radar.dataset"
          theme="light"
        ></grace-radar>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-radar
          :loading="loading"
          :radar="radar"
          :dataset="radar.dataset"
          theme="dark"
        ></grace-radar>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-gauge
          :loading="loading"
          :title="{
            text: '仪表盘',
          }"
          :series="[
            {
              type: 'gauge',
              data: [
                {
                  value: 80,
                  name: 'SCORE',
                },
              ],
            },
          ]"
          theme="light"
        ></grace-gauge>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-gauge
          :loading="loading"
          :series="[
            {
              type: 'gauge',
              data: [
                {
                  value: 80,
                  name: 'SCORE',
                },
              ],
            },
          ]"
          theme="dark"
        ></grace-gauge>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-scatter
          :loading="loading"
          :title="{
            text: '散点图',
          }"
          :xAxis="{
            name: '日期',
            type: 'category',
          }"
          :series="[
            {
              type: 'scatter',
              symbolSize: 20,
            },
            {
              type: 'scatter',
              symbolSize: 10,
            },
            {
              type: 'scatter',
              symbolSize: 20,
            },
          ]"
          :dataset="scatter.dataset"
          theme="light"
        ></grace-scatter>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-scatter
          :loading="loading"
          :dataset="scatter.dataset"
        ></grace-scatter>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-funnel
          :loading="loading"
          :title="{
            text: '漏斗图',
          }"
          :series="funnel.series"
          :tooltip="funnel.tooltip"
          :events="events"
          :dataset="funnel.dataset"
          theme="light"
        ></grace-funnel>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-funnel
          :loading="loading"
          :dataset="funnel.dataset"
        ></grace-funnel>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 50%">
        <grace-san-key
          :series="sunKeyOption.series"
          theme="light"
          :tooltip="sunKeyOption.tooltip"
          :title="{
            text: '桑基图1',
            subtext: '123',
          }"
        ></grace-san-key>
      </div>
      <div style="flex: 1; max-width: 50%">
        <grace-san-key
          :series="sunKeyOption.series"
          theme="dark"
          :title="{
            text: '桑基图1',
            subtext: '123',
          }"
        ></grace-san-key>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 33%">
        <grace-sunburst
          :series="sunBurstOption.series"
          theme="light"
          :title="{
            text: '旭日图1',
            subtext: '123',
          }"
        ></grace-sunburst>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-sunburst
          :series="sunBurstOption.series"
          theme="neutral"
          :title="{
            text: '旭日图2',
            subtext: '123',
          }"
        ></grace-sunburst>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-sunburst
          :series="sunBurstOption.series"
          theme="dark"
          :title="{
            text: '旭日图3',
            subtext: '123',
          }"
        ></grace-sunburst>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 50%">
        <grace-heatmap
          :title="{
            text: '热力图',
          }"
          :loading="loading"
          :dataset="heatmap.dataset"
          theme="light"
        ></grace-heatmap>
      </div>
      <div style="flex: 1; min-width: 50%">
        <grace-heatmap
          :loading="loading"
          :dataset="heatmap.dataset"
          theme="dark"
        ></grace-heatmap>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; min-width: 33%">
        <grace-graph
          :title="{
            text: '关系图',
          }"
          :loading="loading"
          :series="[
            {
              type: 'graph',
              data: graph.graphData1,
              links: graph.graphLinks1,
            },
          ]"
          :xAxis="graph.xAxis"
          :yAxis="graph.yAxis"
          theme="light"
        ></grace-graph>
      </div>
      <div style="flex: 1; min-width: 33%">
        <grace-graph
          :loading="loading"
          :series="[
            {
              type: 'graph',
              data: graph.graphData2,
              links: graph.graphLinks2,
              coordinateSystem: null,
            },
          ]"
          :xAxis="{
            show: false,
          }"
          :yAxis="{
            show: false,
          }"
          theme="dark"
        ></grace-graph>
      </div>
      <div style="flex: 1; min-width: 33%">
        <grace-graph
          :loading="loading"
          :series="[
            {
              type: 'graph',
              data: graph.graphData3,
              links: graph.graphLinks3,
              categories: [
                { name: 'A' },
                { name: 'B' },
                { name: 'C' },
                { name: 'D' },
              ],
              coordinateSystem: null,
              label: {
                show: true,
                position: 'right',
                formatter: '{b}',
              },
              labelLayout: {
                hideOverlap: true,
              },
              scaleLimit: {
                min: 0.4,
                max: 2,
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3,
              },
            },
          ]"
          :xAxis="{
            show: false,
          }"
          :yAxis="{
            show: false,
          }"
          theme="neutral"
        ></grace-graph>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 33%">
        <grace-wordcloud
          :title="{
            text: '词云图1',
          }"
          :series="wordcloud.series"
          theme="light"
        ></grace-wordcloud>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-wordcloud
          :title="{
            text: '词云图2',
            subtext: '不错呀',
          }"
          :series="wordcloud.series"
          theme="neutral"
        ></grace-wordcloud>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-wordcloud
          :title="{
            text: '词云图3',
            subtext: '不错呀',
          }"
          :series="wordcloud.series"
          theme="dark"
        ></grace-wordcloud>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 33%">
        <grace-liquidfill
          :title="{
            text: '水球图1',
          }"
          :series="liquidfill1.series"
          theme="light"
        ></grace-liquidfill>
      </div>
      <div style="flex: 1; min-width: 33%">
        <grace-liquidfill
          :title="{
            text: '水球图2',
          }"
          :series="liquidfill2.series"
          theme="neutral"
        ></grace-liquidfill>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-liquidfill
          :title="{
            text: '水球图3',
          }"
          :series="liquidfill2.series"
          theme="dark"
        ></grace-liquidfill>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 33%">
        <grace-tree
          :title="{
            text: '树形图1',
          }"
          :series="treeData.series"
          theme="light"
        ></grace-tree>
      </div>
      <div style="flex: 1; min-width: 33%">
        <grace-tree
          :title="{
            text: '树形图2',
          }"
          :series="treeData.series"
          theme="neutral"
        ></grace-tree>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-tree
          :title="{
            text: '树形图3',
          }"
          :series="treeData.series"
          theme="dark"
        ></grace-tree>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 33%">
        <grace-treemap
          :title="{
            text: '矩形树形图1',
          }"
          :series="treemapData.series"
          theme="light"
        ></grace-treemap>
      </div>
      <div style="flex: 1; min-width: 33%">
        <grace-treemap
          :title="{
            text: '矩形树形图2',
          }"
          :series="treemapData.series"
          theme="neutral"
        ></grace-treemap>
      </div>
      <div style="flex: 1; max-width: 33%">
        <grace-treemap
          :title="{
            text: '矩形树形图3',
          }"
          :series="treemapData.series"
          theme="dark"
        ></grace-treemap>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 50%">
        <grace-boxplot
          :title="{
            text: '盒须图1',
          }"
          :dataset="boxplotDataset"
          :series="boxplotSeries"
          theme="light"
        ></grace-boxplot>
      </div>
      <div style="flex: 1; max-width: 50%">
        <grace-boxplot
          :title="{
            text: '盒须图2',
          }"
          :dataset="boxplotDataset"
          :series="boxplotSeries"
          theme="dark"
        ></grace-boxplot>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 50%">
        <grace-parallel
          :title="{
            text: '平行坐标系1',
          }"
          :parallelAxis="parallelData.parallelAxis"
          :series="parallelData.series"
          theme="light"
        ></grace-parallel>
      </div>
      <div style="flex: 1; max-width: 50%">
        <grace-parallel
          :title="{
            text: '平行坐标系2',
          }"
          :parallelAxis="parallelData.parallelAxis"
          :series="parallelData.series"
          theme="dark"
        ></grace-parallel>
      </div>
    </div>
    <div class="chart-item">
      <div style="flex: 1; max-width: 50%">
        <grace-map
          :title="{
            text: '地图1',
          }"
          :series="mapData.series"
          theme="light"
        ></grace-map>
      </div>
      <div style="flex: 1; max-width: 50%">
        <grace-map
          :title="{
            text: '地图2',
          }"
          :series="mapData.series"
          theme="dark"
        ></grace-map>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onBeforeMount } from "vue";
import * as echarts from "echarts";
export default {
  name: "App",
  setup() {
    const dataset = ref({
      dimensions: [],
      source: [],
    });
    const loading = ref(true);
    const showing = ref(false);
    setTimeout(() => {
      dataset.value = {
        dimensions: ["时间", "数量"],
        source: [
          { 时间: "2020-01", 数量: 100 },
          { 时间: "2020-02", 数量: 110 },
          { 时间: "2020-03", 数量: 120 },
          { 时间: "2020-04", 数量: 130 },
          { 时间: "2020-05", 数量: 140 },
        ],
      };
      loading.value = false;
      showing.value = true;
    }, 2000);
    const events = {
      click: (v) => {
        console.log(v);
      },
    };
    const cs = ref({
      title: {
        text: "k线图",
      },
      series: [
        {
          type: "candlestick",
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42],
          ],
        },
      ],
    });
    const radar = {
      indicator: [
        { name: "DS A", max: 200 },
        { name: "DS B", max: 200 },
        { name: "DS C", max: 200 },
        { name: "DS D", max: 200 },
        { name: "DS E", max: 200 },
      ],
      dataset: {
        dimensions: ["A", "B", "C", "D", "E"],
        source: [
          { A: 100, B: 90, C: 50, D: 80, E: 150 },
          { A: 80, B: 10, C: 150, D: 60, E: 60 },
          { A: 70, B: 30, C: 50, D: 40, E: 70 },
          { A: 90, B: 20, C: 70, D: 30, E: 180 },
          { A: 170, B: 91, C: 80, D: 20, E: 50 },
        ],
      },
    };
    const pie = ref({
      dataset: {
        dimensions: ["name", "value"],
        source: [
          { value: 1048, name: "中文" },
          { value: 735, name: "英语" },
          { value: 580, name: "法语法语法语" },
          { value: 484, name: "俄语" },
          { value: 1333, name: "阿姆哈拉语" },
          { value: 484, name: "泰语" },
          { value: 600, name: "拉丁语" },
        ],
      },
      series: [
        {
          name: "语言统计表",
          type: "pie",
          radius: "40%",
        },
      ],
    });
    const scatter = ref({
      dataset: {
        dimensions: ["日期", "余额", "消费", "盈利"],
        source: [
          { 日期: "1-1", 余额: 1000, 消费: 2222, 盈利: 555 },
          { 日期: "1-2", 余额: 1000, 消费: 2222, 盈利: 555 },
          { 日期: "1-3", 余额: 1000, 消费: 2222, 盈利: 555 },
          { 日期: "1-4", 余额: 1000, 消费: 2222, 盈利: 555 },
        ],
      },
    });
    const funnel = ref({
      dataset: {
        dimensions: ["name", "value"],
        source: [
          { value: 60, name: "Visit" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
          { value: 100, name: "Show" },
        ],
      },
      series: [
        {
          type: "funnel",
          label: {
            show: true,
            position: "right",
          },
        },
      ],
      tooltip: {
        formatter: (v) => {
          return `${v.marker}${v.seriesName}: ${v.value.name}<br/>value: ${v.value.value}<br/>percent: ${v.percent}%`;
        },
      },
    });
    var data = [
      {
        name: "Grandpa",
        children: [
          {
            name: "Uncle Leo",
            value: 15,
            children: [
              {
                name: "Cousin Jack",
                value: 2,
              },
              {
                name: "Cousin Mary",
                value: 5,
                children: [
                  {
                    name: "Jackson",
                    value: 2,
                  },
                ],
              },
              {
                name: "Cousin Ben",
                value: 4,
              },
            ],
          },
          {
            name: "Aunt Jane",
            children: [
              {
                name: "Cousin Kate",
                value: 4,
              },
            ],
          },
          {
            name: "Father",
            value: 10,
            children: [
              {
                name: "Me",
                value: 5,
                itemStyle: {
                  color: "red",
                },
              },
              {
                name: "Brother Peter",
                value: 1,
              },
            ],
          },
        ],
      },
      {
        name: "Mike",
        children: [
          {
            name: "Uncle Dan",
            children: [
              {
                name: "Cousin Lucy",
                value: 3,
              },
              {
                name: "Cousin Luck",
                value: 4,
                children: [
                  {
                    name: "Nephew",
                    value: 2,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Nancy",
        children: [
          {
            name: "Uncle Nike",
            children: [
              {
                name: "Cousin Betty",
                value: 1,
              },
              {
                name: "Cousin Jenny",
                value: 2,
              },
            ],
          },
        ],
      },
    ];
    const sunBurstOption = ref({
      series: [
        {
          type: "sunburst",
          data: data,
        },
      ],
    });
    const data1 = {
      nodes: [
        { name: "Total" },
        { name: "Environment" },
        { name: "Land use" },
        { name: "Cocoa butter (Organic)" },
        { name: "Cocoa mass (Organic)" },
        { name: "Hazelnuts (Organic)" },
        { name: "Cane sugar (Organic)" },
        { name: "Vegetables (Organic)" },
        { name: "Climate change" },
        { name: "Harmful substances" },
        { name: "Water use" },
        { name: "Resource depletion" },
      ],
      links: [
        { source: "Total", target: "Environment", value: 0.342284047256003 },
        { source: "Environment", target: "Land use", value: 0.32322870366987 },
        {
          source: "Land use",
          target: "Cocoa butter (Organic)",
          value: 0.177682517071359,
        },
        {
          source: "Land use",
          target: "Cocoa mass (Organic)",
          value: 0.137241325342711,
        },
        {
          source: "Land use",
          target: "Hazelnuts (Organic)",
          value: 0.00433076373512774,
        },
        {
          source: "Land use",
          target: "Cane sugar (Organic)",
          value: 0.00296956039863467,
        },
        {
          source: "Land use",
          target: "Vegetables (Organic)",
          value: 0.00100453712203756,
        },
        {
          source: "Environment",
          target: "Climate change",
          value: 0.0112886157414413,
        },
        {
          source: "Climate change",
          target: "Cocoa butter (Organic)",
          value: 0.00676852971933996,
        },
        {
          source: "Climate change",
          target: "Cocoa mass (Organic)",
          value: 0.00394686874786743,
        },
        {
          source: "Climate change",
          target: "Cane sugar (Organic)",
          value: 0.000315972058711838,
        },
        {
          source: "Climate change",
          target: "Hazelnuts (Organic)",
          value: 0.000218969462265292,
        },
        {
          source: "Climate change",
          target: "Vegetables (Organic)",
          value: 3.82757532567656e-5,
        },
        {
          source: "Environment",
          target: "Harmful substances",
          value: 0.00604275542495656,
        },
        {
          source: "Harmful substances",
          target: "Cocoa mass (Organic)",
          value: 0.0055125989240741,
        },
        {
          source: "Harmful substances",
          target: "Cocoa butter (Organic)",
          value: 0.000330017607892127,
        },
        {
          source: "Harmful substances",
          target: "Cane sugar (Organic)",
          value: 0.000200138892990337,
        },
        {
          source: "Harmful substances",
          target: "Hazelnuts (Organic)",
          value: 0,
        },
        {
          source: "Harmful substances",
          target: "Vegetables (Organic)",
          value: 0,
        },
        {
          source: "Environment",
          target: "Water use",
          value: 0.00148345269044703,
        },
        {
          source: "Water use",
          target: "Cocoa butter (Organic)",
          value: 0.00135309891304186,
        },
        {
          source: "Water use",
          target: "Cocoa mass (Organic)",
          value: 0.000105714137908639,
        },
        {
          source: "Water use",
          target: "Hazelnuts (Organic)",
          value: 1.33452642581887e-5,
        },
        {
          source: "Water use",
          target: "Cane sugar (Organic)",
          value: 8.78074837009238e-6,
        },
        {
          source: "Water use",
          target: "Vegetables (Organic)",
          value: 2.5136268682477e-6,
        },
        {
          source: "Environment",
          target: "Resource depletion",
          value: 0.000240519729288764,
        },
        {
          source: "Resource depletion",
          target: "Cane sugar (Organic)",
          value: 0.000226237279345084,
        },
        {
          source: "Resource depletion",
          target: "Vegetables (Organic)",
          value: 1.42824499436793e-5,
        },
        {
          source: "Resource depletion",
          target: "Hazelnuts (Organic)",
          value: 0,
        },
        {
          source: "Resource depletion",
          target: "Cocoa mass (Organic)",
          value: 0,
        },
        {
          source: "Resource depletion",
          target: "Cocoa butter (Organic)",
          value: 0,
        },
      ],
    };
    const sunKeyOption = ref({
      series: [
        {
          type: "sankey",
          data: data1.nodes,
          links: data1.links,
        },
      ],
    });
    const heatmap = ref({
      dataset: {
        dimensions: ["hours", "days", "height"],
        source: [
          { hours: "12a", days: "Saturday", height: 1 },
          { hours: "1a", days: "Friday", height: 4 },
          { hours: "2a", days: "Thursday", height: 5 },
          { hours: "3a", days: "Wednesday", height: 1 },
          { hours: "4a", days: "Tuesday", height: 1 },
          { hours: "5a", days: "Monday", height: 2 },
          { hours: "6a", days: "Sunday", height: 5 },
          { hours: "7a", days: "Monday", height: 4 },
          { hours: "8a", days: "Wednesday", height: 1 },
          { hours: "9a", days: "Friday", height: 3 },
          { hours: "10a", days: "Saturday", height: 3 },
          { hours: "11a", days: "Friday", height: 7 },
        ],
      },
    });
    const graphX = [
      "Mon",
      "Tue",
      "Wed",
      "Very Loooong Thu",
      "Fri",
      "Sat",
      "Sun",
    ];
    const graphData = graphX.map(function (item, i) {
      const timeTemp = Math.random();
      return Math.round(timeTemp * 1000 * (i + 1));
    });
    const graphLinks = graphData.map(function (item, i) {
      return {
        source: i,
        target: i + 1,
      };
    });
    graphLinks.pop();
    const graph = ref({
      graphData1: graphData,
      graphLinks1: graphLinks,
      series: [
        {
          type: "graph",
          data: graphData,
          links: graphLinks,
        },
      ],
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: graphX,
      },
      yAxis: {
        type: "value",
      },
      graphData2: [
        {
          name: "Node 1",
          x: 300,
          y: 300,
        },
        {
          name: "Node 2",
          x: 800,
          y: 300,
        },
        {
          name: "Node 3",
          x: 550,
          y: 100,
        },
        {
          name: "Node 4",
          x: 550,
          y: 500,
        },
      ],
      graphLinks2: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true,
          },
          lineStyle: {
            width: 5,
            curveness: 0.2,
          },
        },
        {
          source: "Node 2",
          target: "Node 1",
          label: {
            show: true,
          },
          lineStyle: {
            curveness: 0.2,
          },
        },
        {
          source: "Node 1",
          target: "Node 3",
        },
        {
          source: "Node 2",
          target: "Node 3",
        },
        {
          source: "Node 2",
          target: "Node 4",
        },
        {
          source: "Node 1",
          target: "Node 4",
        },
      ],
      graphData3: [
        {
          category: 0,
          id: "0",
          name: "Myriel",
          symbolSize: 19.12381,
          value: 28.685715,
          x: -266.82776,
          y: 299.6904,
        },
        {
          category: 0,
          id: "1",
          name: "Napoleon",
          symbolSize: 2.6666666666666665,
          value: 4,
          x: -418.08344,
          y: 446.8853,
        },
        {
          category: 1,
          id: "2",
          name: "Mlle",
          symbolSize: 6.323809333333333,
          value: 9.485714,
          x: -212.76357,
          y: 245.29176,
        },
        {
          category: 1,
          id: "3",
          name: "MmeMagloire",
          symbolSize: 6.323809333333333,
          value: 9.485714,
          x: -242.82404,
          y: 235.26283,
        },
        {
          category: 3,
          id: "4",
          name: "CountessDeLo",
          symbolSize: 2.6666666666666665,
          value: 4,
          x: -379.30386,
          y: 429.06424,
        },
        {
          category: 2,
          id: "5",
          name: "Geborand",
          symbolSize: 2.6666666666666665,
          value: 4,
          x: -417.26337,
          y: 406.03506,
        },
        {
          category: 2,
          id: "6",
          name: "Champtercier",
          symbolSize: 2.6666666666666665,
          value: 4,
          x: -332.6012,
          y: 485.16974,
        },
      ],
      graphLinks3: [
        {
          source: "1",
          target: "0",
        },
        { source: "2", target: "0" },
        { source: "3", target: "2" },
        { source: "3", target: "2" },
        { source: "4", target: "3" },
        { source: "5", target: "3" },
        { source: "6", target: "5" },
      ],
    });
    const wordcloud = ref({
      series: [
        {
          type: "wordCloud",
          shape: "circle",
          // Data is an array. Each array item must have name and value property.
          data: [
            {
              name: "Streaming of segmented content",
              value: 6181,
            },
            {
              name: "Amy Schumer",
              value: 4386,
            },
            {
              name: "Jurassic World",
              value: 4055,
            },
            {
              name: "Charter Communications",
              value: 2467,
            },
            {
              name: "Chick Fil A",
              value: 2244,
            },
            {
              name: "Planet Fitness",
              value: 1898,
            },
            {
              name: "Pitch Perfect",
              value: 1484,
            },
            {
              name: "Express",
              value: 1112,
            },
            {
              name: "Home",
              value: 965,
            },
            {
              name: "Johnny Depp",
              value: 847,
            },
            {
              name: "Lena Dunham",
              value: 582,
            },
            {
              name: "Lewis Hamilton",
              value: 555,
            },
            {
              name: "KXAN",
              value: 550,
            },
            {
              name: "Mary Ellen Mark",
              value: 462,
            },
            {
              name: "Farrah Abraham",
              value: 366,
            },
            {
              name: "Rita Ora",
              value: 360,
            },
            {
              name: "Serena Williams",
              value: 282,
            },
            {
              name: "NCAA baseball tournament",
              value: 273,
            },
            {
              name: "Point Break",
              value: 265,
            },
          ],
        },
      ],
    });
    const liquidfill1 = ref({
      series: [
        {
          type: "liquidFill",
          data: [0.6, 0.5, 0.4, 0.3],
        },
      ],
    });
    const liquidfill2 = ref({
      series: [
        {
          type: "liquidFill",
          radius: "60%",
          data: [0.6, 0.5, 0.4, 0.3],
          shape:
            "path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z",
          label: {
            position: ["38%", "40%"],
            formatter: function () {
              return "ECharts\nLiquid Fill";
            },
            fontSize: 20,
          },
        },
      ],
    });
    const treeData = ref({
      series: [
        {
          type: "tree",
          data: [
            {
              name: "A",
              children: [
                { name: "B" },
                { name: "C" },
                { name: "D" },
                { name: "R" },
                { name: "F" },
              ],
            },
          ],
        },
      ],
    });
    const treemapData = ref({
      series: [
        {
          type: "treemap",
          data: [
            {
              name: "A",
              value: 60,
              children: [
                { name: "B", value: 20 },
                { name: "R", value: 20 },
                { name: "F", value: 30 },
              ],
            },
            {
              name: "B",
              value: 30,
              children: [
                { name: "B", value: 10 },
                { name: "R", value: 10 },
                { name: "F", value: 10 },
              ],
            },
          ],
        },
      ],
    });
    const boxplotDataset = ref([
      {
        source: [
          [960, 800, 400],
          [960, 940, 860],
          [580, 880, 780],
          [890, 810, 700],
          [890, 840, 780],
        ],
      },
      {
        transform: {
          type: "boxplot",
        },
      },
    ]);
    const boxplotSeries = ref([
      {
        type: "boxplot",
        datasetIndex: 1,
      },
    ]);
    const parallelData = ref({
      parallelAxis: [
        { dim: 0, name: "Price" },
        { dim: 1, name: "Net Weight" },
        { dim: 2, name: "Amount" },
        {
          dim: 3,
          name: "Score",
          type: "category",
          data: ["Excellent", "Good", "OK", "Bad"],
        },
      ],
      series: {
        type: "parallel",
        lineStyle: {
          width: 2,
        },
        data: [
          [12.99, 100, 82, "Good"],
          [9.99, 80, 77, "OK"],
          [20, 120, 60, "Excellent"],
        ],
      },
    });
    const mapData = ref({
      series: {
        name: "中国",
        map: "china",
        data: [
          { name: "黑龙江省", value: 20057.34 },
          { name: "四川省", value: 15477.48 },
          { name: "广东省", value: 31686.1 },
        ],
      },
    });
    function getVirtulData(year) {
      year = year || "2017";
      var date = +echarts.number.parseDate(year + "-01-01");
      var end = +echarts.number.parseDate(year + "-12-31");
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time <= end; time += dayTime) {
        const timeTemp = Math.random();
        data.push([formatDayTime(time), Math.floor(timeTemp * 10000)]);
      }
      return data;
    }
    function formatDayTime(val) {
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

        return Y + "-" + M + "-" + D;
      } else {
        return "";
      }
    }
    const gantt = ref({
      dataset: {
        dimensions: ["id", "项目名称", "开始时间", "结束时间", "进度"],
        source: [
          {
            id: 0,
            开始时间: "2022-01-12",
            项目名称: "项目1",
            结束时间: "2022-01-28",
            进度: 0.1,
          },
          {
            id: 1,
            项目名称: "项目2",
            开始时间: "2022-01-12",
            结束时间: "2022-01-28",
            进度: 0.2,
          },
          {
            id: 2,
            项目名称: "项目3",
            开始时间: "2022-01-12",
            结束时间: "2022-01-28",
            进度: 0.5,
          },
          {
            id: 3,
            项目名称: "项目4",
            开始时间: "2022-03-01",
            结束时间: "2022-04-01",
            进度: 0.5,
          },
          {
            id: 4,
            项目名称: "项目5",
            开始时间: "2022-05-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 5,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 6,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 7,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 8,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 9,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 10,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 11,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 12,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 13,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 14,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 15,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 16,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 17,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
          {
            id: 18,
            项目名称: "项目6",
            开始时间: "2022-02-12",
            结束时间: "2022-06-28",
            进度: 0.1,
          },
        ],
      },
      startDateIndex: 2,
      endDateIndex: 3,
      finishRateIndex: 4,
      ganttHeight: 500,
    });
    const custom = ref({
      title: {
        top: 30,
        left: "center",
        text: "原始日历图",
      },
      visualMap: {
        min: 0,
        max: 10000,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ["auto", 13],
        range: "2017",
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: getVirtulData("2017"),
      },
    });
    const calendar_custom = reactive({
      title: "",
      height: 15,
      color: [
        "#88CFDA",
        "#99CD98",
        "#99CD98",
        "#F6DC95",
        "#F2A9A9",
        "#EF87AE",
        "#B489BC",
        "#778FC6",
        "#87ADDE",
      ],
      series: [
        {
          data: [],
        },
      ],
      getData() {
        calendar_custom.title = "工程效能部";
        calendar_custom.series[0].data = [
          {
            end: "2022-12-21",
            start: "2022-12-20",
            status: "待测试",
            testplanId: 775,
            testplanName: "spider-Android客户端自动化用例",
            title: "李增超20，21werewrw",
            userId: 62,
            userName: "李增超",
          },
          {
            end: "2022-12-01",
            start: "2022-11-21",
            status: "待测试",
            testplanId: 775,
            testplanName: "spider-A请问ndroid客户端自动化用例",
            title: "李增超1123123",
            userId: 62,
            userName: "李增超2",
          },
        ];
      },
      changeMonth(value) {
        console.log("changeMonth", value);
        if (value === "2022-12") {
          calendar_custom.series[0].data = [
            {
              end: "2022-12-21",
              start: "2022-12-20",
              status: "待测试",
              testplanId: 775,
              testplanName: "spider-Android客户端自动化用例",
              title: "李增超20，21werewrw",
              userId: 62,
              userName: "李增超",
            },
            {
              end: "2022-12-01",
              start: "2022-11-21",
              status: "待测试",
              testplanId: 775,
              testplanName: "spider-A请问ndroid客户端自动化用例",
              title: "李增超1123123",
              userId: 62,
              userName: "李增超2",
            },
          ];
        } else if (value === "2022-11") {
          calendar_custom.series[0].data = [
            {
              end: "2022-11-14",
              start: "2022-11-13",
              status: "已完成",
              testplanId: 773,
              testplanName: "【MAXHUB V_MHOS5.13.3】集成测试-A1",
              title: "李卓耘13,171",
              userId: 73,
              userName: "李卓耘",
            },
            {
              end: "2022-11-20",
              start: "2022-11-18",
              status: "已完成",
              testplanId: 773,
              testplanName: "【MAXHUB V_MHOS5.13.3】集成测试-A1",
              title: "李卓耘13,172",
              userId: 73,
              userName: "李卓耘1",
            },
          ];
        } else {
          calendar_custom.series[0].data = [];
        }
      },
    });
    onBeforeMount(() => {
      calendar_custom.getData();
    });
    return {
      dataset,
      loading,
      events,
      cs,
      radar,
      showing,
      pie,
      scatter,
      funnel,
      sunKeyOption,
      sunBurstOption,
      heatmap,
      graph,
      wordcloud,
      liquidfill1,
      liquidfill2,
      treeData,
      treemapData,
      boxplotDataset,
      boxplotSeries,
      parallelData,
      mapData,
      gantt,
      calendar_custom,
      custom,
    };
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

#app {
  font-family: "Inter", apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-weight: 400;
  font-style: normal;
  color: #2c3e50;
  background-color: #fafafa;
}

.chart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}
.button {
  background-color: #5e6d80; /* Green */
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.button:hover {
  background-color: #9d9fa1; /* Green */
}
</style>
