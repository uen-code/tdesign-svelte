<script>
  import {SIZE_ENUM} from "../config.js";
  import {SIZE, STATUS, getClassString, usePrefixClass} from "../common.js";
  import CloseCircleFilledIcon from "../common-components/icon/CloseCircleFilledIcon.svelte";
  import BrowseOffIcon from "../common-components/icon/BrowseOffIcon.svelte";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('input');
  const COMPONENT_WRAP_NAME = usePrefixClass('input__wrap');
  const classPrefix = usePrefixClass();

  /** 文本内容位置，居左/居中/居右 */
  export let align = 'left'
  /** 是否可清空 */
  export let clearable = false
  /** 输入框类型 */
  export let type = 'text'
  /** 是否禁用输入框 */
  export let disabled = false
  /** 占位符 */
  export let placeholder = undefined
  /** 只读状态 */
  export let readonly = false
  /** 输入框尺寸 */
  export let size = SIZE_ENUM.medium
  /** 输入框的值 */
  export let value = ''

  // handle
  let focused = false
  const emitFocus = ()=>{
    if (disabled) return focused = false;
    return focused = true;
  }

  // class
  $: inputClass = {
    [COMPONENT_NAME]: true,
    [SIZE[size]]: size !== 'medium',
    [STATUS.disabled]: disabled,
    [`${classPrefix}-align-${align}`]: align !== 'left',
    [`${classPrefix}-is-readonly`]: readonly,
    [`${COMPONENT_NAME}--prefix`]: $$slots.prefixIcon,
    [`${COMPONENT_NAME}--suffix`]: clearable || type === 'password' || $$slots.suffixIcon,
    [`${COMPONENT_NAME}--focused`]: focused,
  }
  $: inputWrapClass = {
    [COMPONENT_WRAP_NAME]: true
  }
  $: inputSuffixClass = {
    [`${COMPONENT_NAME}__suffix`]: true,
    [`${COMPONENT_NAME}__suffix-icon`]: true
  }
</script>
<div class={getClassString(inputWrapClass)}>
  <div
    class={getClassString(inputClass)}
  >
    <!--  prefix or label  -->
    <span class="{`${COMPONENT_NAME}__prefix`} {`${COMPONENT_NAME}__prefix-icon`}">
      <slot name="prefixIcon"/>
    </span>
    <!--  input  -->
    <input
      class="{`${COMPONENT_NAME}__inner`}"
      value={value}
      {type}
      {disabled}
      placeholder="{placeholder ? placeholder : '请输入'}"
      on:focus={emitFocus}
    />
    <!--  suffix or content  -->
    {#if clearable && type === 'password'}
      <span class="{getClassString(inputSuffixClass)} {`${COMPONENT_NAME}__clear`}">
        <CloseCircleFilledIcon classes={`${COMPONENT_NAME}__suffix-clear`}/>
      </span>
      <span class="{getClassString(inputSuffixClass)} {`${COMPONENT_NAME}__clear`}">
        <BrowseOffIcon classes={`${COMPONENT_NAME}__suffix-clear`}/>
      </span>
    {:else if !clearable && type === 'password'}
      <span class={getClassString(inputSuffixClass)}>
        <BrowseOffIcon classes={`${COMPONENT_NAME}__suffix-clear`}/>
      </span>
    {:else if clearable && type !== 'password'}
      <span class="{getClassString(inputSuffixClass)} {`${COMPONENT_NAME}__clear`}">
        <CloseCircleFilledIcon classes={`${COMPONENT_NAME}__suffix-clear`}/>
      </span>
    {:else }
    {/if}
    <span class="{getClassString(inputSuffixClass)} {clearable? `${COMPONENT_NAME}__clear`:''}">
      <slot name="suffixIcon"></slot>
    </span>
  </div>
</div>