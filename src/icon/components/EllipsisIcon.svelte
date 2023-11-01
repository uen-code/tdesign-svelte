<script>
  import {usePrefixClass} from "../../common.js";

  import '../style/index.css'

  const iconClass = usePrefixClass('icon')

  export let className = ''
</script>

<svg
  class="{iconClass} {className}"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    fill="currentColor"
    d="M3 10.5h3v3H3v-3zm7.5 0h3v3h-3v-3zm7.5 0h3v3h-3v-3z"
  />
</svg>