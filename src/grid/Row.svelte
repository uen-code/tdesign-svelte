<script>
  import { setContext } from 'svelte';
  import { getClassString, getStyleString, usePrefixClass } from '../common.js';
  import { calcRowStyle } from './useGrid.js';
  import { useListener } from '../hooks/useListener.js';
  import { calcSize } from '../utils/responsive.js';

  import './style/css';

  const COMPONENT_NAME = usePrefixClass('row');

  /** 纵向对齐方式，CSS 属性 `align-items` 值。其中 `top` 和 `start` 等效；`middle` 和 `center` 等效；`bottom` 和 `end` 等效 */
  export let align = 'top';
  /** 栅格间隔，示例：`{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`。当数据类型为 Number 和 Object 时，用于指定横向间隔。当数据类型为数组时，第一个参数为横向间隔，第二个参数为纵向间隔， [水平间隔, 垂直间隔] */
  export let gutter = 0;
  /** flex 布局下的水平排列方式 */
  export let justify = 'start';

  export let className = '';
  export let style = '';

  setContext('rowGutter', gutter);

  let size = calcSize(window.innerWidth);

  // handle
  const updateSize = () => {
    size = calcSize(window.innerWidth);
  };

  useListener('resize', updateSize);

  // style
  $: rowStyle = getStyleString(calcRowStyle(gutter, size));

  // class
  $: rowClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--${justify}`]: justify,
    // 区分 justify 传值
    [`${COMPONENT_NAME}--align-${align}`]: align,
  };
</script>

<div class={getClassString(rowClass)} style="{rowStyle}{style}">
  <slot />
</div>
