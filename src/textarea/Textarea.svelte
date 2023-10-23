<script>
  import {STATUS, getClassString, usePrefixClass} from "../common.js";

  import './style/css'

  const classPrefix = usePrefixClass()
  const COMPONENT_NAME = usePrefixClass('textarea')

  /** 是否禁用文本框 */
  export let disabled = false
  /** 文本框是否只读 */
  export let readonly = false
  /** 文本框状态 */
  export let status = undefined
  /** 提示语 */
  export let placeholder = undefined
  /** 文本框值 */
  export let value = undefined

  // 是否聚焦
  let focused = false

  // handle
  function handleFocus(){
    focused = true
  }

  // class
  $: textareaClasses = {
    [COMPONENT_NAME]: true,
    [STATUS.disabled]: disabled,
    [`${classPrefix}-is-readonly`]: readonly
  }
  $: innerClasses = {
    [`${COMPONENT_NAME}__inner`]: true,
    [`${classPrefix}-is-${status}`]: status,
    [STATUS.disabled]: disabled,
    [STATUS.focused]: focused,
    [`narrow-scrollbar`]: true
  }
</script>

<div class={getClassString(textareaClasses)}>
  <textarea
    class={getClassString(innerClasses)}
    placeholder={placeholder ? placeholder : '请输入内容'}
    on:focus={handleFocus}
  ></textarea>
</div>

