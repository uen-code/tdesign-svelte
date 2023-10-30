<script>
  import {usePrefixClass} from "../common.js";

  import {getContext} from "svelte";

  const COMPONENT_NAME = usePrefixClass('layout__sider');

  // 获取 layout 状态
  const setHasSide = getContext("setHasSide")

  setHasSide(true)

  export let width = ''
  export let style = ''

  $: style = width ? `width:${width}px; ${style}` : `${style}`
</script>

<aside class={COMPONENT_NAME} style={style}>
  <slot></slot>
</aside>
