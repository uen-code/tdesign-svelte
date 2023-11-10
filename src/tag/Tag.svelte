<script>
  import {createEventDispatcher} from "svelte";
  import {usePrefixClass, SIZE, getClassString} from '../common'
  import {CloseIcon} from "../icon/index.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('tag');

  const dispatch = createEventDispatcher()

  /** 标签是否可关闭 */
  export let closable = false
  /** 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 */
  export let disabled = false
  /** 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 */
  export let maxWidth = undefined
  /** 标签类型，有三种：方形、圆角方形、标记型 */
  export let shape = 'square'
  /** 标签尺寸 */
  export let size = 'medium'
  /** 组件风格，用于描述组件不同的应用场景 */
  export let theme = 'default'
  /** 标签风格变体 */
  export let variant = 'dark'

  export let className = ''
  export let style = ''

  // handle
  function handleClose(e){
    dispatch('close', e)
  }

  // style
  $: tagStyle = maxWidth ? isNaN(Number(maxWidth)) ? `max-width:${String(maxWidth)};` : `max-width:${maxWidth}px;` : ''

  // class
  $: tagClass = {
    [className]: className,
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--${theme}`]: true,
    [`${COMPONENT_NAME}--${variant}`]: true,
    [`${COMPONENT_NAME}--ellipsis`]: maxWidth,
    [`${COMPONENT_NAME}--close`]: closable,
    [`${COMPONENT_NAME}--disabled`]: disabled,
    [SIZE[size]]: size !== 'medium',
    [`${COMPONENT_NAME}--${shape}`]: shape !== 'square',
  }
</script>

<span class="{getClassString(tagClass)}" style="{tagStyle}{style}" on:click>
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