<script>
  import { createEventDispatcher, getContext, onMount } from 'svelte';
  import { getClassString, usePrefixClass } from '../common.js';
  import useRipple from '../hooks/useRipple.js';

  const dispatch = createEventDispatcher();
  const classPrefix = usePrefixClass();

  const [menuValue, setMenuValue] = getContext('menuStore');

  let node;
  /** 添加一个过度动画 */
  onMount(() => {
    useRipple(node);
  });

  /** 是否禁用菜单项展开/收起/跳转等功能 */
  export let disabled = false;
  /** 菜单项唯一标识 */
  export let value = undefined;
  export let theme = 'light';

  // 菜单激活
  let active = false;
  menuValue.subscribe((val) => (active = val === value));

  function handleClick(e) {
    setMenuValue(value);
    dispatch('click', e);
  }

  const menuItemClass = {
    [`${classPrefix}-menu__item`]: true,
    [`${classPrefix}-is-disabled`]: disabled,
    [`${classPrefix}-menu__item--plain`]: $$slots.icon,
    // [`${classPrefix}-submenu__item`]: !!submenu && !menu.isHead,
  };
</script>

<li
  class="{getClassString(menuItemClass)} {active ? `${classPrefix}-is-active` : ''}"
  bind:this={node}
  on:click={handleClick}
>
  <slot name="icon" />
  <span class={`${classPrefix}-menu__content`}>
    <slot />
  </span>
</li>
