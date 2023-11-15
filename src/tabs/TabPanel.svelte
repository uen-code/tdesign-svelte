<script>
  import { usePrefixClass } from '../common.js';
  import { getContext } from 'svelte';
  import { TAB_PANEL_ID } from './useTabs.js';

  const COMPONENT_NAME = usePrefixClass('tab-panel');

  const [tabValue] = getContext('tabStore');

  /** 唯一标识 */
  export let value = undefined;
  /** 选项卡名称 */
  export let label = undefined;
  /** panel 自定义内容 */
  export let panel = undefined;
  /** 是否禁用 */
  export let disabled = false;
  /** icon 名称 */
  export let labelIcon = undefined;
  /** icon */
  export let labelIconClass = undefined;

  // 是否显示页面内容 sub tabValue
  let isVisible = false;
  tabValue.subscribe((item) => (isVisible = item === value));
</script>

<div id={TAB_PANEL_ID} {value} {label} {labelIcon} {labelIconClass} {disabled}>
  {#if isVisible}
    <div class={COMPONENT_NAME}>
      {#if panel}
        {@html panel}
      {:else}
        <slot />
      {/if}
    </div>
  {/if}
</div>
