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
    d="M12 23a11 11 0 100-22 11 11 0 000 22zM7.5 10.59l3 3 6-6L17.91 9l-7.41 7.41L6.09 12l1.41-1.41z"/>
</svg>