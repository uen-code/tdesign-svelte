---
title: Switch 开关
description: 用于两个互斥选项，用来打开或关闭选项的选择控件。
isComponent: true
usage: { title: '', description: '' }
spline: form
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 基础开关

不带描述，最基础的开关。

<script>
import Base from "../../example/Base.svelte"
</script>

<Base></Base>

### 带描述的开关

开关内部带有文字或图标等描述，含义对应开关当前状态，切换时文字同步切换。视觉上更加醒目，用于需要描述当前开关对应状态及含义，更直观且方便用户理解。

<script>
import Describe from "../../example/Describe.svelte"
</script>

<Describe></Describe>

### 不同状态的开关

提供 normal、loading 和 disabled 3种状态的开关。根据不同场景设置对应状态。

<script>
import Status from "../../example/Status.svelte"
</script>

<Status></Status>

### 不同大小的开关

提供 大、中（默认）、小 3种开关。

<script>
import Size from "../../example/Size.svelte"
</script>

<Size></Size>
