<script>
  import {sizeEnum} from "../config.js";
  import {componentSize, componentStatus, getClassString, usePrefixClass} from "../common.js";
  import CloseCircleFilledIcon from "../common-components/icon/CloseCircleFilledIcon.svelte";
  import BrowseOffIcon from "../common-components/icon/BrowseOffIcon.svelte";

  import './style/index.css'

  const componentName = usePrefixClass('input');
  const componentWrapName = usePrefixClass('input__wrap');
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
  export let size = sizeEnum.medium
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
    [componentName]: true,
    [componentSize[size]]: size !== 'medium',
    [componentStatus.disabled]: disabled,
    [`${classPrefix}-align-${align}`]: align !== 'left',
    [`${classPrefix}-is-readonly`]: readonly,
    [`${componentName}--prefix`]: $$slots.prefixIcon,
    [`${componentName}--suffix`]: clearable || type === 'password' || $$slots.suffixIcon,
    [`${componentName}--focused`]: focused,
  }
  $: inputWrapClass = {
    [componentWrapName]: true
  }
  $: inputSuffixClass = {
    [`${componentName}__suffix`]: true,
    [`${componentName}__suffix-icon`]: true
  }
</script>
<div class={getClassString(inputWrapClass)}>
  <div
    class={getClassString(inputClass)}
  >
    <!--  prefix or label  -->
    <span class="{`${componentName}__prefix`} {`${componentName}__prefix-icon`}">
      <slot name="prefixIcon"/>
    </span>
    <!--  input  -->
    <input
      class="{`${componentName}__inner`}"
      value={value}
      {type}
      {disabled}
      placeholder="{placeholder ? placeholder : '请输入'}"
      on:focus={emitFocus}
    />
    <!--  suffix or content  -->
    {#if clearable && type === 'password'}
      <span class="{getClassString(inputSuffixClass)} {`${componentName}__clear`}">
        <CloseCircleFilledIcon classes={`${componentName}__suffix-clear`}/>
      </span>
      <span class="{getClassString(inputSuffixClass)} {`${componentName}__clear`}">
        <BrowseOffIcon classes={`${componentName}__suffix-clear`}/>
      </span>
    {:else if !clearable && type === 'password'}
      <span class={getClassString(inputSuffixClass)}>
        <BrowseOffIcon classes={`${componentName}__suffix-clear`}/>
      </span>
    {:else if clearable && type !== 'password'}
      <span class="{getClassString(inputSuffixClass)} {`${componentName}__clear`}">
        <CloseCircleFilledIcon classes={`${componentName}__suffix-clear`}/>
      </span>
    {:else }
    {/if}
    <span class="{getClassString(inputSuffixClass)} {clearable? `${componentName}__clear`:''}">
      <slot name="suffixIcon"></slot>
    </span>
  </div>
</div>