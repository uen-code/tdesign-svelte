<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import {tabValue} from "../store.js";
  import {onMount, setContext} from "svelte";
  import TabNav from "./TabNav.svelte";
  import {SIZE_ENUM} from "../config.js";
  import {TAB_PANEL_ID} from "./useTabs.js";
  import {filterChildNodes} from "../utils/domOperations.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('tabs');
  const classPrefix = usePrefixClass();

  let panels = [];
  let tabsContentDom;
  onMount(() => {
    panels = filterChildNodes(tabsContentDom, TAB_PANEL_ID)
  })

  export let placement = 'top'
  export let size = SIZE_ENUM.medium
  export let theme = 'normal'
  export let value = undefined

  /** 告知tab唯一标识 */
  const setValue = (val) => {
    if (val) value = val;
    tabValue.set(value)
  }
  setContext('setTabValue', setValue)
  tabValue.set(value)
  setContext('tabValue', tabValue)

  // class
  $: headerClass = {
    [`${classPrefix}-tabs__header`]: true,
    [`${classPrefix}-is-${placement}`]: true,
  }

</script>

<div class={COMPONENT_NAME}>
  {#if panels && panels.length > 0}
    <div
      class={getClassString(headerClass)}
    >
      <TabNav
        panels={panels}
        placement={placement}
        size={size}
        theme={theme}
        value={value}
      />
    </div>
  {/if}
  <div class={`${classPrefix}-tabs__content`} bind:this={tabsContentDom}>
    <slot/>
  </div>
</div>
