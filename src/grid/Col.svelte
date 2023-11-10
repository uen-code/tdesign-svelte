<script>

  import {getClassString, getStyleString, usePrefixClass} from "../common.js";
  import {getContext} from "svelte";
  import {calcColPadding, parseFlex} from "./useGrid.js";
  import {isNumber, isObject, isString, isUndefined, isNil, toNumber} from "../utils/lodash/index.js";
  import {calcSize} from "../utils/responsive.js";
  import {useListener} from "../hooks/useListener.js";

  const COMPONENT_NAME = usePrefixClass('col');

  const rowGutter = getContext('rowGutter')

  /** flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px' */
  export let flex = undefined
  /** ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象（小尺寸电脑） */
  export let lg = undefined
  /** ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象（超小尺寸电脑） */
  export let md = undefined
  /** ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象（平板） */
  export let sm = undefined
  /** ≥1400px 响应式栅格，可为栅格数或一个包含其他属性的对象（中尺寸电脑） */
  export let xl = undefined
  /** <768px 响应式栅格，可为栅格数或一个包含其他属性的对象（手机） */
  export let xs = undefined
  /** ≥1880px 响应式栅格，可为栅格数或一个包含其他属性的对象（大尺寸电脑） */
  export let xxl = undefined
  /** 栅格左侧的间隔格数，间隔内不可以有栅格 */
  export let offset = undefined
  /** 栅格顺序，flex 布局模式下有效 */
  export let order = 0
  /** 栅格向左移动格数 */
  export let pull = 0
  /** 栅格向右移动格数 */
  export let push = 0
  /** 栅格占位格数，为 0 时相当于 display: none */
  export let span = 0

  export let className = ''
  export let style = ''

  let size = calcSize(window.innerWidth);

  const allSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const sizeProps = {xs: xs, sm: sm, md: md, lg: lg, xl: xl, xxl: xxl}

  // handle

  const updateSize = () => {
    size = calcSize(window.innerWidth);
  };

  useListener('resize', updateSize);

  // style
  $: colStyle = rowGutter && flex
    ? Object.assign({flex: parseFlex(flex)}, calcColPadding(rowGutter, size))
    : flex ? {flex: parseFlex(flex)} : rowGutter ? calcColPadding(rowGutter, size) : {}

  // class
  $: colClass = {
    [className]: className,
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_NAME}-${span}`]: !isUndefined(span) && span,
    [`${COMPONENT_NAME}-order-${order}`]: order && order,
    [`${COMPONENT_NAME}-offset-${offset}`]: offset && offset,
    [`${COMPONENT_NAME}-push-${push}`]: push && push,
    [`${COMPONENT_NAME}-pull-${pull}`]: pull && push,
  }

  $: colSizeClass = allSizes.reduce((acc, currSize) => {
    const sizeProp = sizeProps[currSize]
    let sizeObject = {};
    if (isNumber(sizeProp)) {
      sizeObject.span = sizeProp;
    } else if (isString(sizeProp) && !isNil(sizeProp * 1)) {
      sizeObject.span = toNumber(sizeProp)
    } else if (isObject(sizeProp)) {
      sizeObject = sizeProp || {};
    }
    return {
      ...acc,
      [`${COMPONENT_NAME}-${currSize}-${sizeObject.span}`]: !isUndefined(sizeObject.span),
      [`${COMPONENT_NAME}-${currSize}-order-${sizeObject.order}`]: parseInt(sizeObject.order, 10) >= 0,
      [`${COMPONENT_NAME}-${currSize}-offset-${sizeObject.offset}`]: parseInt(sizeObject.offset, 10) >= 0,
      [`${COMPONENT_NAME}-${currSize}-push-${sizeObject.push}`]: parseInt(sizeObject.push, 10) >= 0,
      [`${COMPONENT_NAME}-${currSize}-pull-${sizeObject.pull}`]: parseInt(sizeObject.pull, 10) >= 0,
    };
  }, {});
</script>
<div class="{getClassString(colClass)} {getClassString(colSizeClass)}"
     style="{getStyleString(colStyle)};{style}">
  <slot/>
</div>