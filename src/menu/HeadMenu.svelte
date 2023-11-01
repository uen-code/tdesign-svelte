<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import {setContext} from "svelte";
  import {MenuStore} from "./useMenu.js";

  const classPrefix = usePrefixClass();

  import './style/css'

  /** 主题 */
  export let theme = 'light'
  /** 唯一值 */
  export let value = undefined
  /** 右侧图标集合 */
  export let operations = []
  /** 样式 */
  export let className = ''

  const menuStore = MenuStore(value)

  setContext("menuStore", menuStore)

  // class
  $: headerMenuClass = {
    [`${classPrefix}-menu`]: true,
    [`${classPrefix}-head-menu`]: true,
    [`${classPrefix}-menu--${theme}`]: true
  }
</script>

<div class="{getClassString(headerMenuClass)} {className}">
  <div class={`${classPrefix}-head-menu__inner`}>
    {#if $$slots.logo}
      <div class={`${classPrefix}-menu__logo`}>
        <slot name="logo"/>
      </div>
    {/if}
    <ul class={`${classPrefix}-menu`}>
      <slot/>
    </ul>
    {#if $$slots.operation}
      <div class={`${classPrefix}-menu__operations`}>
        {#each operations as item}
          <slot name="operation" {item}></slot>
        {/each}
      </div>
    {/if}
  </div>
</div>