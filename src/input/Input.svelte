<script>
  import {createEventDispatcher} from "svelte";
  import {SIZE_ENUM} from "../config.js";
  import {SIZE, STATUS, getClassString, usePrefixClass} from "../common.js";
  import {CloseCircleFilledIcon, BrowseOffIcon, BrowseIcon} from "../icon";

  import './style/css'

  const dispatch = createEventDispatcher();

  const COMPONENT_NAME = usePrefixClass('input');
  const COMPONENT_WRAP_NAME = usePrefixClass('input__wrap');
  const COMPONENT_TIPS_NAME = usePrefixClass('input__tips');
  const classPrefix = usePrefixClass();

  /** 文本内容位置，居左/居中/居右 */
  export let align = 'left'
  /** 输入框类型 */
  export let type = 'text'
  /** 输入框的值 */
  export let value = ''
  /** 输入框的默认值, 非受控属性 */
  export let defaultValue = ''
  /** 输入框状态。默认情况会由组件内部根据实际情况呈现，如果文本过长引起的状态变化 */
  export let status = undefined
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  export let tips = undefined
  /** 是否可清空 */
  export let clearable = false
  /** 输入框内容为空时，悬浮状态是否显示清空按钮，默认不显示 */
  export let showClearIconOnEmpty = false
  /** 是否禁用输入框 */
  export let disabled = false
  /** 占位符 */
  export let placeholder = undefined
  /** 只读状态 */
  export let readonly = false
  /** 输入框尺寸 */
  export let size = SIZE_ENUM.medium
  /** 左侧文本 */
  export let label = undefined
  /** 后置图标前的后置内容 */
  export let suffix = undefined
  /** 样式自定义 */
  export let style = ''
  export let className = ''

  /** 是否聚焦 */
  let focused = false
  /** 是否划入 */
  let isHover = false
  /** 是否点击password */
  let renderType = type

  // handle
  /** input 聚焦 */
  function onFocus(e) {
    if (disabled) return;
    dispatch('focus', e)
    focused = true
  }

  /** input 失焦 */
  function onBlur(e) {
    dispatch('blur', e)
    focused = false
  }

  /** keydown 键盘 */
  function onKeydown(e) {
    if (disabled) return;
    const {code} = e;
    if (/enter/i.test(code) || /enter/i.test(e.key)) {
      dispatch('enter', e.target.value)
    } else {
      dispatch('keydown', e.target.value)
    }
  }

  /** 点击 clear icon 处理 */
  function emitClear(e) {
    dispatch('clear', e)
    value = ''
  }

  /** 点击 password icon 处理 */
  function emitPassword(e) {
    renderType = renderType === 'password' ? 'text' : 'password'
  }

  /** 鼠标移入 input 处理 */
  function onInputMouseenter(e) {
    dispatch('mouseenter', e)
    isHover = true
  }

  /** 鼠标移出 input 处理 */
  function onInputMouseleave(e) {
    dispatch('mouseleave', e)
    isHover = false
  }


  // compute
  $: if (defaultValue) value = defaultValue
  $: showClear = ((value && !disabled && clearable && !readonly) || showClearIconOnEmpty) && isHover

  // class
  $: inputClass = {
    [className]: className,
    [COMPONENT_NAME]: true,
    [SIZE[size]]: size !== 'medium',
    [STATUS.disabled]: disabled,
    [`${COMPONENT_NAME}--focused`]: focused,
    [`${classPrefix}-is-${status}`]: status && status !== 'default',
    [`${classPrefix}-align-${align}`]: align !== 'left',
    [`${classPrefix}-is-readonly`]: readonly,
    [`${COMPONENT_NAME}--prefix`]: $$slots.prefixIcon || $$slots.label,
    [`${COMPONENT_NAME}--suffix`]: clearable || type === 'password' || $$slots.suffixIcon || $$slots.suffix,
  }
  $: inputWrapClass = {
    [COMPONENT_WRAP_NAME]: true
  }
  $: inputSuffixClass = {
    [`${COMPONENT_NAME}__suffix`]: true,
    [`${COMPONENT_NAME}__suffix-icon`]: true
  }
  $: inputTipsClass = {
    [COMPONENT_TIPS_NAME]: true,
    [`${classPrefix}-tips`]: true,
    [`${classPrefix}-is-${status || 'default'}`]: true
  }
</script>
<div class={getClassString(inputWrapClass)} {style}>
  <div
    class={getClassString(inputClass)}
    on:mouseenter={onInputMouseenter}
    on:mouseleave={onInputMouseleave}
  >
    <!--  prefix or label content  -->
    {#if $$slots.label || label}
      <div class={`${COMPONENT_NAME}__prefix`}>
        {#if label}
          {label}
        {:else}
          <slot name="label"/>
        {/if}
      </div>
    {/if}

    <!-- prefix icon -->
    {#if $$slots.prefixIcon}
      <span class="{`${COMPONENT_NAME}__prefix`} {`${COMPONENT_NAME}__prefix-icon`}">
        <slot name="prefixIcon"/>
      </span>
    {/if}

    <!--  input  -->
    <input
      class="{`${COMPONENT_NAME}__inner`}"
      value={value}
      type={renderType}
      {disabled}
      placeholder="{placeholder ? placeholder : '请输入'}"
      on:focus={onFocus}
      on:blur={onBlur}
      on:keydown={onKeydown}
    />

    <!--  suffix content  -->
    {#if suffix || $$slots.suffix}
      <div class={`${COMPONENT_NAME}__suffix`}>
        {#if suffix}
          {suffix}
        {:else}
          <slot name="suffix"/>
        {/if}
      </div>
    {/if}

    <!--  password icon  -->
    {#if type === 'password'}
      <span class="{getClassString(inputSuffixClass)} {`${COMPONENT_NAME}__clear`}">
        {#if renderType === 'text'}
          <BrowseIcon className={`${COMPONENT_NAME}__suffix-clear`} on:click={emitPassword}/>
        {:else}
          <BrowseOffIcon className={`${COMPONENT_NAME}__suffix-clear`} on:click={emitPassword}/>
        {/if}
      </span>
    {/if}

    <!--  clearable icon  -->
    {#if showClear}
      <span class="{getClassString(inputSuffixClass)} {`${COMPONENT_NAME}__clear`}">
        <CloseCircleFilledIcon className={`${COMPONENT_NAME}__suffix-clear`} on:click={emitClear}/>
      </span>
    {/if}

    <!-- suffix icon -->
    {#if $$slots.suffixIcon}
      <span class="{getClassString(inputSuffixClass)} {clearable? `${COMPONENT_NAME}__clear`:''}">
        <slot name="suffixIcon"></slot>
      </span>
    {/if}
  </div>

  <!-- tips 提示 -->
  {#if tips}
    <div class={getClassString(inputTipsClass)}>
      {tips}
    </div>
  {/if}
</div>