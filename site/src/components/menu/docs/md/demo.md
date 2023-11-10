---
title: Menu 导航菜单
description: 用于承载网站的架构，并提供跳转的菜单列表。
isComponent: true
usage: { title: '', description: '' }
spline: navigation
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>

### 顶部导航

#### 单层导航

只存在单层结构的顶部导航，点击即跳转。可在承载单一产品或单一业务线等层级结构简单的网站使用。

<script>
import TopSingle from "../../example/TopSingle.svelte"
</script>

<TopSingle></TopSingle>

[//]: # (#### 双层导航)

[//]: # ()
[//]: # (顶部导航可承载2级页面导航。常用于聚焦单个业务线下的二级页面导航。)

[//]: # ()
[//]: # (<script>)

[//]: # (import TopDouble from "../../example/TopDouble.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<TopDouble></TopDouble>)

[//]: # ()
[//]: # (#### 多层收纳导航)

[//]: # ()
[//]: # (顶部导航下拉菜单收纳2-3级页面导航，可拓展分组展示，常用于多种业务下的快速切换导航。)

[//]: # ()
[//]: # (<script>)

[//]: # (import TopMultiple from "../../example/TopMultiple.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<TopMultiple></TopMultiple>)

#### 可自定义顶部导航

可在原有导航上面加入自定义的功能。在具有复杂逻辑或有特定诉求的业务场景使用。

<script>
import TopCustom from "../../example/TopCustom.svelte"
</script>

<TopCustom></TopCustom>

### 侧边导航

#### 单层导航

只存在单层结构的侧边导航，点击即跳转。一般与单层顶部导航相结合，作为二级页面的侧边导航。

<script>
import SideSingle from "../../example/SideSingle.svelte"
</script>

<SideSingle></SideSingle>

[//]: # (#### 平铺式侧边导航)

[//]: # ()
[//]: # (侧边导航可承载1-3级页面导航，并平铺展示。适用于层级较深的网站。)

[//]: # ()
[//]: # (<script>)

[//]: # (import SideMulti from "../../example/SideMulti.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<SideMulti></SideMulti>)

[//]: # ()
[//]: # (#### 可分组的侧边导航)

[//]: # ()
[//]: # (针对大量页面进行分组展示，以方便用户理解及查找。一般在大量业务或者页面需要展示的网站使用。)

[//]: # ()
[//]: # (<script>)

[//]: # (import SideGroup from "../../example/SideGroup.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<SideGroup></SideGroup>)

[//]: # ()
[//]: # (#### 可收起的侧边导航)

[//]: # ()
[//]: # (在侧边导航上提供收起按钮，点击后可以将侧边栏最小化，常见于带有图标的侧边导航。)

[//]: # ()
[//]: # (<script>)

[//]: # (import SideClosable from "../../example/SideClosable.svelte")

[//]: # (</script>)

[//]: # ()
[//]: # (<SideClosable></SideClosable>)

### 可设置宽度的侧边导航

通过 `width` 设置侧边导航的宽度。

<script>
import SideWidth from "../../example/SideWidth.svelte"
</script>

<SideWidth></SideWidth>

