<script>

  import {getClassString, usePrefixClass} from "../common.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('input-group');

  /** 多个输入框之间是否需要间隔 */
  export let separate = false

  export let className = ''
  export let style = ''

  // groupClass
  $: inputGroupClass = {
    [className]: className,
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--separate`]: separate,
  }
</script>

<div class={getClassString(inputGroupClass)}>
  <slot/>
</div>