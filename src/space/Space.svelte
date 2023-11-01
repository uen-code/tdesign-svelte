<script>

  import {SIZE_ENUM} from "../config.js";
  import {getClassString, usePrefixClass} from "../common.js";
  import isString from "lodash/isString";
  import isNumber from "lodash/isNumber";
  import {onMount} from "svelte";
  import {getChildNodes} from "../utils/domOperations.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('space');
  const sizeMap = {small: '8px', medium: '16px', large: '24px'};

  let node;
  let childes = []
  onMount(() => {
    childes = getChildNodes(node)
  })

  /** 间距方向 */
  export let direction = 'horizontal'
  /** 间距大小 */
  export let size = SIZE_ENUM.medium
  /** 是否换行，仅在 horizontal 时有效 */
  export let breakLine = false
  /** 对齐方式 */
  export let align = undefined
  /** 接收样式 */
  export let style = ''

  // style
  $: gapStyle = isString(size) ? `gap:${sizeMap[size] || size};` : isNumber(size) ? `gap:${size}px;` : ''
  $: breakStyle = breakLine ? "flex-wrap: wrap;" : ''

  // class
  $: spaceClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}-align-${align}`]: align,
    [`${COMPONENT_NAME}-${direction}`]: direction
  }
</script>

<div bind:this={node}  hidden="hidden">
  <slot/>
</div>

<div class={getClassString(spaceClass)} style={`${gapStyle}${breakStyle}${style}`}>
  {#if childes && childes.length > 0}
    {#each childes as child,index}
      <div class={`${COMPONENT_NAME}-item`}>{@html child.outerHTML}</div>
      {#if index + 1 !== childes.length && $$slots.separator}
        <div class={`${COMPONENT_NAME}-item-separator`}>
          <slot name="separator"></slot>
        </div>
      {/if}
    {/each}
  {/if}
</div>
