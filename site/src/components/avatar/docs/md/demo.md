---
title: Avatar 头像
description: 用图标、图片、字符的形式展示用户或事物信息
isComponent: true
usage: { title: '', description: '' }
spline: data
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>


### 头像类型

头像提供了 3 种不同类型的头像：图标头像、图片头像、字符头像

<script>
import Base from '../../example/Base.svelte'
</script>

<Base></Base>

### 头像形状

头像默认支持两种形状：round、circle，用户也可自定义设置头像形状

<script>
import Shape from '../../example/GroupMax.svelte'
</script>

<Shape></Shape>

### 头像大小

头像默认支持三种大小：small、medium、large，用户可自定义设置大小

<script>
import Size from '../../example/Size.svelte'
</script>

<Size></Size>

### 字符头像大小自适应

头像支持字符自适应，即字符长度过长时，头像可自动调整字符以便呈现完整内容

<script>
import Adjust from '../../example/Adjust.svelte'
</script>

<Adjust></Adjust>

### 组合头像

组合头像展现

<script>
import Group from '../../example/Group.svelte'
</script>

<Group></Group>

### 组合头像偏移方向

组合头像可控制层叠方向

<script>
import GroupCascading from '../../example/GroupCascading.svelte'
</script>

<GroupCascading></GroupCascading>

### 组合头像个数

组合头像可设置最大展示个数，超过则隐藏显示
<script>
import GroupMax from '../../example/GroupMax.svelte'
</script>

<GroupMax></GroupMax>
