# 属性列表

#### 基本属性

| 配置项       | 简介                                                                                                                        |     类型      | 默认值                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | :-----------: | ---------------------------- |
| width        | 宽度                                                                                                                        | String/Number | auto                         |
| height       | 高度                                                                                                                        | String/Number | 450                          |
| renderer     | 渲染模式，支持`'canvas'`或者`'svg'`，[参见](https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg/)           |    String     | canvas                       |
| locale       | 多语言                                                                                                                      |    String     | ZH                           |
| useDirtyRect | 否开启脏矩形渲染，只有在 Canvas 渲染模式有效，[参见](https://echarts.apache.org/handbook/zh/basics/release-note/v5-feature) |    Boolean    | true                         |
| title        | 图表标题                                                                                                                    |    Object     | {}                           |
| grid         | 直角坐标系内绘图网格                                                                                                        |    Object     | {}                           |
| radar        | 雷达图坐标系组件，只适用于雷达图                                                                                            |    Object     | {}                           |
| legend       | 图例组件                                                                                                                    |    Object     | {}                           |
| tooltip      | 提示框组件                                                                                                                  |    Object     | {}                           |
| xAxis        | 直角坐标系 grid 中的 x 轴                                                                                                   |    Object     | {type: "category"}           |
| yAxis        | 直角坐标系 grid 中的 y 轴                                                                                                   |    Object     | {type: "value"}              |
| dataset      | 数据集                                                                                                                      |    Object     | {dimensions: [],source: [],} |
| series       | 图表序列                                                                                                                    |     Array     | null                         |
| events       | 事件                                                                                                                        |    Object     | null                         |
| theme        | 主题                                                                                                                        |    String     | dark                         |
| loading      | 加载状态                                                                                                                    |    Boolean    | false                        |

属性的格式与 Echarts 配置和意义基本一致，此处只是将这些配置变成了可响应式变化，详情可参见[Echarts 配置项](https://echarts.apache.org/zh/option.html#title)
