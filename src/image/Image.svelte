<script>

  import {getClassString, usePrefixClass} from "../common.js";

  const COMPONENT_NAME = usePrefixClass('image')
  const classPrefix = usePrefixClass()

  import './style/css'

  /** 图片圆角类型 */
  export let shape = 'square'
  /** 图片填充模式 */
  export let fit = 'fill'
  /** 等同于原生的 object-position 属性，可选值为 top right bottom left 或 string，可以自定义任何单位，px 或者 百分比  */
  export let position = 'center'
  /** 用于显示图片的链接或原始图片文件对象 */
  export let src = ''
  /** 图片描述 */
  export let alt = ''
  /** 样式定义 */
  export let style = ''

  // class
  $: wrapperClass = {
    [`${classPrefix}-image__wrapper`]: true,
    [`${classPrefix}-image__wrapper--shape-${shape}`]: true,
  }
  $: imageClass = {
    [`${classPrefix}-image`]: true,
    [`${classPrefix}-image--fit-${fit}`]: true,
    [`${classPrefix}-image--position-${position}`]: true
  }
</script>

<div
  class={getClassString(wrapperClass)}
  {style}
>
  <img
    {src}
    {alt}
    class={getClassString(imageClass)}
  />
</div>