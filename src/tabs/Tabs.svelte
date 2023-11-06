<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import {createEventDispatcher, onMount, setContext} from "svelte";
  import TabNav from "./TabNav.svelte";
  import TabPanel from "./TabPanel.svelte";
  import {SIZE_ENUM} from "../config.js";
  import {
    TAB_ATTRIBUTE_DISABLED,
    TAB_ATTRIBUTE_ICON_CLASS,
    TAB_ATTRIBUTE_ICON_NAME,
    TAB_ATTRIBUTE_LABEL,
    TAB_ATTRIBUTE_VALUE,
    TAB_PANEL_ID,
    TabStore
  } from "./useTabs.js";
  import {filterChildNodes, getAttribute} from "../utils/domOperations.js";

  import './style/css'

  const dispatch = createEventDispatcher();

  const COMPONENT_NAME = usePrefixClass('tabs');
  const classPrefix = usePrefixClass();

  let panels = [];
  let tabsContentNodes;
  onMount(() => {
    panels = getPanels()
  })

  /** 选项卡位置 */
  export let placement = 'top'
  /** 组件尺寸 */
  export let size = SIZE_ENUM.medium
  /** 选项卡风格，包含 默认风格 和 卡片风格两种 */
  export let theme = 'normal'
  /** 激活的选项卡值 */
  export let value = undefined
  /** 激活的选项卡值，非受控属性 */
  export let defaultValue = undefined
  /** list */
  export let list = []

  const tabStore = TabStore(value)
  const [tabValue, setTabValue] = tabStore
  setContext("tabStore", tabStore)

  // handle
  tabValue.subscribe((val) => {
    dispatch('change',val)
  })

  $: if (defaultValue) setTabValue(defaultValue)

  // 获取label 和 value
  function getPanels() {
    if (list && list.length > 0) {
      return list;
    }
    // 根据dom 获取value与label
    return filterChildNodes(tabsContentNodes, TAB_PANEL_ID).map(el => ({
      label: getAttribute(el, TAB_ATTRIBUTE_LABEL),
      value: getAttribute(el, TAB_ATTRIBUTE_VALUE),
      labelIcon: getAttribute(el, TAB_ATTRIBUTE_ICON_NAME),
      labelIconClass: getAttribute(el, TAB_ATTRIBUTE_ICON_CLASS),
      disabled: getAttribute(el, TAB_ATTRIBUTE_DISABLED) === 'true'
    }));
  }

  // class
  $: headerClass = {
    [`${classPrefix}-tabs__header`]: true,
    [`${classPrefix}-is-${placement}`]: true,
  }
</script>

<div class={COMPONENT_NAME}>
  {#if placement === 'bottom'}

    <!-- content -->
    {#if list && list.length > 0}
      {#each list as tabPanel,index}
        <TabPanel label={tabPanel.label} value={tabPanel.value} panel={tabPanel.panel}/>
      {/each}
    {:else}
      <div class={`${classPrefix}-tabs__content`} bind:this={tabsContentNodes}>
        <slot/>
      </div>
    {/if}

    <!-- nav -->
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

    <!-- bottom -->
  {:else}
    <!-- nav -->
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

    <!-- content -->
    {#if list && list.length > 0}
      {#each list as tabPanel,index}
        <TabPanel label={tabPanel.label} value={tabPanel.value} panel={tabPanel.panel}/>
      {/each}
    {:else}
      <div class={`${classPrefix}-tabs__content`} bind:this={tabsContentNodes}>
        <slot/>
      </div>
    {/if}
  {/if}
</div>