[//]: # (:: BASE_DOC ::)

[//]: # (## API)
[[toc]]
### Menu Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
collapsed | Boolean | false | 【开发中】是否收起菜单 | N
expandMutex | Boolean | false | 【开发中】同级别互斥展开 | N
expandType | String | normal | 【开发中】二级菜单展开方式，平铺展开和浮层展开。可选项：normal/popup | N
expanded | Array | [] | 子菜单展开的导航集合。支持语法糖 `bind:expanded`。JS 类型：`Array<MenuValue>` | N
defaultExpanded | Array | [] | 子菜单展开的导航集合。非受控属性。JS 类型：`Array<MenuValue>` | N
logo | Slot  | - | 站点 LOGO。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
operations | Slot  | - | 导航操作区域。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
theme | String | light | 菜单风格，有亮色模式和暗色模式两种。当 `theme = global` 时，模式随整个组件库；当 `theme = system` 时，模式跟随系统。⚠️ `global/system` 正在开发中，暂勿使用。可选项：light/dark/global/system | N
value | String / Number | - | 激活菜单项。支持语法糖 `bind:value`。JS 类型：`MenuValue` `type MenuValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/menu/type.ts) | N
defaultValue | String / Number | - | 激活菜单项。非受控属性。JS 类型：`MenuValue` `type MenuValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/menu/type.ts) | N
width | String / Number / Array | '232px' | 菜单宽度。值类型为数组时，分别表示菜单展开和折叠的宽度。[ 展开时的宽度, 折叠时的宽度 ]，示例：['200px', '80px']。JS 类型：`string \| number \| Array<string \| number>` | N
onChange | Function |  | JS 类型：`(value: MenuValue) => void`<br/>激活菜单项发生变化时触发 | N
onExpand | Function |  | JS 类型：`(value: Array<MenuValue>) => void`<br/>展开的菜单项发生变化时触发 | N

### Menu Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: MenuValue)` | 激活菜单项发生变化时触发
expand | `(value: Array<MenuValue>)` | 展开的菜单项发生变化时触发

### HeadMenu Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
expandType | String | normal | 二级菜单展开方式，平铺展开和浮层展开。可选项：normal/popup | N
expanded | Array | [] | 展开的子菜单集合。支持语法糖 `bind:expanded`。JS 类型：`Array<MenuValue>` | N
defaultExpanded | Array | [] | 展开的子菜单集合。非受控属性。JS 类型：`Array<MenuValue>` | N
logo | Slot  | - | 站点 LOGO。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
operations | Slot  | - | 导航操作区域。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
theme | String | light | 可选项：light/dark | N
value | String / Number | - | 激活菜单项。支持语法糖 `bind:value`。JS 类型：`MenuValue` `type MenuValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/menu/type.ts) | N
defaultValue | String / Number | - | 激活菜单项。非受控属性。JS 类型：`MenuValue` `type MenuValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/menu/type.ts) | N
onChange | Function |  | JS 类型：`(value: MenuValue) => void`<br/>激活菜单项发生变化时触发 | N
onExpand | Function |  | JS 类型：`(value: Array<MenuValue>) => void`<br/>展开的菜单项发生变化时触发 | N

### HeadMenu Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: MenuValue)` | 激活菜单项发生变化时触发
expand | `(value: Array<MenuValue>)` | 展开的菜单项发生变化时触发

### Submenu Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot  | - | 菜单项内容。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
default | String / Slot  | - | 菜单项内容，同 content。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
disabled | Boolean | - | 是否禁用菜单项展开/收起/跳转等功能 | N
icon | Slot  | - | 菜单项图标。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
popupProps | Object | - | 【开发中】透传 Popup 组件全部特性。JS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/menu/type.ts) | N
title | String | - | 二级菜单内容。JS 类型：`string`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
value | String / Number | - | 菜单项唯一标识。JS 类型：`MenuValue` | N

### MenuItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
default | String | - | 菜单项内容，同 content。JS 类型：`string`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
disabled | Boolean | - | 是否禁用菜单项展开/收起/跳转等功能 | N
href | String | - | 【开发中】跳转链接 | N
icon | Slot  | - | 图标。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
replace | Boolean | false | 【开发中】路由跳转是否采用覆盖的方式（覆盖后将没有浏览器历史记录） | N
router | Object | - | 【开发中】路由对象。如果项目存在 Router，则默认使用 Router。。JS 类型：`Record<string, any>` | N
target | String | - | 【开发中】链接或路由跳转方式。可选项：_blank/_self/_parent/_top | N
to | String / Object | - | 【开发中】路由跳转目标，当且仅当 Router 存在时，该 API 有效。JS 类型：`MenuRoute` `interface MenuRoute { path?: string; name?: string; hash?: string; query?: MenuQueryData; params?: MenuQueryData }` `type MenuQueryData = { [key: string]: string \| string[] }`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/menu/type.ts) | N
value | String / Number | - | 菜单项唯一标识。JS 类型：`MenuValue` | N
onClick | Function |  | JS 类型：`(context: { e: MouseEvent }) => void`<br/>点击时触发 | N

### MenuItem Events

名称 | 参数 | 描述
-- | -- | --
click | `(context: { e: MouseEvent })` | 点击时触发

### MenuGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
title | String / Slot | - | 【开发中】菜单组标题。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
