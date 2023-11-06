---
title: Message 全局提示
description: 对用户的操作作出轻量的全局反馈。
isComponent: true
usage: { title: '', description: '' }
spline: message
---

[[toc]]

<script>
import Usage from "../DocUsage.svelte"
</script>

<Usage></Usage>



### 普通全局提示

使用简洁文字描述操作反馈。常规全局提示包含：普通信息、成功信息、警示信息、错误信息、帮助信息和加载中。


### 加载中信息提示

### 关闭全局提示

#### 带关闭按钮的全局提示


#### 使用关闭函数控制全局提示

如果不希望通过计时关闭，或者用户点击按钮关闭，也可以使用关闭函数。


#### 关闭多条全局提示


### 控制全局提示显示位置

全局提示显示位置可控制，`placement` 用于控制大概位置，`offset` 用于设置相对于 `placement` 所在位置的偏移


### 插件调用与函数式调用

支持函数式调用 `MessagePlugin` 方式。

示例：`MessagePlugin.warning('请输入信息')`


