<script>
  import {STATUS, getClassString, usePrefixClass} from "../common.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('radio');
  const COMPONENT_BTN_NAME = usePrefixClass('radio-button');

  /** 是否禁用状态 */
  export let disabled = false

  // check
  let checked = false
  function onLabelClick() {
    if (disabled) return;
    checked = true
  }

  // class
  $: prefixClass = COMPONENT_NAME
  $: inputClass = {
    [`${prefixClass}`]: true,
    [STATUS.checked]: checked,
    [STATUS.disabled]: disabled,
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
