<script>
  import {usePrefixClass} from "../common.js";

  import './style/index.css'

  const COMPONENT_NAME = usePrefixClass('layout__sider');

  export let width = '232'

  const styles = {
    width: `${width}px`
  }
</script>

<aside class={COMPONENT_NAME} style={styles}>
  <slot></slot>
</aside>
