<script>
  import {usePrefixClass} from "../common.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('layout__footer');

  export let height = '24'

  const styles = {
    height: `${height}px`
  }
</script>

<footer class={COMPONENT_NAME} style={styles}>
  <slot></slot>
</footer>