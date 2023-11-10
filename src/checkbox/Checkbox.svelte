<script>
  import {getClassString, STATUS, usePrefixClass} from "../common.js";
  import {createEventDispatcher, getContext} from "svelte";
  import intersection from "../utils/lodash/intersection.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('checkbox')

  const dispatch = createEventDispatcher();

  const checkboxStore = getContext('checkboxStore')
  const siftList = getContext('siftList')
  const handleCheckboxChange = getContext('handleCheckboxChange')

  let labelNode;

  /** 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 */
  export let checkAll = false;
  /** 是否选中 */
  export let checked = false;
  /** 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled */
  export let disabled = false
  /** 是否为半选 */
  export let indeterminate = false;
  /** 只读状态 */
  export let readonly = false;
  /** 主文案 */
  export let label = ''
  /** 多选框的值 */
  export let value = undefined;
  /** html 原生属性 */
  export let name = ''

  let checkboxGroupValue = checkboxStore?.getCheckboxGroupValue() || []
  checkboxStore?.checkboxGroupValue.subscribe(val => {
    checkboxGroupValue = val
  })

  // compute
  $: isDisabled = disabled || checkboxStore?.disabled;
  $: isChecked = checkAll
    ? intersection(siftList, checkboxGroupValue).length === siftList.length
    : checked
  $: isIndeterminate = checkAll
    ? !isChecked && checkboxGroupValue.length < siftList.length && checkboxGroupValue.length !== 0
    : indeterminate

  // handle
  function handleChange(e) {
    if (readonly) return;
    checked = !isChecked;
    if (handleCheckboxChange) {
      handleCheckboxChange(checked, checkAll, value)
    }
    dispatch('change', checked)
  }

  // class
  $: checkboxClass = {
    [COMPONENT_NAME]: true,
    [STATUS.checked]: isChecked,
    [STATUS.disabled]: isDisabled,
    [STATUS.indeterminate]: isIndeterminate,
  }

</script>

<label
  bind:this={labelNode}
  class={getClassString(checkboxClass)}
  tabindex={isDisabled ? undefined : '0'}
>
  <input
    type="checkbox"
    tabindex="-1"
    class={`${COMPONENT_NAME}__former`}
    disabled={isDisabled}
    {readonly}
    {name}
    indeterminate={isIndeterminate}
    value={value ? value : undefined}
    checked={isChecked}
    on:change={handleChange}
    key="input"
  />
  <span class={`${COMPONENT_NAME}__input`} key="input-span"></span>
  <span class={`${COMPONENT_NAME}__label`} key="label">
    {#if $$slots.default || label}
      {#if label}
        {label}
      {:else}
        <slot/>
      {/if}
    {/if}
  </span>
</label>