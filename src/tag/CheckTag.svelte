<script>
  import {createEventDispatcher} from "svelte";
  import {usePrefixClass, SIZE, getClassString} from '../common'
  import {CloseIcon} from "../icon/index.js";

  const COMPONENT_NAME = usePrefixClass('tag');

  const dispatch = createEventDispatcher()

  /** 透传标签选中态属性 */
  export let checkedProps = undefined
  /** 透传标签未选态属性 */
  export let uncheckedProps = undefined
  /** 是否只读，标签有效但不触发事件 */
  export let readonly = false
  /** 标签选中的状态 */
  export let checked = false
  /** 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 */
  export let disabled = false
  /** 标签尺寸 */
  export let size = 'medium'
  /** 组件风格，用于描述组件不同的应用场景 */
  export let theme = 'default'
  /** 标签风格变体 */
  export let variant = 'dark'
  /** 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 */
  export let maxWidth = undefined
  /** 标签是否可关闭 */
  export let closable = false

  export let className = ''
  export let style = ''

  // handle
  const handleClick = (e) => {
    if (disabled || readonly) return;
    checked = !checked;
    dispatch('click', checked)
    dispatch('change',checked)
  };

  function handleClose(e) {
    dispatch('close', e)
  }

  // compute
  $: computeTheme = checked ? checkedProps?.theme || 'primary' : uncheckedProps?.theme || theme
  $: computeVariant = checked ? checkedProps?.variant || variant : uncheckedProps?.variant || variant

  // class
  $: checkTagClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--check`]: true,
    [SIZE[size]]: true,
    [`${COMPONENT_NAME}--checked`]: !disabled && checked,
    [`${COMPONENT_NAME}--disabled`]: disabled,
    [`${COMPONENT_NAME}--${computeTheme}`]: true,
    [`${COMPONENT_NAME}--${computeVariant}`]: true,
    [`${COMPONENT_NAME}--ellipsis`]: maxWidth,
    [`${COMPONENT_NAME}--close`]: closable,
  }
</script>

<span class="{getClassString(checkTagClass)} {className}" style="{style}" on:click={handleClick}>
  <!--  icon  -->
  {#if $$slots.icon}
    <slot name="icon"/>
  {/if}

  <!-- content -->
  {#if maxWidth}
    <span class={`${COMPONENT_NAME}--text`}>
      <slot/>
    </span>
  {:else}
    <slot/>
  {/if}

  <!-- close -->
  {#if !disabled && closable}
    <CloseIcon className="{`${COMPONENT_NAME}__icon-close`}" on:click={handleClose}/>
  {/if}
</span>