<script>
  import {firstUpperCase, usePrefixClass} from "../common.js";
  import {tabValue} from "../store.js";

  const componentName = usePrefixClass('tabs');

  /** 标签数组 */
  export let navs = []
  /** 导航所在位置 */
  export let placement = 'top';
  /** 唯一标识 */
  export let value = undefined;

  /** 指示条偏移 */
  function getStyle() {
    const isVertical = ['left', 'right'].includes(placement.toLowerCase());
    const [sizePropName, offsetPropName] = isVertical ? ['height', 'top'] : ['width', 'left'];
    let offset = 0;
    let i = 0;
    for (; i < navs.length; i++) {
      if (navs[i].props.value === value) {
        break;
      }
      offset += navs[i]?.[`client${firstUpperCase(sizePropName)}`] || 0;
    }
    if (!navs[i]) return {};
    return {
      [offsetPropName]: `${offset}px`,
      [sizePropName]: `${navs[i]?.[`client${firstUpperCase(sizePropName)}`] || 0}px`,
    };
  }

  let navBarClass;
  let navBarStyle;
  $: {
    navBarClass = `${componentName}__bar ${componentName}-is-${placement}`
  }
  tabValue.subscribe(()=>{
    navBarStyle = getStyle()
  })
  navBarStyle = getStyle()
</script>

<div class={navBarClass} style={navBarStyle}></div>
