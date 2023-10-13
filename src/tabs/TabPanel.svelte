<script>
  import {usePrefixClass} from "../common.js";
  import {getContext, onMount} from "svelte";
  import {tabPanelProps, tabValue} from "../store.js";

  const componentName = usePrefixClass('tab-panel')

  let tabRawValue = getContext('tabRawValue')

  /** 组件初始化 将prop放入容器 */
  tabPanelProps.update(components =>
    [...components,
      {name: 'tabPanel', props: {value, label}}
    ])

  /** 唯一标识 */
  export let value = undefined
  /** 选项卡名称 */
  export let label = undefined

  tabValue.subscribe(item => {
    if (item) tabRawValue = item
  })

  // 是否显示页面内容
  $: isVisible = tabRawValue === value;
</script>

{#if isVisible}
  <div class={componentName}>
    <slot/>
  </div>
{/if}
