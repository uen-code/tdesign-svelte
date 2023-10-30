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
    d="M15.91 17.5l-5.5-5.5 5.5-5.5-1.41-1.41L7.59 12l6.91 6.91 1.41-1.41z"/>
</svg>