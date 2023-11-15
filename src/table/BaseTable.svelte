<script>
  import useClassName from './useClassName.js';
  import { getClassString, SIZE } from '../common.js';
  import THead from './THead.svelte';
  import TBody from './TBody.svelte';
  import { setContext } from 'svelte';
  import TableColumn from './TableColumn.svelte';

  import './style/css';

  const { tableBaseClass, tableAlignClasses, tableLayoutClasses } = useClassName();

  /** 列配置，泛型 T 指表格数据类型 */
  export let columns = [];
  /** 数据源，泛型 T 指表格数据类型 */
  export let data = [];
  /** 表格布局方式，`<table>` 元素原生属性。[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)。注意，在列宽调整下场景只能使用 `fixed` 模式 */
  export let tableLayout = 'fixed';
  /** 是否显示表格边框 */
  export let bordered = false;
  /** 是否显示鼠标悬浮状态 */
  export let hover = false;
  /** 表格尺寸 */
  export let size = 'medium';
  /** 是否显示斑马纹 */
  export let stripe = false;
  /** 行内容上下方向对齐 */
  export let verticalAlign = 'middle';
  /** 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态 */
  export let loading = false;

  setContext('data', { data, columns });

  // class
  $: baseTableClass = {
    [tableBaseClass.table]: true,
    [SIZE[size]]: size !== 'medium',
    [tableBaseClass.bordered]: bordered,
    [tableBaseClass.striped]: stripe,
    [tableBaseClass.hover]: hover,
    [tableBaseClass.loading]: loading,
  };

  $: tableNodeClass = {
    [tableLayoutClasses[tableLayout]]: true,
  };
</script>

<div class={getClassString(baseTableClass)}>
  <!-- table -->
  <div class={tableBaseClass.content}>
    <table class={getClassString(tableNodeClass)}>
      <!-- header -->
      <THead thList={columns} />

      <!-- body -->
      <TBody>
        {#if $$slots.default}
          <slot />
        {:else}
          <TableColumn />
        {/if}
      </TBody>
    </table>
  </div>
</div>
