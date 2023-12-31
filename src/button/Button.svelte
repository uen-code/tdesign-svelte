<script>
  import { usePrefixClass, SIZE, STATUS, getClassString } from '../common';
  import { SIZE_ENUM } from '../config';
  import { onMount } from 'svelte';
  import useRipple from '../hooks/useRipple';
  import TLoading from '../loading/Loading.svelte';

  import './style/css';

  const COMPONENT_NAME = usePrefixClass('button');

  let node;
  onMount(() => {
    useRipple(node);
  });

  /** 主题 */
  export let theme = undefined;
  /** 大小 */
  export let size = SIZE_ENUM.medium;
  export let variant = 'base';
  /** 是否禁用 */
  export let disabled = false;
  /** 是否加载 */
  export let loading = false;
  /** 块级元素 */
  export let block = false;
  /** 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形 */
  export let shape = 'rectangle';
  /** 是否为幽灵按钮 */
  export let ghost = false;

  export let className = '';
  export let style = '';

  $: mergeTheme = theme ? theme : variant === 'base' ? 'primary' : 'default';
  $: iconOnly = $$slots.icon && !$$slots.default;
  $: buttonClass = {
    [className]: className,
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--variant-${variant}`]: true,
    [`${COMPONENT_NAME}--theme-${mergeTheme}`]: true,
    [`${COMPONENT_NAME}--icon-only`]: iconOnly,
    [`${COMPONENT_NAME}--shape-${shape}`]: shape !== 'rectangle',
    [`${COMPONENT_NAME}--ghost`]: ghost,
    [SIZE[size]]: size !== 'medium',
    [STATUS.disabled]: disabled,
    [STATUS.loading]: loading,
    [SIZE.block]: block,
  };
</script>

<button
  bind:this={node}
  on:click
  disabled={disabled || loading}
  class={getClassString(buttonClass)}
  type="button"
  {style}
>
  <!-- loading -->
  {#if loading}
    <TLoading />
  {/if}

  <!-- icon -->
  {#if $$slots.icon}
    <slot name="icon" />
  {/if}

  <!-- content 文字描述 -->
  {#if $$slots.default}
    <span class={`${COMPONENT_NAME}__text`}>
      <slot />
    </span>
  {/if}

  <!-- suffix 按钮右侧内容 -->
  {#if $$slots.suffix}
    <span class={`${COMPONENT_NAME}__suffix`}>
      <slot name="suffix" />
    </span>
  {/if}
</button>
