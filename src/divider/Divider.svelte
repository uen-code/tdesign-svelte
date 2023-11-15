<script>
  import { getClassString, usePrefixClass } from '../common.js';

  import './style/css';

  const COMPONENT_NAME = usePrefixClass('divider');

  /** 文本位置（仅在水平分割线有效） */
  export let align = 'center';
  /** 是否虚线（仅在水平分割线有效） */
  export let dashed = false;
  /** 分隔线类型有两种：水平和垂直 */
  export let layout = 'horizontal';

  export let className = '';
  export let style = '';

  // class
  $: dividerClass = {
    [className]: className,
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_NAME}--${layout}`]: true,
    [`${COMPONENT_NAME}--dashed`]: dashed,
    [`${COMPONENT_NAME}--with-text`]: $$slots.default,
    [`${COMPONENT_NAME}--with-text-${align}`]: $$slots.default,
  };
</script>

<div class={getClassString(dividerClass)} {style}>
  {#if $$slots.default}
    <span class={`${COMPONENT_NAME}__inner-text`}>
      <slot />
    </span>
  {/if}
</div>
