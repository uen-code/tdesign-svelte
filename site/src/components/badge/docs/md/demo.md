---
title: Badge 徽标
description: 出现在图标或文字右上角的徽标标识。
isComponent: true
usage: { title: '', description: '' }
spline: data
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 红点样式的徽标

仅显示为圆点的徽标，有图标时位于图标右上角，无图标时位于文字标题后侧。弱提示场景下，不显示数量，需要用户去手动点击查看进行消除。

<script>
import Base from '../../example/Base.svelte'
</script>

<Base></Base>

### 数字样式的徽标

含数字的徽标，适用于需要较强提醒的场景，直接提醒用户相关信息数量。

<script>
import Number from '../../example/Number.svelte'
</script>

<Number></Number>

### 自定样式的徽标

可对显示信息进行自定义配置，如展示为“热门hot”“最新new”等。

<script>
import Custom from '../../example/Custom.svelte'
</script>

<Custom></Custom>

### 不同尺寸的徽标

提供标准（默认）、小两种尺寸。

<script>
import Size from '../../example/Size.svelte'
</script>

<Size></Size>

### 不同形状的徽标

提供圆形和方形两种不同形状的徽标展示。

<script>
import Shape from '../../example/Shape.svelte'
</script>

<Shape></Shape>

### 控制徽标显示偏移位置

<script>
import Offset from '../../example/Offset.svelte'
</script>

<Offset></Offset>
