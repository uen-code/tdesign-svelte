<script>
  import { getClassString, getStyleString, SIZE, usePrefixClass } from '../../../common';

  import '../../style/index.css';

  const COMPONENT_NAME = usePrefixClass('icon');

  export let size = undefined;
  export let color = undefined;

  $: initStyle = {
    style: $$props.style,
    fontSize: size ? (Number.isNaN(Number(size)) && !(size in SIZE) ? size : `${size}px`) : '',
    color: color,
  };
  $: iconClass = {
    [$$props.class]: $$props.class,
    [COMPONENT_NAME]: true,
    [SIZE[size]]: size in SIZE,
  };
</script>

<svg
  class={getClassString(iconClass)}
  style={getStyleString(initStyle)}
  on:click
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    d="M7.5 4H16v2H9.5v4H12a5 5 0 014.9 4h.1v1a5 5 0 01-5 5h-.5a5 5 0 01-5-5h2a3 3 0 003 3h.5a3 3 0 100-6H7.5V4z"
  />
</svg>
