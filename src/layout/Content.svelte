<script>
  import {usePrefixClass} from "../common.js";

  const COMPONENT_NAME = usePrefixClass('layout__content')
</script>

<main class={COMPONENT_NAME}>
  <slot></slot>
</main>
