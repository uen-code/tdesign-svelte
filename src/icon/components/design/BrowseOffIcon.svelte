<script>
  import { getClassString, getStyleString, SIZE, usePrefixClass } from '../../../common.js';

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
  viewBox="0 0 26 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    d="M4 1.59l6.17 6.17 7.07 7.07L23.41 21 22 22.41l-2.97-2.96A12.5 12.5 0 011.08 12.3L1 12l.1-.3c.77-2.4 2.24-4.5 4.18-6.02L2.59 3 4 1.59zM6.7 7.1A10.53 10.53 0 003.1 12a10.5 10.5 0 0014.45 5.97l-1.8-1.8a5 5 0 01-6.93-6.93L6.7 7.11zm3.6 3.6a3 3 0 004 4l-4-4zM13 5c-.58 0-1.14.05-1.7.14l-.98.16L10 3.32l.99-.16A12.5 12.5 0 0124.9 11.7l.1.31-.1.3c-.41 1.3-1.03 2.5-1.82 3.58l-.59.8-1.61-1.18.59-.8c.6-.82 1.08-1.73 1.42-2.7A10.5 10.5 0 0013 5zm.51 1.93l.96.29a5 5 0 013.31 3.31l.3.96-1.92.58-.3-.95a3 3 0 00-1.98-1.99l-.95-.3.58-1.9z"
  />
</svg>
