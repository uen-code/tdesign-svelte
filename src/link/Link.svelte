<script>
  import {SIZE, STATUS, getClassString, usePrefixClass} from "../common.js";
  import {SIZE_ENUM, THEME_ENUM} from "../config.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('link')
  const classPrefix = usePrefixClass()

  /*** color、underline */
  export let hover = 'underline'
  export let theme = THEME_ENUM.default
  export let size = SIZE_ENUM.medium
  export let disabled = false
  export let underline = false
  export let href = ''

  export let className = ''
  export let style = '';

  $: linkClass = {
    [className]: className,
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--theme-${theme}`]: true,
    [SIZE[size]]: size !== 'medium',
    [STATUS.disabled]: disabled,
    [`${classPrefix}-is-underline`]: underline,
    [`${COMPONENT_NAME}--hover-${hover}`]: !disabled,
  }
</script>

<a class={getClassString(linkClass)} href={disabled || !href ? undefined : href} on:click {style}>
  <!-- prefix icon -->
  {#if $$slots.prefixIcon}
    <span class={`${COMPONENT_NAME}__prefix-icon`}>
      <slot name="prefixIcon"/>
    </span>
  {/if}

  <!-- content -->
  <slot/>

  <!-- suffix icon -->
  {#if $$slots.suffixIcon}
    <span class={`${COMPONENT_NAME}__suffix-icon`}>
      <slot name="suffixIcon"/>
    </span>
  {/if}
</a>