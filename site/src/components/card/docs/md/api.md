[//]: # ':: BASE_DOC ::'
[//]: # '## API'

[[toc]]

### Card Props

| 名称           | 类型    | 默认值 | 说明                                                                                                                                                                                             | 必传 |
| -------------- | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| actions        | Slot    | -      | 卡片操作区。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                              | N    |
| avatar         | Slot    | -      | 卡片中的用户头像，仅在海报风格的卡片中有效。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                              | N    |
| bordered       | Boolean | true   | 是否有边框                                                                                                                                                                                       | N    |
| cover          | String  | -      | 卡片封面图。值类型为字符串，会自动使用 `img` 标签输出封面图。JS 类型：`string`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                           | N    |
| default        | Slot    | -      | 卡片内容。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                | N    |
| description    | String  | -      | 卡片描述文案。JS 类型：`string`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                          | N    |
| footer         | Slot    | -      | 卡片底部内容，可完全自定义。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                              | N    |
| header         | Slot    | -      | 卡片顶部内容，优先级高于其他所有元素。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                    | N    |
| headerBordered | Boolean | false  | 头部是否带分割线，仅在有header时有效                                                                                                                                                             | N    |
| hoverShadow    | Boolean | false  | hover时是否有阴影                                                                                                                                                                                | N    |
| loading        | Boolean | false  | 加载状态，值为 true 会根据不同的布局显示不同的加载状态，值为 false 则表示非加载状态。JS 类型：`boolean `。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N    |
| shadow         | Boolean | false  | 是否显示卡片阴影，默认不显示                                                                                                                                                                     | N    |
| size           | String  | medium | 尺寸。可选项：medium/small                                                                                                                                                                       | N    |
| status         | String  | -      | 卡片状态内容，仅在操作区域不在顶部时有效（即 `theme=footer` ）                                                                                                                                   | N    |
| subtitle       | String  | -      | 卡片副标题。JS 类型：`string`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                            | N    |
| theme          | String  | normal | 卡片风格：普通风格、海报风格2（操作区域在底部）。可选项：normal/footer                                                                                                                           | N    |
| title          | String  | -      | 卡片标题。JS 类型：`string`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                              | N    |
