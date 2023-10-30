---
title: Divider 分割线
description: 分割线是一个呈线状的轻量化组件，起到分隔、组织、细化的作用，用于有逻辑的组织元素内容和页面结构。
isComponent: true
usage: { title: '', description: '' }
spline: layout
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 基础分割线

基础分割线是没有文字的独立线条，又分为水平分割线和垂直分割线。

#### 水平分割线

水平分割线常用来对不同元素内容进行分割。

<script>
import Base from "../../example/Base.svelte"
</script>

<Base></Base>

#### 垂直分割线

垂直分割线常用来做行内分割。

<script>
import Vertical from "../../example/Vertical.svelte"
</script>

<Vertical></Vertical>

### 带文字的分割线

带文字的分割线是在分割线中嵌入文字，在需要对分割内容进行解释说明时使用。

<script>
import Text from "../../example/Text.svelte"
</script>

<Text></Text>