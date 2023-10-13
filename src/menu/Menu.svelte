<script>
  import {setContext} from 'svelte';
  import {getClassString, usePrefixClass} from "../common.js";

  import './style/index.css'
  import {menuItemValue, menuValue} from "../store.js";

  const componentName = usePrefixClass()

  export let expandMutex = false
  export let expandType = 'normal'
  export let value = undefined
  /** 是否收起菜单  */
  export let collapsed = false
  /** 主题 */
  export let theme = 'light'
  /** 菜单宽度 值类型为数组时: [ 展开时的宽度, 折叠时的宽度 ]，示例：['200px', '80px'] */
  export let width = ['232', '64']
  /** 是否为横向头部菜单 */
  export let isHead = false

  /** value 下放 */
  setContext('menuRawValue', value)

  menuItemValue.subscribe(childValue => {
    if (childValue) {
      value = childValue;
      menuValue.set(value);
    }
  });

  const menuClass = {
    [`${componentName}-default-menu`]: true,
    [`${componentName}-menu--${theme}`]: true,
    [`${componentName}-is-collapsed`]: collapsed
  }
  const innerClass = {
    [`${componentName}-menu`]: true,
    [`${componentName}-menu--scroll`]: true,
  }
  const activeWidth = width && Array.isArray(width) ? width : [`${width}px`, '64px']
  const styles = {
    height: '100%',
    width: collapsed ? `${activeWidth[1]}px` : `${activeWidth[0]}px`,
  }
</script>

<div class='{getClassString(menuClass)}' style="{getClassString(innerClass)}">
  <div class={`${componentName}-default-menu__inner`}>
    <div class={`${componentName}-menu__logo`}>
      <slot name="logo"></slot>
    </div>
    <ul class="{getClassString(innerClass)}">
      <slot></slot>
    </ul>
    <div class={`${componentName}-menu__operations`}>
      <slot name="operations"></slot>
    </div>
  </div>
</div>