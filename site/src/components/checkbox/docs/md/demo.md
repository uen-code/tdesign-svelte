---
title: Checkbox 多选框
description: 多选框是一个选择控件，允许用户通过单击在选中和未选中之间切换。
isComponent: true
usage: { title: '', description: '' }
spline: form
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 基础多选框

最简单的多选框形式，常用于表单中数据多选的场景。

<script>
import Base from "../../example/Base.svelte"
</script>

<Base></Base>

### 联动多选框

联动多选框指多选框与其他组件配合使用。

<script>
import Link from "../../example/Link.svelte"
</script>

<Link></Link>

### 成组的多选框组

将多选框按一定属性组合使用的多选框组。

<script>
import Group from "../../example/Group.svelte"
</script>

<Group></Group>

### 受控类多选框

多选框支持 v-model、受控和非受控三种使用方式，受控方式使用readonly属性。

<script>
import Controlled from "../../example/Controlled.svelte"
</script>

<Controlled></Controlled>
