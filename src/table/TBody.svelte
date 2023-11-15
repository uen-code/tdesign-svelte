<script>
  import useClassName from './useClassName.js';

  const { tableFullRowClasses, tableBaseClass } = useClassName();

  /** 接受数据 */
  export let data = [];
</script>

<tbody class={tableBaseClass.body}>
  <slot />
</tbody>
