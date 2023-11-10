---
title: Tabs 选项卡
description: 用于承载同一层级下不同页面或类别的组件，方便用户在同一个页面框架下进行快速切换。
isComponent: true
usage: { title: '', description: '' }
spline: navigation
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 基础选项卡

使用选项卡切换内容模块，操作后不会进行页面跳转。

<script>
import Base from "../../example/Base.svelte"
</script>

<Base></Base>

### 带图标的选项卡

在基础选项卡基础上，在每个标签前添加图标，方便用户快速理解。

<script>
import Icon from "../../example/Icon.svelte"
</script>

<Icon></Icon>

### 不同尺寸的选项卡

提供 大、中（默认）两种尺寸。

<script>
import Size from "../../example/Size.svelte"
</script>

<Size></Size>

### 不同风格的选项卡

提供 默认 和 卡片 两种风格。

<script>
import Theme from "../../example/Theme.svelte"
</script>

<Theme></Theme>

### 不同位置的选项卡

提供 上、右、下、左 不同位置的选项卡。

<script>
import Position from "../../example/Position.svelte"
</script>

<Position></Position>


<!-- ### 带操作选项卡

定义：在整个选项卡模块右侧放置操作icon，以控制选项卡内容。

使用场景：对选项卡有相应的操作（如添加、删除等功能）需求的场景。

{{ operation }} -->

### 可滑动的选项卡

当选项卡数量超出最大宽度，可通过滑动展示选项卡。

<script>
import Combination from "../../example/Combination.svelte"
</script>

<Combination></Combination>


### 带禁用状态的选项卡

提供了选项卡的禁用状态。

<script>
import Disabled from "../../example/Disabled.svelte"
</script>

<Disabled></Disabled>

[//]: # (### 增删选项卡)

[//]: # ()
[//]: # (用户可添加、删除选项卡，满足自定义场景。)

[//]: # ()
[//]: # (<script>)

[//]: # (import Custom from "../../example/Custom.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<Custom></Custom>)

[//]: # ()
[//]: # (### 可拖拽的选项卡)

[//]: # ()
[//]: # (提供了可拖拽的选项卡。)

[//]: # ()
[//]: # (<script>)

[//]: # (import DragSort from "../../example/DragSort.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<DragSort></DragSort>)

[//]: # ()
[//]: # (### 懒加载)

[//]: # ()
[//]: # (通过设置 lazy，可以实现懒加载，只在选中tab时才进行渲染。)

[//]: # ()
[//]: # (<script>)

[//]: # (import LazyLoad from "../../example/LazyLoad.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<LazyLoad></LazyLoad>)

