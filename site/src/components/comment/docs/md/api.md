[//]: # ':: BASE_DOC ::'
[//]: # '## API'

[[toc]]

### Comment Props

| 名称     | 类型          | 默认值 | 说明                                                                                                                                                                                                                                                            | 必传 |
| -------- | ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| actions  | Array         | -      | 操作。JS 类型：`Array<String>`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                          | N    |
| author   | String / Slot | -      | 作者。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                         | N    |
| avatar   | String / Slot | -      | 头像。JS 类型：`string \| Node`，[Avatar API Documents](./avatar?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/src/comment/type.ts) | N    |
| content  | String / Slot | -      | 内容。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                         | N    |
| datetime | String / Slot | -      | 时间。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                         | N    |
| quote    | String / Slot | -      | 引用。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                         | N    |
| reply    | String / Slot | -      | 回复。JS 类型：`string \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                                                                         | N    |
