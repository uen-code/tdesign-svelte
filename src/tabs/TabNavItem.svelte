<script>
  import {onMount} from "svelte";
  import useRipple from "../hooks/useRipple.js";
  import {componentSize, componentStatus, getClassString, usePrefixClass} from "../common.js";

  const componentName = usePrefixClass('tabs__nav-item')
  const classPrefix = usePrefixClass();

  let el;
  /** 添加一个过渡动画 */
  onMount(() => {
    useRipple(el)
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

  let statusClass;
  let navItemClass;
  $: {
    navItemClass = {
      [componentName]: true,
      [componentStatus.disabled]: disabled,
      [componentStatus.active]: active,
      [`${classPrefix}-is-left`]: placement === 'left',
      [`${classPrefix}-is-right`]: placement === 'right',
      [componentSize.medium]: size === 'medium',
      [componentSize.large]: size === 'large',
    }
    statusClass = {
      [componentStatus.disabled]: disabled,
      [componentStatus.active]: active,
    }
  }
</script>

{#if theme === 'card'}
  <div class={getClassString(navItemClass)} bind:this={el}>
    <span class={`${classPrefix}-text-wrapper`}>{label}</span>
  </div>
{:else}
  <div class={getClassString(navItemClass)}>
    <div class="{`${componentName}-wrapper`} {getClassString(statusClass)}" bind:this={el}>
      <span class={`${componentName}-text-wrapper`}>{label}</span>
    </div>
  </div>
{/if}