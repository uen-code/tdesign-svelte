<script>
  import {SIZE, STATUS, getClassString, usePrefixClass} from "../common.js";
  import {SIZE_ENUM, THEME_ENUM} from "../config.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('link')

  /*** color、underline */
  export let hover = 'underline'
  export let theme = THEME_ENUM.default
  export let size = SIZE_ENUM.medium
  export let isDisabled = false
  export let underline = false
  export let href = ''

  $: linkClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--theme-${theme}`]: true,
    [SIZE[size]]: size !== 'medium',
    [STATUS.disabled]: isDisabled,
    [`${COMPONENT_NAME}-is-underline`]: underline,
    [`${COMPONENT_NAME}--hover-${hover}`]: !isDisabled,
  }
</script>

<a class={getClassString(linkClass)} href={isDisabled || !href ? undefined : href}>
  <slot>
    <em>跳转链接</em>
  </slot>
</a>