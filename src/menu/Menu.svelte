<script>
  import {setContext} from 'svelte';
  import {getClassString, usePrefixClass} from "../common.js";

  import './style/css'
  import {menuExpand, menuValue} from "../store.js";
  import isArray from "../utils/lodash/isArray.js";
  import {get} from "svelte/store";

  const COMPONENT_NAME = usePrefixClass()

  /** 子菜单展开的导航集合 */
  export let expanded = []
  /** 激活菜单项 */
  export let value = undefined
  /** 是否收起菜单  */
  export let collapsed = false
  /** 主题 */
  export let theme = 'light'
  /** 菜单宽度 值类型为数组时: [ 展开时的宽度, 折叠时的宽度 ]，示例：['200px', '80px'] */
  export let width = ['232', '64']
  /** 是否为横向头部菜单 */
    // export let isHead = false

    // 控制展开的导航集合
  const setExpand = (val) => {
      expanded = get(menuExpand)
      let expandedValues = new Set(isArray(expanded) ? expanded : [])
      if (expandedValues.has(val)) {
        expandedValues.delete(val);
        menuExpand.set([...expandedValues])
        return [...expandedValues];
      }
      expandedValues.add(val);
      menuExpand.set([...expandedValues])
      return [...expandedValues]
    }
  setContext('open', setExpand)
  setContext('menuExpand', menuExpand)

  // 控制激活的菜单
  const setValue = (val) => {
    if (val) value = val;
    menuValue.set(value)
  }
  setContext('select', setValue)
  setContext("menuValue", menuValue)

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

<div class='{getClassString(menuClass)}' style="{getClassString(innerClass)}">
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