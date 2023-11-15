[//]: # ':: BASE_DOC ::'
[//]: # '## API'

[[toc]]

### Loading Props

| 名称                 | 类型           | 默认值 | 说明                                                                                                                                                                                                        | 必传 |
| -------------------- | -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| default              | Slot           | -      | 子元素，同 content。JS 类型：`Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                 | N    |
| delay                | Number         | 0      | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒                                                                                                                                      | N    |
| fullscreen           | Boolean        | false  | 是否显示为全屏加载                                                                                                                                                                                          | N    |
| indicator            | Boolean / Slot | true   | 【开发中】加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符。JS 类型：`boolean \| Node`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N    |
| inheritColor         | Boolean        | false  | 【开发中】是否继承父元素颜色                                                                                                                                                                                | N    |
| loading              | Boolean        | true   | 是否处于加载状态                                                                                                                                                                                            | N    |
| preventScrollThrough | Boolean        | true   | 【开发中】 防止滚动穿透，全屏加载模式有效                                                                                                                                                                   | N    |
| showOverlay          | Boolean        | true   | 【开发中】是否需要遮罩层，遮罩层对包裹元素才有效                                                                                                                                                            | N    |
| size                 | String         | medium | 尺寸，示例：small/medium/large/12px/56px/0.3em                                                                                                                                                              | N    |
| text                 | String         | -      | 加载提示文案。JS 类型：`string`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts)                                                                                     | N    |
| zIndex               | Number         | -      | 消息通知层级，样式默认为 3500                                                                                                                                                                               | N    |
