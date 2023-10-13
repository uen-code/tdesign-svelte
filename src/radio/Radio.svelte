<script>
  import {componentStatus, getClassString, usePrefixClass} from "../common.js";

  import './style/index.css'

  const componentBtnName = usePrefixClass('radio-button');
  const componentName = usePrefixClass('radio');

  /** 是否禁用状态 */
  export let disabled = false

  // check
  let checked = false
  function onLabelClick() {
    if (disabled) return;
    checked = true
  }

  // class
  $: prefixClass = componentName
  $: inputClass = {
    [`${prefixClass}`]: true,
    [componentStatus.checked]: checked,
    [componentStatus.disabled]: disabled,
  }
</script>

<label
  class={getClassString(inputClass)}
  tabindex={disabled ? undefined : '0'}
  on:click={onLabelClick}
>
  <span class={`${prefixClass}__input`}></span>
  <span class={`${prefixClass}__label`}><slot/></span>
</label>
