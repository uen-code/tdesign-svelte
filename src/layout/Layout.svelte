<script>
  import {getClassString, usePrefixClass} from "../common.js";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('layout')

  const layoutClass = {
    [COMPONENT_NAME]: true,
  }
</script>

<section class={getClassString(layoutClass)}>
  <slot></slot>
</section>