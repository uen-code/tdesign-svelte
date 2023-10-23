<script>
  import {usePrefixClass} from "../common.js";
  import {getContext} from "svelte";
  import {TAB_PANEL_ID} from "./useTabs.js";

  const COMPONENT_NAME = usePrefixClass('tab-panel')

  const tabValue = getContext('tabValue')

  /** 唯一标识 */
  export let value = undefined
  /** 选项卡名称 */
  export let label = undefined

  // 是否显示页面内容 sub tabValue
  let isVisible = false
  tabValue.subscribe(item => {
    isVisible = item === value
  })
</script>

<div id="{TAB_PANEL_ID}" {value} {label}>
  {#if isVisible}
    <div class={COMPONENT_NAME}>
      <slot/>
    </div>
  {/if}
</div>
