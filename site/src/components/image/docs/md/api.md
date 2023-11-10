[//]: # (:: BASE_DOC ::)

[//]: # (## API)
[[toc]]
### Image Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
alt | String | - | 图片描述 | N
error | String / Slot  | - | 【开发中】自定义图片加载失败状态下的显示内容。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
fallback | String | - | 【开发中】图片加载失败时，显示当前链接设置的图片地址。如果要使用组件图标或完全自定义加载失败时显示的内容，请更为使用 `error` | N
fit | String | fill | 图片填充模式。可选项：contain/cover/fill/none/scale-down | N
gallery | Boolean | false | 是否展示为图集样式 | N
lazy | Boolean | false | 【开发中】是否开启图片懒加载 | N
loading | Slot   | - | 【开发中】自定义加载中状态的图片内容，如：“加载中”。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
overlay |  Slot  | - | 图片上方的浮层内容。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
overlayTrigger | String | always | 浮层 `overlayContent` 出现的时机。可选项：always/hover | N
placeholder | String / Slot  | - | 【开发中】占位元素，展示层级低于 `loading` `error` 和图片本身，值类型为字符串时表示占位图片地址。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
position | String | center | 等同于原生的 object-position 属性，可选值为 top right bottom left 或 string，可以自定义任何单位，px 或者 百分比 | N
referrerpolicy | String | strict-origin-when-cross-origin | `<img>` 标签的原生属性，[MDN 定义](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)。可选项：no-referrer/no-referrer-when-downgrade/origin/origin-when-cross-origin/same-origin/strict-origin/strict-origin-when-cross-origin/unsafe-url | N
shape | String | square | 图片圆角类型。可选项：circle/round/square | N
src | String  | - | 用于显示图片的链接或原始图片文件对象。JS 类型：`string ` | N
srcset | Object | - | 【开发中】图片链接集合，用于支持特殊格式的图片，如 `.avif` 和 `.webp`。会优先加载 `srcset` 中的图片格式，浏览器不支持的情况下，加载 `src` 设置的图片地址。JS 类型：`ImageSrcset` `interface ImageSrcset { 'image/avif': string; 'image/webp': string; }`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/image/type.ts) | N
onError | Function |  | JS 类型：`(context: { e: ImageEvent }) => void`<br/>图片加载失败时触发 | N
onLoad | Function |  | JS 类型：`(context: { e: ImageEvent }) => void`<br/>图片加载完成时触发 | N

### Image Events

名称 | 参数 | 描述
-- | -- | --
error | `(context: { e: ImageEvent })` | 图片加载失败时触发
load | `(context: { e: ImageEvent })` | 图片加载完成时触发
