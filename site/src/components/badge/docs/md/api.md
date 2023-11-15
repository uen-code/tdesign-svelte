[//]: # ':: BASE_DOC ::'
[//]: # '## API'

[[toc]]

### Badge Props

| 名称     | 类型            | 默认值 | 说明                                                                                                                                                                            | 必传 |
| -------- | --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| color    | String          | -      | 颜色                                                                                                                                                                            | N    |
| count    | String / Number | 0      | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。JS 类型：`string \| number `。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N    |
| dot      | Boolean         | false  | 是否为红点                                                                                                                                                                      | N    |
| maxCount | Number          | 99     | 封顶的数字值                                                                                                                                                                    | N    |
| offset   | Array           | -      | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。JS 类型：`Array<string \| number>`                                                                                   | N    |
| shape    | String          | circle | 形状。可选项：circle/round                                                                                                                                                      | N    |
| showZero | Boolean         | false  | 当数值为 0 时，是否展示徽标                                                                                                                                                     | N    |
| size     | String          | medium | 尺寸。可选项：small/medium                                                                                                                                                      | N    |
