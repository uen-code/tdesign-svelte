<script>
  import { getContext, onMount } from 'svelte';
  import useRipple from '../hooks/useRipple.js';
  import { SIZE, STATUS, getClassString, usePrefixClass } from '../common.js';
  import { TAB_NAV_ITEM_ID } from './useTabs.js';
  import TabIcon from '../icon/TIcon.svelte';

  const COMPONENT_NAME = usePrefixClass('tabs__nav-item');
  const classPrefix = usePrefixClass();

  const [, setTabValue] = getContext('tabStore');

  let node;
  /** 添加一个过渡动画 */
  onMount(() => {
    if (theme !== 'card') {
      useRipple(node);
    }
  });

  export let active = false;
  /** 选项卡位置 */
  export let theme = 'normal';
  /** 组件尺寸 */
  export let size = 'medium';
  export let placement = 'top';
  export let label = undefined;
  export let disabled = false;
  /** 唯一标识 */
  export let value = undefined;
  /** icon 图标 */
  export let labelIcon = undefined;
  /** icon class */
  export let labelIconClass = undefined;

  // handle
  function handleClick() {
    if (disabled) return;
    setTabValue(value);
  }

  // class
  $: navItemClass = {
    [COMPONENT_NAME]: true,
    [`${classPrefix}-tabs__nav--card`]: theme === 'card',
    [STATUS.disabled]: disabled,
    [STATUS.active]: active,
    [`${classPrefix}-is-left`]: placement === 'left',
    [`${classPrefix}-is-right`]: placement === 'right',
    [SIZE.medium]: size === 'medium',
    [SIZE.large]: size === 'large',
  };
  $: statusClass = {
    [STATUS.disabled]: disabled,
    [STATUS.active]: active,
  };
</script>

<div class={getClassString(navItemClass)} id={TAB_NAV_ITEM_ID} {value} on:click={handleClick}>
  {#if theme === 'card'}
    <span bind:this={node} class={`${classPrefix}-text-wrapper`}>
      {#if labelIcon}
        <TabIcon name={labelIcon} className={labelIconClass} />
      {/if}
      {label}
    </span>
  {:else}
    <div bind:this={node} class="{`${COMPONENT_NAME}-wrapper`} {getClassString(statusClass)}">
      <span class={`${COMPONENT_NAME}-text-wrapper`}>
        {#if labelIcon}
          <TabIcon name={labelIcon} className={labelIconClass} />
        {/if}
        {label}
      </span>
    </div>
  {/if}
</div>
