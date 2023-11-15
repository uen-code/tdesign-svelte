[//]: # ':: BASE_DOC ::'
[//]: # '## API'

[[toc]]

### Tag Props

| 名称     | 类型            | 默认值                                                                                                                                  | 说明                                                                                                                                              | 必传 |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| closable | Boolean         | false                                                                                                                                   | 标签是否可关闭                                                                                                                                    | N    |
| default  | Slot            | -                                                                                                                                       | 组件子元素。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                               | N    |
| disabled | Boolean         | false                                                                                                                                   | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态                                                                             | N    |
| icon     | Slot            | 标签中的图标，可自定义图标呈现。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N                                                                                                                                                 |
| maxWidth | String / Number | -                                                                                                                                       | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80                                                                                           | N    |
| shape    | String          | square                                                                                                                                  | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark                                                                               | N    |
| size     | String          | medium                                                                                                                                  | 标签尺寸。可选项：small/medium/large。JS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N    |
| theme    | String          | default                                                                                                                                 | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success                                                              | N    |
| variant  | String          | dark                                                                                                                                    | 标签风格变体。可选项：dark/light/outline/light-outline                                                                                            | N    |
| onClick  | Function        |                                                                                                                                         | JS 类型：`(context: { e: MouseEvent }) => void`<br/>点击时触发                                                                                    | N    |
| onClose  | Function        |                                                                                                                                         | JS 类型：`(context: { e: MouseEvent }) => void`<br/>如果关闭按钮存在，点击关闭按钮时触发                                                          | N    |

### Tag Events

| 名称  | 参数                           | 描述                                 |
| ----- | ------------------------------ | ------------------------------------ |
| click | `(context: { e: MouseEvent })` | 点击时触发                           |
| close | `(context: { e: MouseEvent })` | 如果关闭按钮存在，点击关闭按钮时触发 |

### CheckTag Props

| 名称           | 类型            | 默认值 | 说明                                                                                                                                                                                                                                                                                        | 必传 |
| -------------- | --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| checked        | Boolean         | -      | 标签选中的状态，默认风格（theme=default）才有选中态。支持语法糖 `bind::checked`                                                                                                                                                                                                             | N    |
| checkedProps   | Object          | -      | 透传标签选中态属性。JS 类型：`TdTagProps`                                                                                                                                                                                                                                                   | N    |
| content        | Number / Array  | -      | 【开发中】组件子元素；传入数组时：[选中内容，非选中内容]。JS 类型：`string \| number \| string[]`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                   | N    |
| default        | Slot            | -      | 组件子元素，默认插槽。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                                     | N    |
| disabled       | Boolean         | false  | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态                                                                                                                                                                                                                       | N    |
| readonly       | Boolean         | false  | 标签只读态，有效标签不能触发事件。默认风格（theme=default）才有只读态                                                                                                                                                                                                                       | N    |
| size           | String          | medium | 标签尺寸。可选项：small/medium/large。JS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                           | N    |
| uncheckedProps | Object          | -      | 透传标签未选态属性。JS 类型：`TdTagProps`                                                                                                                                                                                                                                                   | N    |
| value          | String / Number | -      | 标签唯一标识，一般用于标签组场景，单个可选择标签无需设置                                                                                                                                                                                                                                    | N    |
| onChange       | Function        |        | JS 类型：`(checked: boolean, context: CheckTagChangeContext) => void`<br/>状态切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/tag/type.ts)。<br/>`interface CheckTagChangeContext { e: MouseEvent \| KeyboardEvent; value: string \| number }`<br/> | N    |
| onClick        | Function        |        | JS 类型：`(context: { e: MouseEvent }) => void`<br/>点击标签时触发                                                                                                                                                                                                                          | N    |

### CheckTag Events

| 名称  | 参数                           | 描述           |
| ----- | ------------------------------ | -------------- |
| click | `(context: { e: MouseEvent })` | 点击标签时触发 |
