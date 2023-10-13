<script>

  import {componentSize, componentStatus, getClassString, usePrefixClass} from "../common.js";
  import isString from "../utils/lodash/isString.js";
  import isArray from "../utils/lodash/isArray.js";
  import Loading from "../../components/loading/Loading.svelte";

  const componentName = usePrefixClass('switch');

  import './style/index.css'

  /** 是否禁用 */
  export let disabled = false
  /** 大小 */
  export let size = 'medium'
  /** 开关内容，[开启时内容，关闭时内容]。 */
  export let label = undefined
  /** 是否loading */
  export let loading = false

  /** 是否选中 */
  let active = false
  function handleToggle(e) {
    active = !active
  }

  // content
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
  $: switchClasses = {
    [`${componentName}`]: true,
    [componentSize[size]]: true,
    [componentStatus.disabled]: disabled,
    [componentStatus.loading]: loading,
    [componentStatus.checked]: active,
  }
  $: nodeClasses = {
    [`${componentName}__handle`]: true,
    [componentStatus.disabled]: disabled,
    [componentStatus.loading]: loading,
  }
  $: contentClasses = {
    [`${componentName}__content`]: true,
    [componentSize[size]]: true,
    [componentStatus.disabled]: disabled,
  }
</script>
<div class={getClassString(switchClasses)} {disabled} on:click={handleToggle}>
  <span class={getClassString(nodeClasses)}>
    {#if loading}
      <Loading size="small"/>
    {/if}
  </span>
  <div class={getClassString(contentClasses)}>
    {#if !Loading}
      {content}
    {/if}
  </div>
</div>