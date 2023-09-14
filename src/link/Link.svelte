<script>
  import {componentSize, componentStatus, getClassString, usePrefixClass} from "../common.js";
  import {sizeEnum, themeEnum} from "../config.js";

  import './style/index.css'

  const COMPONENT_NAME = usePrefixClass('link')

  /*** color、underline */
  export let hover = 'underline'
  export let theme = themeEnum.primary
  export let size = sizeEnum.medium
  export let isDisabled = false
  export let underline = false

  const linkClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--theme-${theme}`]: true,
    [componentSize[size]]: size !== 'medium',
    [componentStatus.disabled]: isDisabled,
    [`${COMPONENT_NAME}-is-underline`]: underline,
    [`${COMPONENT_NAME}--hover-${hover}`]: !isDisabled,
  }
</script>

<a class={getClassString(linkClass)}>
  <slot>
    <em>跳转链接</em>
  </slot>
</a>