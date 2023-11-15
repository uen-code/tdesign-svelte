<script>
  import { getClassString, usePrefixClass } from '../common.js';
  import { createEventDispatcher, setContext } from 'svelte';
  import { MenuStore } from './useMenu.js';
  import './style/css';

  const classPrefix = usePrefixClass();

  const dispatch = createEventDispatcher();

  /** 主题 */
  export let theme = 'light';
  /** 唯一值 */
  export let value = undefined;
  /** 右侧图标集合 */
  export let operations = [];
  /** 样式 */
  export let className = '';

  const menuStore = MenuStore(value);
  const [menuValue] = menuStore;

  setContext('menuStore', menuStore);

  menuValue.subscribe((val) => {
    dispatch('change', val);
  });

  // class
  $: headerMenuClass = {
    [className]: className,
    [`${classPrefix}-menu`]: true,
    [`${classPrefix}-head-menu`]: true,
    [`${classPrefix}-menu--${theme}`]: true,
  };
</script>

<div class={getClassString(headerMenuClass)}>
  <div class={`${classPrefix}-head-menu__inner`}>
    <!-- logo -->
    {#if $$slots.logo}
      <div class={`${classPrefix}-menu__logo`}>
        <slot name="logo" />
      </div>
    {/if}

    <!-- menu item -->
    <ul class={`${classPrefix}-menu`}>
      <slot />
    </ul>

    <!-- operation 操作 -->
    {#if $$slots.operation}
      <div class={`${classPrefix}-menu__operations`}>
        {#each operations as item}
          <slot name="operation" {item} />
        {/each}
      </div>
    {/if}
  </div>
</div>
