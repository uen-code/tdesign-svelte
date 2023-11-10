<script>

  import {createEventDispatcher} from "svelte";
  import {SIZE, STATUS, getClassString, usePrefixClass} from "../common.js";
  import isString from "../utils/lodash/isString.js";
  import isArray from "../utils/lodash/isArray.js";
  import Loading from "../loading/Loading.svelte";
  import {SIZE_ENUM} from "../config.js";

  const COMPONENT_NAME = usePrefixClass('switch');

  import './style/css'

  const dispatch = createEventDispatcher();

  /** 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close'] */
  export let customValue = []
  /** 是否禁用 */
  export let disabled = false
  /** 大小 */
  export let size = SIZE_ENUM.medium
  /** 开关内容，[开启时内容，关闭时内容]。 */
  export let label = undefined
  /** 是否loading */
  export let loading = false
  /** 开关值 */
  export let value = undefined
  /** 是否选中 */
  export let checked = false

  export let className = ''
  export let style = ''

  /** 当前值 */
  let currentValue = value || checked ? value || checked : false
  /** 自定义内容 */
  let content = '';

  // handle
  function handleToggle(e) {
    if (disabled) return;
    currentValue = currentValue === activeValue ? inactiveValue : activeValue
    dispatch('change', currentValue)
  }

  // compute
  $: activeValue = customValue && customValue.length > 0 ? customValue[0] : true
  $: inactiveValue = customValue && customValue.length > 1 ? customValue[1] : false

  $: {
    if (isString(label)) {
      content = label
    }
    if (isArray(label)) {
      const labelContent = currentValue === activeValue ? label[0] : label[1]
      if (isString(labelContent)) {
        content = labelContent
      }
    }
  }

  // class
  $: switchClass = {
    [className]:className,
    [`${COMPONENT_NAME}`]: true,
    [SIZE[size]]: true,
    [STATUS.disabled]: disabled,
    [STATUS.loading]: loading,
    [STATUS.checked]: currentValue === activeValue,
  }
  $: nodeClass = {
    [`${COMPONENT_NAME}__handle`]: true,
    [STATUS.disabled]: disabled,
    [STATUS.loading]: loading,
  }
  $: contentClass = {
    [`${COMPONENT_NAME}__content`]: true,
    [SIZE[size]]: true,
    [STATUS.disabled]: disabled,
  }
</script>
<div class={getClassString(switchClass)} {disabled} on:click={handleToggle}>
  <span class={getClassString(nodeClass)}>
    {#if loading}
      <Loading size="small"/>
    {/if}
  </span>
  <div class={getClassString(contentClass)}>
    {#if !loading}
      {#if $$slots.labelOpen && currentValue === activeValue}
        <slot name="labelOpen"/>
      {:else if $$slots.labelClose && currentValue === inactiveValue}
        <slot name="labelClose" />
      {:else}
        {content}
      {/if}
    {/if}
  </div>
</div>