<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import {getClassString, usePrefixClass} from "../common.js";
  import useRipple from "../hooks/useRipple.js";
  import {menuItemValue, menuValue} from "../store.js";

  import './style/index.css'


  const dispatch = createEventDispatcher()
  const componentName = usePrefixClass()

  /** 父组件value */
  let menuRawValue = getContext('menuRawValue')
  let el;

  /** 添加一个过度动画 */
  onMount(() => {
    useRipple(el)
  })

  /** 是否禁用菜单项展开/收起/跳转等功能 */
  export let disabled = false
  /** 菜单项唯一标识 */
  export let value = undefined
  /** 图标 */
  export let icon = undefined
  export let theme = 'light'


  function handleClick(event) {
    menuItemValue.set(value);
    dispatch('click', event)
  }

  /** menu value 与 menu-item value强一致性 */
  menuValue.subscribe(item => {
    menuRawValue = item
  })

  $: active = menuRawValue === value;

  const menuItemClass = {
    [`${componentName}-menu__item`]: true,
    [`${componentName}-is-disabled`]: disabled,
    [`${componentName}-menu__item--plain`]: icon,
    // [`${componentName}-submenu__item`]: !!submenu && !menu.isHead,
  }
</script>

<li class="{getClassString(menuItemClass)} {active ? `${componentName}-is-active` : ''}" bind:this={el}
    on:click={handleClick}>
  <slot name="logo"></slot>
  <span class={`${componentName}-menu__content`}>
    <slot></slot>
  </span>
</li>