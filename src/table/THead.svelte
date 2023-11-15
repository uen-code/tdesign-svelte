<script>
  import useClassName from './useClassName.js';
  import { getClassString } from '../common.js';

  const { tableHeaderClasses, tableBaseClass } = useClassName();

  /** th数据列表 */
  export let thList = [];

  // class
  $: theadClass = {
    [tableHeaderClasses.header]: true,
  };
</script>

<thead class={getClassString(theadClass)}>
  <tr>
    {#each thList as row, index}
      <th>
        {row.title}
      </th>
    {/each}
  </tr>
</thead>
