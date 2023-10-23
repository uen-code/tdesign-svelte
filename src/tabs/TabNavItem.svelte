<script>
  import {getContext, onMount} from "svelte";
  import useRipple from "../hooks/useRipple.js";
  import {SIZE, STATUS, getClassString, usePrefixClass} from "../common.js";
  import {TAB_NAV_ITEM_ID} from "./useTabs.js";

  const COMPONENT_NAME = usePrefixClass('tabs__nav-item')
  const classPrefix = usePrefixClass();

  const setTabValue = getContext('setTabValue')

  let node;
  /** 添加一个过渡动画 */
  onMount(() => {
    useRipple(node)
  })

  export let active = false
  /** 选项卡位置 */
  export let theme = 'normal'
  export let size = 'medium'
  export let placement = 'top'
  export let label = undefined
  export let disabled = false
  /** 唯一标识 */
  export let value = undefined

  // handle
  function handleClick() {
    setTabValue(value)
  }

  // class
  $: navItemClass = {
    [COMPONENT_NAME]: true,
    [STATUS.disabled]: disabled,
    [STATUS.active]: active,
    [`${classPrefix}-is-left`]: placement === 'left',
    [`${classPrefix}-is-right`]: placement === 'right',
    [SIZE.medium]: size === 'medium',
    [SIZE.large]: size === 'large',
  }
  $: statusClass = {
    [STATUS.disabled]: disabled,
    [STATUS.active]: active,
  }
</script>

<div class={getClassString(navItemClass)} id={TAB_NAV_ITEM_ID} {value} on:click={handleClick}>
  {#if theme === 'card'}
    <span bind:this={node} class={`${classPrefix}-text-wrapper`}>{label}</span>
  {:else}
    <div bind:this={node} class="{`${COMPONENT_NAME}-wrapper`} {getClassString(statusClass)}">
      <span class={`${COMPONENT_NAME}-text-wrapper`}>{label}</span>
    </div>
  {/if}
</div>
