<script>
  import {createEventDispatcher, setContext} from 'svelte';
  import {getClassString, usePrefixClass} from "../common.js";

  import './style/css'
  import {MenuStore} from "./useMenu.js";


  const dispatch = createEventDispatcher()

  const COMPONENT_NAME = usePrefixClass()

  /** 子菜单展开的导航集合 */
  export let expanded = []
  /** 子菜单展开的导航集合，非受控属性 */
  export let defaultExpanded = []
  /** 激活菜单项 */
  export let value = undefined
  /** 默认选中 */
  export let defaultValue = undefined
  /** 是否收起菜单  */
  export let collapsed = false
  /** 主题 */
  export let theme = 'light'
  /** 菜单宽度 值类型为数组时: [ 展开时的宽度, 折叠时的宽度 ]，示例：['200px', '80px'] */
  export let width = ['232', '64']
  export let style = ''

  const menuStore = MenuStore(value, expanded || defaultExpanded)
  setContext("menuStore", menuStore)
  const [menuValue, setMenuValue, menuExpands] = menuStore

  // handle
  menuValue.subscribe((val) => {
    dispatch('change', val)
  })
  menuExpands.subscribe((val) => {
    dispatch('expand', val)
  })

  $: if (defaultValue) setMenuValue(defaultValue)

  // class
  const menuClass = {
    [`${COMPONENT_NAME}-default-menu`]: true,
    [`${COMPONENT_NAME}-menu--${theme}`]: true,
    [`${COMPONENT_NAME}-is-collapsed`]: collapsed
  }
  const innerClass = {
    [`${COMPONENT_NAME}-menu`]: true,
    [`${COMPONENT_NAME}-menu--scroll`]: true,
  }

  // todo popup 逻辑
  // const activeWidth = width && Array.isArray(width) ? width : [`${width}px`, '64px']
  // const styles = {
  //   height: '100%',
  //   width: collapsed ? `${activeWidth[1]}px` : `${activeWidth[0]}px`,
  // }
</script>

<div class='{getClassString(menuClass)}' style="{style}">
  <div class={`${COMPONENT_NAME}-default-menu__inner`}>
    {#if $$slots.logo}
      <div class={`${COMPONENT_NAME}-menu__logo`}>
        <slot name="logo"></slot>
      </div>
    {/if}
    <ul class="{getClassString(innerClass)}">
      <slot></slot>
    </ul>
    {#if $$slots.operations}
      <div class={`${COMPONENT_NAME}-menu__operations`}>
        <slot name="operations"></slot>
      </div>
    {/if}
  </div>
</div>