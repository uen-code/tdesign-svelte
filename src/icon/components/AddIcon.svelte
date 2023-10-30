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
    d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4h2z"
  />
</svg>