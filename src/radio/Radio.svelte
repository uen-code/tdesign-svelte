<script>
  import {STATUS, getClassString, usePrefixClass} from "../common.js";

  import './style/css'
  import {isString} from "../utils/lodash";
  import {createEventDispatcher, getContext} from "svelte";

  const COMPONENT_NAME = usePrefixClass('radio');
  const COMPONENT_BTN_NAME = usePrefixClass('radio-button');

  const dispatch = createEventDispatcher();

  const radioGroupStore = getContext('radioGroupStore')

  /** 单选框类型 */
  export let type = 'default'
  /** 是否禁用状态 */
  export let disabled = false
  /** 是否允许取消选中 */
  export let allowUncheck = false
  /** 单选按钮的值 */
  export let value = undefined
  /** 主文案 */
  export let label = undefined
  /** 是否选中 */
  export let checked = false

  export let className = ''
  export let style = ''

  // handle
  function onLabelClick(e) {
    if (radioDisabled) return;
    if (radioGroupStore) {
      // 允许取消选中时 value 可以是undefined
      const newValue = radioAllowUncheck && radioChecked ? undefined : value
      radioGroupStore.setRadioValue(newValue)
    } else {
      radioChecked = radioAllowUncheck ? !radioChecked : true
    }
    dispatch('click', e);
  }

  // compute
  let radioChecked = checked
  radioGroupStore?.radioValue.subscribe((val) => {
    radioChecked = val === value
  })
  $: radioDisabled = disabled || radioGroupStore?.radioGroupDisabled
  $: radioAllowUncheck = allowUncheck || radioGroupStore?.radioGroupAllowUncheck

  // class
  $: prefixClass = type === 'button' ? COMPONENT_BTN_NAME : COMPONENT_NAME;
  $: inputClass = {
    [className]:className,
    [`${prefixClass}`]: true,
    [STATUS.checked]: radioChecked,
    [STATUS.disabled]: radioDisabled,
  }
</script>

<label
  class={getClassString(inputClass)}
  tabindex={disabled ? undefined : '0'}
  on:click={onLabelClick}
  {style}
>
  <input
    type="radio"
    class={`${prefixClass}__former`}
    on:click|stopPropagation
    tabindex="-1"
    data-value={isString(value) ? `'${value}'` : value}
    data-allow-uncheck={allowUncheck || undefined}
  />
  <span class={`${prefixClass}__input`}></span>
  <span class={`${prefixClass}__label`}>
    {#if label && isString(label)}
      {label}
    {:else}
      <slot/>
    {/if}
  </span>
</label>
