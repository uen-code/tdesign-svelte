<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import {tabPanelProps, tabValue} from "../store.js";
  import {onMount, setContext} from "svelte";
  import TabNav from "./TabNav.svelte";

  import './style/index.css'

  const componentName = usePrefixClass('tabs');
  const classPrefix = usePrefixClass();

  let panels = []

  export let placement = 'top'
  export let size = 'medium'
  export let theme = 'normal'
  export let value = undefined

  /** 告知tab唯一标识 */
  setContext('tabRawValue', value)

  // 订阅tab-panel的值
  tabPanelProps.subscribe(items => {
    panels = items
  })

  // class
  $: headerClass = {
    [`${classPrefix}-tabs__header`]: true,
    [`${classPrefix}-is-${placement}`]: true,
  }

</script>

<div class={componentName}>
  {#if panels && panels.length > 0}
    <div
      class={getClassString(headerClass)}
    >
      <TabNav
        panels="{panels}"
        placement={placement}
        size={size}
        theme={theme}
        value={value}
      />
    </div>
    <div class={`${classPrefix}-tabs__content`}>
      <slot/>
    </div>
  {/if}
</div>