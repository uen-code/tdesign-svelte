---
title: Image 图片
description: 用于展示图片素材。
isComponent: true
usage: { title: '', description: '' }
spline: data
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 基础图片

不同填充模式的图片

提供 fill、contain、cover、none、scale-down 5 种填充类型。

<script>
import FillMode from '../../example/FillMode.svelte'
</script>

<FillMode></FillMode>

不同填充位置的图片

图片相对于容器的位置。当图片过大时，提供显示图片的局部左侧对齐、或右侧对齐的不同位置。

<script>
import FillPosition from '../../example/FillPosition.svelte'
</script>

<FillPosition></FillPosition>

### 不同形状的图片

提供方形、圆角方形、圆角 3 种形状。

当图片长宽不相等时，无法使用 circle 展示一个正圆。

<script>
import Shape from '../../example/Shape.svelte'
</script>

<Shape></Shape>

### 图集样式的图片

图片呈现图集样式的效果。

<script>
import GalleryCover from '../../example/GalleryCover.svelte'
</script>

<GalleryCover></GalleryCover>

[//]: # '### 加载状态的图片'
[//]: #
[//]: # '显示加载的不同状态，提供默认、自定义两种占位样式。'
[//]: #
[//]: # '<script>'
[//]: # "import Placeholder from '../../example/Placeholder.svelte'"
[//]: # '</script>'
[//]: # '<Placeholder></Placeholder>'

### 图片懒加载

<script>
import LazySingle from '../../example/LazySingle.svelte'
</script>

<LazySingle></LazySingle>

[//]: # '### 图片扩展元素'
[//]: #
[//]: # '带有悬浮层的图片。'
[//]: #
[//]: # '<script>'
[//]: # "import ExtraAlways from '../../example/ExtraAlways.svelte'"
[//]: # '</script>'
[//]: # '<ExtraAlways></ExtraAlways>'
