<script>
  import {STATUS, getClassString, usePrefixClass, getStyleString} from "../common.js";

  import './style/css'
  import {getCharacterLength} from "../utils/helper.js";
  import {createEventDispatcher, onMount} from "svelte";
  import calcTextareaHeight from "./calcTextareaHeight.js";
  import isNumber from "../utils/lodash/isNumber.js";
  import Maxlength from "../../site/src/components/textarea/example/Maxlength.svelte";

  const classPrefix = usePrefixClass()
  const COMPONENT_NAME = usePrefixClass('textarea')

  const dispatch = createEventDispatcher();

  let textareaNode;
  onMount(() => {
    adjustTextareaHeight()
  })

  /** 是否禁用文本框 */
  export let disabled = false
  /** 文本框是否只读 */
  export let readonly = false
  /** 文本框状态 */
  export let status = undefined
  /** 提示语 */
  export let placeholder = undefined
  /** 文本框值 */
  export let value = ''
  /** 默认文本框值，非受控属性 */
  export let defaultValue = undefined
  /** 用户最多可以输入的字符个数 */
  export let maxlength = undefined
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 */
  export let maxCharacter = undefined
  /** 高度自动撑开。 autosize = true 表示组件高度自动撑开，同时，依旧允许手动拖高度。如果设置了 autosize.maxRows 或者 autosize.minRows 则不允许手动调整高度 */
  export let autosize = false
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  export let tips = undefined

  // 是否聚焦
  let focused = false
  // 输入法处理
  let isComposing = false
  // style 样式计算
  let textareaStyle = {}
  // 当前输入的总字数
  let characterNumber = 0

  // handle
  function handleFocus() {
    focused = true
  }

  const adjustTextareaHeight = () => {
    if (autosize === true) {
      textareaStyle = calcTextareaHeight(textareaNode);
    } else if (autosize && typeof autosize === 'object') {
      const {minRows, maxRows} = autosize;
      textareaStyle = calcTextareaHeight(textareaNode, minRows, maxRows);
    }
  };

  const inputValueChangeHandle = (e) => {
    maxCharacter = isNumber(maxCharacter) ? maxCharacter : maxCharacter * 1
    if (!Number.isNaN(maxCharacter) && maxCharacter >= 0) {
      const stringInfo = getCharacterLength(value, maxCharacter);
      if (!isComposing && typeof stringInfo === 'object') {
        value = stringInfo.characters
        characterNumber = stringInfo.length
      }
    }
    dispatch('change', value)
    adjustTextareaHeight();
  };

  function handleInput(e) {
    inputValueChangeHandle(e);
  }

  const onCompositionstart = () => {
    isComposing = true;
  };

  const onCompositionend = (e) => {
    isComposing = false;
    inputValueChangeHandle(e);
  };

  // compute
  $: if (autosize && textareaNode) adjustTextareaHeight()
  $: if (defaultValue) value = defaultValue

  // class
  $: textareaClass = {
    [COMPONENT_NAME]: true,
    [STATUS.disabled]: disabled,
    [`${classPrefix}-is-readonly`]: readonly
  }
  $: innerClass = {
    [`${COMPONENT_NAME}__inner`]: true,
    [`${classPrefix}-is-${status}`]: status,
    [STATUS.disabled]: disabled,
    [STATUS.focused]: focused,
    [`narrow-scrollbar`]: true
  }
  $: tipsClass = {
    [`${COMPONENT_NAME}__info_wrapper`]: true,
    [`${COMPONENT_NAME}__info_wrapper_align`]: !tips,
  }
</script>

<div class={getClassString(textareaClass)}>
  <textarea
    bind:this={textareaNode}
    bind:value
    {readonly}
    {disabled}
    {maxlength}
    style={getStyleString(textareaStyle)}
    on:input={handleInput}
    on:compositionstart={onCompositionstart}
    on:compositionend={onCompositionend}
    class={getClassString(innerClass)}
    placeholder={placeholder ? placeholder : '请输入内容'}
    on:focus={handleFocus}
  ></textarea>
  {#if tips || maxlength || maxCharacter}
    <div class="{getClassString(tipsClass)}">
      <!--   tips   -->
      {#if tips}
        <div class="{`${COMPONENT_NAME}__tips`} {`${COMPONENT_NAME}__tips--${status || 'normal'}`}">
          {tips}
        </div>
      {/if}

      <!--  limit content -->
      {#if maxCharacter}
        <span class={`${COMPONENT_NAME}__limit`}>
          {`${characterNumber}/${maxCharacter}`}
        </span>
      {:else if !maxCharacter && maxlength}
        <span class={`${COMPONENT_NAME}__limit`}>
          {`${value ? String(value)?.length : 0}/${maxlength}`}
        </span>
      {/if}
    </div>
  {/if}
</div>

