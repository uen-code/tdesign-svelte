<script>

  import {getClassString, usePrefixClass} from "../common.js";

  const COMPONENT_NAME = usePrefixClass('image')
  const classPrefix = usePrefixClass()

  import './style/css'

  /** 是否展示为图集样式 */
  export let gallery = false
  /** 浮层 `overlayContent` 出现的时机 */
  export let overlayTrigger = 'always'
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
  /** `<img>` 标签的原生属性，[MDN 定义](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) */
  export let referrerpolicy = 'strict-origin-when-cross-origin'

  /** 样式定义 */
  export let className = ''
  export let style = ''

  let showOverlay = !hasMouseEvent

  // handle
  function handleToggleOverlay() {
    if (hasMouseEvent) {
      showOverlay = !showOverlay
    }
  }

  // compute
  $: hasMouseEvent = overlayTrigger === 'hover'

  // class
  $: wrapperClass = {
    [className]: className,
    [`${classPrefix}-image__wrapper`]: true,
    [`${classPrefix}-image__wrapper--shape-${shape}`]: true,
    [`${classPrefix}-image__wrapper--gallery`]: gallery,
    [`${classPrefix}-image__wrapper--need-hover`]: hasMouseEvent,
  };
  $: imageClass = {
    [`${classPrefix}-image`]: true,
    [`${classPrefix}-image--fit-${fit}`]: true,
    [`${classPrefix}-image--position-${position}`]: true
  };
  $: overlayClass = {
    [`${classPrefix}-image__overlay-content`]: true,
    [`${classPrefix}-image__overlay-content--hidden`]: !showOverlay,
  };
</script>

<div
  class={getClassString(wrapperClass)}
  {referrerpolicy}
  {style}
  on:mouseenter={handleToggleOverlay}
  on:mouseleave={handleToggleOverlay}
>
  <!-- show atlas 图集样式 -->
  {#if gallery}
    <div class={`${classPrefix}-image__gallery-shadow`}></div>
  {/if}

  <!-- image -->
  <img
    {src}
    {alt}
    {referrerpolicy}
    class={getClassString(imageClass)}
  />

  <!-- overlay 浮层 -->
  {#if $$slots.overlay}
    <div class={getClassString(overlayClass)}>
      <slot name="overlay"/>
    </div>
  {/if}
</div>