<script>

  import {SIZE, STATUS, getClassString, usePrefixClass} from "../common.js";
  import isString from "../utils/lodash/isString.js";
  import isArray from "../utils/lodash/isArray.js";
  import Loading from "../loading/Loading.svelte";
  import {SIZE_ENUM} from "../config.js";

  const COMPONENT_NAME = usePrefixClass('switch');

  import './style/css'

  /** 是否禁用 */
  export let disabled = false
  /** 大小 */
  export let size = SIZE_ENUM.medium
  /** 开关内容，[开启时内容，关闭时内容]。 */
  export let label = undefined
  /** 是否loading */
  export let loading = false

  /** 是否选中 */
  let active = false
  function handleToggle(e) {
    active = !active
  }

  // docs
  let content = null;
  $: {
    if (isString(label)) {
      content = label
    }
    if (isArray(label)) {
      const labelContent = active ? label[0] : label[1]
      if (isString(labelContent)) {
        content = labelContent
      }
    }
  }

  // class
  $: switchClass = {
    [`${COMPONENT_NAME}`]: true,
    [SIZE[size]]: true,
    [STATUS.disabled]: disabled,
    [STATUS.loading]: loading,
    [STATUS.checked]: active,
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
    {#if !Loading}
      {content}
    {/if}
  </div>
</div>