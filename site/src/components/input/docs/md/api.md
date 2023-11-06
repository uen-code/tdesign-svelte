[//]: # (:: BASE_DOC ::)

[//]: # (## API)
[[toc]]
### Input Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | left | 文本内容位置，居左/居中/居右。可选项：left/center/right | N
allowInputOverMax | Boolean | false | 【开发中】超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入 | N
autoWidth | Boolean | false | 【开发中】宽度随内容自适应 | N
autocomplete | String | undefined | 【开发中】是否开启自动填充功能，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) | N
autofocus | Boolean | false | 【开发中】自动聚焦 | N
clearable | Boolean | false | 是否可清空 | N
disabled | Boolean | - | 是否禁用输入框 | N
format | Function | - | 指定输入框展示值的格式。JS 类型：`InputFormatType` `type InputFormatType = (value: InputValue) => string`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/input/type.JS) | N
inputClass | String / Object / Array | - | t-input 同级类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`。JS 类型：`ClassName`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.JS) | N
label | String / Slot  | - | 左侧文本。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.JS) | N
name | String | - | 名称 | N
placeholder | String | undefined | 占位符 | N
prefixIcon | Slot  | - | 组件前置图标。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.JS) | N
readonly | Boolean | false | 只读状态 | N
size | String | medium | 输入框尺寸。可选项：small/medium/large。JS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.JS) | N
status | String | undefined | 输入框状态。默认情况会由组件内部根据实际情况呈现，如果文本过长引起的状态变化。可选项：default/success/warning/error | N
suffix | String / Slot  | - | 后置图标前的后置内容。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.JS) | N
suffixIcon | Slot  | - | 组件后置图标。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.JS) | N
tips | String / Slot  | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.JS) | N
type | String | text | 输入框类型。可选项：text/number/url/tel/password/search/submit/hidden | N
value | String | '' | 输入框的值。支持语法糖 `v-model` 或 `v-model:value`。JS 类型：`InputValue` `type InputValue = string`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/input/type.JS) | N
defaultValue | String | '' | 输入框的值。非受控属性。JS 类型：`InputValue` `type InputValue = string`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/input/type.JS) | N
onBlur | Function |  | JS 类型：`(value: InputValue, context: { e: FocusEvent }) => void`<br/>失去焦点时触发 | N
onChange | Function |  | JS 类型：`(value: InputValue, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' }) => void`<br/>输入框值发生变化时触发。`trigger=initial` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 `maxlength` 限制 | N
onClear | Function |  | JS 类型：`(context: { e: MouseEvent }) => void`<br/>清空按钮点击时触发 | N
onClick | Function |  | 【开发中】JS 类型：`(context: { e: MouseEvent }) => void`<br/>点击组件时触发 | N
onCompositionend | Function |  | 【开发中】JS 类型：`(value: InputValue, context: { e: CompositionEvent }) => void`<br/>中文输入结束时触发 | N
onCompositionstart | Function |  | 【开发中】JS 类型：`(value: InputValue, context: { e: CompositionEvent }) => void`<br/>中文输入开始时触发 | N
onEnter | Function |  | JS 类型：`(value: InputValue, context: { e: KeyboardEvent }) => void`<br/>回车键按下时触发 | N
onFocus | Function |  | JS 类型：`(value: InputValue, context: { e: FocusEvent }) => void`<br/>获得焦点时触发 | N
onKeydown | Function |  | 【开发中】JS 类型：`(value: InputValue, context: { e: KeyboardEvent }) => void`<br/>键盘按下时触发 | N
onKeypress | Function |  | 【开发中】JS 类型：`(value: InputValue, context: { e: KeyboardEvent }) => void`<br/>按下字符键时触发（keydown -> keypress -> keyup） | N
onKeyup | Function |  | 【开发中】JS 类型：`(value: InputValue, context: { e: KeyboardEvent }) => void`<br/>释放键盘时触发 | N
onMouseenter | Function |  | JS 类型：`(context: { e: MouseEvent }) => void`<br/>进入输入框时触发 | N
onMouseleave | Function |  | JS 类型：`(context: { e: MouseEvent }) => void`<br/>离开输入框时触发 | N
onPaste | Function |  | 【开发中】JS 类型：`(context: { e: ClipboardEvent; pasteValue: string }) => void`<br/>粘贴事件，`pasteValue` 表示粘贴板的内容 | N
onValidate | Function |  | 【开发中】JS 类型：`(context: { error?: 'exceed-maximum' \| 'below-minimum' }) => void`<br/>字数超出限制时触发 | N
onWheel | Function |  | 【开发中】JS 类型：`(context: { e: WheelEvent }) => void`<br/>输入框中滚动鼠标时触发 | N

### Input Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: InputValue, context: { e: FocusEvent })` | 失去焦点时触发
change | `(value: InputValue, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' })` | 输入框值发生变化时触发。`trigger=initial` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 `maxlength` 限制
clear | `(context: { e: MouseEvent })` | 清空按钮点击时触发
click | `(context: { e: MouseEvent })` | 点击组件时触发
compositionend | `(value: InputValue, context: { e: CompositionEvent })` | 中文输入结束时触发
compositionstart | `(value: InputValue, context: { e: CompositionEvent })` | 中文输入开始时触发
enter | `(value: InputValue, context: { e: KeyboardEvent })` | 回车键按下时触发
focus | `(value: InputValue, context: { e: FocusEvent })` | 获得焦点时触发
keydown | `(value: InputValue, context: { e: KeyboardEvent })` | 键盘按下时触发
keypress | `(value: InputValue, context: { e: KeyboardEvent })` | 按下字符键时触发（keydown -> keypress -> keyup）
keyup | `(value: InputValue, context: { e: KeyboardEvent })` | 释放键盘时触发
mouseenter | `(context: { e: MouseEvent })` | 进入输入框时触发
mouseleave | `(context: { e: MouseEvent })` | 离开输入框时触发
paste | `(context: { e: ClipboardEvent; pasteValue: string })` | 粘贴事件，`pasteValue` 表示粘贴板的内容
validate | `(context: { error?: 'exceed-maximum' \| 'below-minimum' })` | 字数超出限制时触发
wheel | `(context: { e: WheelEvent })` | 输入框中滚动鼠标时触发

### InputGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
separate | Boolean | - | (开发中)多个输入框之间是否需要间隔 | N