<script>
  import { usePrefixClass } from '../common.js';

  const COMPONENT_NAME = usePrefixClass('layout__header');

  export let height = '';
  export let style = '';

  $: style = height ? `height: ${height}px; ${style}` : `${style}`;
</script>

<header class={COMPONENT_NAME} {style}>
  <slot />
</header>
