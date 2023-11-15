[//]: # ':: BASE_DOC ::'
[//]: # '## API'

[[toc]]

### Icon Props

| 名称    | 类型     | 默认值    | 说明                                                           | 必传 |
| ------- | -------- | --------- | -------------------------------------------------------------- | ---- |
| name    | String   | -         | 必需。图标名称                                                 | Y    |
| size    | String   | undefined | 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等    | N    |
| style   | String   | -         | HTML 原生属性。可用于设置图标颜色，如：style=\"color: red\"    | N    |
| onClick | Function |           | TS 类型：`(context: { e: MouseEvent }) => void`<br/>点击时触发 | N    |
