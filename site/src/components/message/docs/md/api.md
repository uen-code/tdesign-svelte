[//]: # ':: BASE_DOC ::'
[//]: # '## API'

[[toc]]

### Message Props

| 名称            | 类型     | 默认值    | 说明                                                                                                                                                                                                                                                                                          | 必传 |
| --------------- | -------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| closeBtn        | Slot     | undefined | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮。JS 类型：`string \| boolean `。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                            | N    |
| default         | Slot     | -         | 用于自定义消息弹出内容。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                                               | N    |
| duration        | Number   | 3000      | 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。                                                                                                                                                                                                     | N    |
| icon            | Slot     | true      | 【开发中】用于自定义消息前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标。JS 类型：`boolean \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                   | N    |
| theme           | String   | info      | 消息组件风格。可选项：info/success/warning/error/question/loading。JS 类型：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error' \| 'question' \| 'loading'`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/message/type.ts) | N    |
| onClose         | Function |           | JS 类型：`(context: { trigger: 'close-click' \| 'duration-end', e?: MouseEvent }) => void`<br/>关闭消息时触发                                                                                                                                                                                 | N    |
| onCloseBtnClick | Function |           | JS 类型：`(context: { e: MouseEvent }) => void`<br/>当关闭按钮存在时，用户点击关闭按钮触发                                                                                                                                                                                                    | N    |
| onDurationEnd   | Function |           | JS 类型：`() => void`<br/>计时结束后触发                                                                                                                                                                                                                                                      | N    |

### Message Events

| 名称            | 参数                                                                      | 描述                                   |
| --------------- | ------------------------------------------------------------------------- | -------------------------------------- |
| close           | `(context: { trigger: 'close-click' \| 'duration-end', e?: MouseEvent })` | 关闭消息时触发                         |
| close-btn-click | `(context: { e: MouseEvent })`                                            | 当关闭按钮存在时，用户点击关闭按钮触发 |
| duration-end    | \-                                                                        | 计时结束后触发                         |
