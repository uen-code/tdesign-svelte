<script>
  /** 统一使用的翻转箭头组件 */
  import {getClassString, usePrefixClass} from "../common.js";

  const COMPONENT_NAME = usePrefixClass('fake-arrow')

  export let isActive = undefined
  export let overlayClassName = undefined
  export let overlayStyle = undefined

  $: arrowClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--active`]: isActive,
    [overlayClassName]: overlayClassName
  }
</script>

<svg
  class={getClassString(arrowClass)}
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={overlayStyle}
>
  <path d="M3.75 5.7998L7.99274 10.0425L12.2361 5.79921" stroke="black" stroke-opacity="0.9" stroke-width="1.3" />
</svg>
