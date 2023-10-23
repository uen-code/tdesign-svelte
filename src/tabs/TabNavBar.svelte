<script>
  import {firstUpperCase, usePrefixClass} from "../common.js";
  import {TAB_ATTRIBUTE_VALUE} from "./useTabs.js";
  import {getAttribute} from "../utils/domOperations.js";
  import {getContext, onMount} from "svelte";

  const COMPONENT_NAME = usePrefixClass('tabs');
  const classPrefix = usePrefixClass();

  const tabValue = getContext('tabValue')

  /** 标签数组 */
  export let navs = []
  /** 导航所在位置 */
  export let placement = 'top';
  /** 唯一标识 */
  export let value = undefined;

  onMount(() => {
    getStyle();
  })

  let barStyle;
  /** 指示条偏移 */
  function getStyle() {
    const isVertical = ['left', 'right'].includes(placement.toLowerCase());
    const [sizePropName, offsetPropName] = isVertical ? ['height', 'top'] : ['width', 'left'];
    let offset = 0;
    let i = 0;
    for (; i < navs.length; i++) {
      if (getAttribute(navs[i], TAB_ATTRIBUTE_VALUE) === value) {
        break;
      }
      offset += navs[i]?.[`client${firstUpperCase(sizePropName)}`] || 0;
    }
    if (!navs[i]) barStyle = '';
    barStyle = `${offsetPropName}: ${offset}px; ${sizePropName}:${navs[i]?.[`client${firstUpperCase(sizePropName)}`] || 0}px`
  }

  // sub tabValue
  tabValue.subscribe((val) => {
    if (val) value = val
    getStyle()
  })

  // class
  $: navBarClass = `${COMPONENT_NAME}__bar ${classPrefix}-is-${placement}`
</script>

<div class={navBarClass} style={barStyle}></div>
