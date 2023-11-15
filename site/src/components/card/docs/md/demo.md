---
title: Card 卡片
description: 最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
isComponent: true
usage: { title: '', description: '' }
spline: data
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 极简卡片

仅有内容的卡片形式。

#### 有边框

<script>
import Bordered from '../../example/Bordered.svelte'
</script>

<Bordered></Bordered>

#### 无边框

<script>
import BorderedNone from '../../example/BorderedNone.svelte'
</script>

<BorderedNone></BorderedNone>

### 带 header 的卡片

由极简卡片上方的标题栏组成，标题栏中可包含标题、图片、操作区、状态等内容。顶部栏可以定义所有的内容，以用户的自定义元素为准。

#### 不带分割线

<script>
import Header from '../../example/Header.svelte'
</script>

<Header></Header>

#### 带分割线

<script>
import HeaderBordered from '../../example/HeaderBordered.svelte'
</script>

<HeaderBordered></HeaderBordered>

### 带 footer 的卡片

由极简卡片下方的底部栏组成，可包含标题、图片、操作区、状态等内容。

<script>
import Footer from '../../example/Footer.svelte'
</script>

<Footer></Footer>

#### 全部为操作内容的底部栏

<script>
import FooterActions from '../../example/FooterActions.svelte'
</script>

<FooterActions></FooterActions>

#### 全部为展示内容的底部栏

<script>
import FooterContent from '../../example/FooterContent.svelte'
</script>

<FooterContent></FooterContent>

#### 同时带展示内容与操作内容的底部栏

<script>
import FooterContentActions from '../../example/FooterContentActions.svelte'
</script>

<FooterContentActions></FooterContentActions>

### 同时带 header 和 footer 的卡片

由顶部栏、底部栏和极简卡片组成的复杂卡片，三个区域内容可根据需要对内容进行配置。

<script>
import HeaderSubtitleFooterActions from '../../example/HeaderSubtitleFooterActions.svelte'
</script>

<HeaderSubtitleFooterActions></HeaderSubtitleFooterActions>

<script>
import HeaderFooterActions from '../../example/HeaderFooterActions.svelte'
</script>

<HeaderFooterActions></HeaderFooterActions>

### 不同标题内容的卡片

带有主标题、副标题、或标题描述的卡片。

#### 带主副标题的卡片

<script>
import HeaderSubtitle from '../../example/HeaderSubtitle.svelte'
</script>

<HeaderSubtitle></HeaderSubtitle>

#### 带标题描述的卡片

<script>
import HeaderDescription from '../../example/HeaderDescription.svelte'
</script>

<HeaderDescription></HeaderDescription>

#### 同时带主副标题与标题描述的卡片

<script>
import HeaderSubtitleDescription from '../../example/HeaderSubtitleDescription.svelte'
</script>

<HeaderSubtitleDescription></HeaderSubtitleDescription>
