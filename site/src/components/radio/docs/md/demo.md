---
title: Radio 单选框
description: 单选框代表从一组互斥的选项中仅选择一个选项。
isComponent: true
usage: { title: '', description: '' }
spline: form
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 基础单选框

最简单的单选框形式，常用于表单中数据选项的选择。

<script>
import Base from '../../example/Base.svelte'
</script>

<Base></Base>

### 按钮单选框

按钮形式的单选框，选项更明显突出，适合强调选项的场景。

<script>
import Type from '../../example/Type.svelte'
</script>

<Type></Type>

### 不同尺寸的按钮单选框

提供大、中（默认）、小三种单选框。

<script>
import Size from '../../example/Size.svelte'
</script>

<Size></Size>

### 成组的单选框

将单选框按一定属性组合使用的单选框组。

<script>
import Group from '../../example/Group.svelte'
</script>

<Group></Group>
