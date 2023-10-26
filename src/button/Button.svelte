<script>
  import {usePrefixClass, SIZE, STATUS, getClassString} from '../common'
  import {SIZE_ENUM, THEME_ENUM} from '../config'
  import {onMount} from "svelte";
  import useRipple from "../hooks/useRipple";

  import './style/index.js'

  let node;
  onMount(()=>{
    useRipple(node)
  })

  const COMPONENT_NAME = usePrefixClass('button')

  export let theme = THEME_ENUM.primary
  export let size = SIZE_ENUM.medium
  export let variant = 'base'
  export let disabled = false

  $: buttonClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--variant-${variant}`]: true,
    [`${COMPONENT_NAME}--theme-${theme}`]: true,
    [SIZE[size]]: size !== 'medium',
    [STATUS.disabled]: disabled
  }
</script>

<button class={getClassString(buttonClass)} bind:this={node} type="button">
  <span class={`${COMPONENT_NAME}__text`}>
    <slot>
      <em>确定</em>
    </slot>
  </span>
</button>
