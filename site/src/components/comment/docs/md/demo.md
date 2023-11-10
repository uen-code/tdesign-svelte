---
title: Comment 评论
description: 评论用于对页面内容的反馈、评价、讨论等，如对文章的评价，对话题的讨论等。
isComponent: true
usage: { title: '', description: '' }
spline: data
---

[[toc]]



### 基础评论

评论最基本的组件，包括头像、作者、时间、评论内容，适用于各种需要进行评论展示的场景。

<script>
import Base from '../../example/Base.svelte'
</script>
<Base></Base>

### 带操作评论

可对评论内容进行相关操作的组件，适用于需要自定义操作列的场景。

<script>
import Operation from '../../example/Operation.svelte'
</script>
<Operation></Operation>

[//]: # (### 列表评论)

[//]: # ()
[//]: # (以列表形式展示的评论。)

[//]: # ()
[//]: # (<script>)

[//]: # (import List from '../../example/List.svelte')

[//]: # (</script>)

[//]: # (<List></List>)

### 带回复评论

展示一条评论的回复内容的组件，适用于对评论进行回复的场景，作者名称后可标明回复对象的名称。

<script>
import Reply from '../../example/Reply.svelte'
</script>
<Reply></Reply>

### 带引用评论

评论可以引用其他内容，表示评论和其他内容的引用关系。

<script>
import Quote from '../../example/Quote.svelte'
</script>
<Quote></Quote>


### 带回复框评论

对评论内容进行回复操作的组件，可在回复框内直接输入内容进行回复。

<script>
import ReplyForm from '../../example/ReplyForm.svelte'
</script>
<ReplyForm></ReplyForm>

