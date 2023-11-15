<script>
  import { getClassString } from '../common.js';
  import useClassName from './useClassName.js';
  import { getContext } from 'svelte';

  const {
    tdEllipsisClass,
    tableBaseClass,
    tableColFixedClasses,
    tableRowFixedClasses,
    tdAlignClasses,
    tableDraggableClasses,
  } = useClassName();

  const { data, columns } = getContext('data');

  /** 样式前缀 */
  export let classPrefix;
  /** 是否悬浮 */
  export let isHover = false;
  /** 是否选中 */
  export let active = false;
  /** 当前列 */
  export let prop = '';

  // class
  $: trClass = {
    [`${classPrefix}-table__row--active`]: active,
    [`${classPrefix}-table__row--hover`]: isHover,
  };
</script>

{#each data as row, index}
  <tr class={getClassString(trClass)}>
    {#each columns as column, index}
      <td>
        {#if $$slots.default && column.colKey === prop}
          <slot {row} />
        {:else}
          {row[column.colKey]}
        {/if}
      </td>
    {/each}
  </tr>
{/each}
