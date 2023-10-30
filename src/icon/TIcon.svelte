<script>
  import {components} from "./index.js";

  /** icon name */
  export let name = ''
  /** icon class */
  export let className = ''
</script>

<svelte:component this={components[name]} className={className}/>