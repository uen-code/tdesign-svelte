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
    d="M6 4V1.5h2V4h8V1.5h2V4h4v18H2V4h4zM4 6v3h16V6H4zm16 5H4v9h16v-9z"
  />
</svg>