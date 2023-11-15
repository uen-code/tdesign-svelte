<script>
  import { usePrefixClass } from '../../common.js';

  const classPrefix = usePrefixClass();

  // class
  const name = `${classPrefix}-loading__gradient`;
  const classes = `${name} ${classPrefix}-icon-loading`;
</script>

<svg class={classes} viewBox="0 0 12 12" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
  <foreignObject x="0" y="0" width="12" height="12">
    <div class={`${name}-conic`} />
  </foreignObject>
</svg>
