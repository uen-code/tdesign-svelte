<script>
  import {usePrefixClass} from "../../common.js";

  import './style/index.css'

  const iconClass = usePrefixClass('icon')

  export let classes = ''
</script>

<svg
  class="{iconClass} {classes}"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    fill="currentColor"
    d="M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"/>
</svg>