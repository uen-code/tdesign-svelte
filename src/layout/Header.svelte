<script>
  import {usePrefixClass} from "../common.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('layout__header');

  export let height = '64'

  const styles = {
    height: `${height}px`
  }
</script>

<header class={COMPONENT_NAME} style={styles}>
  <slot></slot>
</header>
