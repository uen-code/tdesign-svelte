---
title: Icon 图标
description: Icon 作为UI构成中重要的元素，一定程度上影响UI界面整体呈现出的风格。
isComponent: true
usage: { title: '', description: '' }
spline: base
---

[[toc]]

### 安装独立 Icon 包

图标相对其他基础组件较为独立，所以作为一个独立的 `npm` 包做发布管理。如果项目中直接使用，请安装 `tdesign-icons-svelte`。 同时 `tdesign-svelte` 也内置了 `icon`, 支持直接通过 `TIcon` 来使用。
图标库中共包含超过 **25** 类，**1200+** 个图标，推荐您按需引用图标，减少产物的体积。

### 按需引入使用图标

图标可以按需引入单个 SVG 图标。组件开发内部使用到 Icon 时，均按需引入 SVG 图标。

<script>
import Single from "../../example/Single.svelte"
</script>

<Single></Single>

### 全量引入使用图标

图标尺寸单位支持多种， 'small', 'medium', 'large', '35px', '3em' 等。
图标颜色使用 CSS 控制，如：style="color: red"，或者 style="fill: red"。
点击右侧导航「全部图标」即可查看组件库全部图标。

<script>
import Base from "../../example/Base.svelte"
</script>

<Base></Base>
