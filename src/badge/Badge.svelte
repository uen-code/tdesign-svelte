<script>
  import { getClassString, getStyleString, SIZE, usePrefixClass } from '../common.js';

  import './style/css';

  const COMPONENT_NAME = usePrefixClass('badge');

  /** 颜色 */
  export let color = '';
  /** 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+ */
  export let count = 0;
  /** 是否为红点 */
  export let dot = false;
  /** 封顶的数字值 */
  export let maxCount = 99;
  /** 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem'] */
  export let offset = [];
  /** 形状 */
  export let shape = 'circle';
  /** 当数值为 0 时，是否展示徽标 */
  export let showZero = false;
  /** 尺寸 */
  export let size = 'medium';

  // handle
  const getOffset = () => {
    if (!offset) return {};
    let [xOffset, yOffset] = offset;
    xOffset = Number.isNaN(Number(xOffset)) ? xOffset : `${xOffset}px`;
    yOffset = Number.isNaN(Number(yOffset)) ? yOffset : `${yOffset}px`;
    return { xOffset, yOffset };
  };

  // compute
  $: displayCount = Number.isNaN(Number(count)) ? count : Number(count) > maxCount ? `${maxCount}+` : Number(count);
  $: isHidden = showZero && (displayCount === 0 || displayCount === '0');
  $: inlineStyle = {
    right: getOffset().xOffset,
    top: getOffset().yOffset,
    background: color,
  };

  // class
  $: badgeClass = {
    [`${COMPONENT_NAME}--dot`]: !!dot,
    [`${COMPONENT_NAME}--circle`]: !dot && shape === 'circle',
    [`${COMPONENT_NAME}--round`]: !dot && shape === 'round',
    [SIZE[size]]: size === 'small',
  };
</script>

<div class={COMPONENT_NAME}>
  <slot />
  {#if !isHidden}
    <sup class={getClassString(badgeClass)} style={getStyleString(inlineStyle)}>
      {#if !dot}
        {displayCount}
      {/if}
    </sup>
  {/if}
</div>
