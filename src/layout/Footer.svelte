<script>
  import {usePrefixClass} from "../common.js";

  const COMPONENT_NAME = usePrefixClass('layout__footer');

  export let height = ''
  export let style = ''

  $: style = height ? `height:${height}px; ${style}` : `${style}`
</script>

<footer class={COMPONENT_NAME} style={style}>
  <slot></slot>
</footer>