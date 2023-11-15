<script>
  import { onMount } from 'svelte';
  import { overviewList } from './config.js';

  import Overview from './overview.md';
  // header
  const headerInfo = {
    title: '组件概览',
    desc: '将根据业务实践持续新增组件类型，敬请留意组件库更新日志。',
  };
  let headerNode;
  onMount(() => {
    headerNode.docInfo = headerInfo;
  });
</script>

<svelte:head>
  <title>组件概述 | TDesign</title>
</svelte:head>
<td-doc-content>
  <td-doc-header spline="explain" slot="doc-header" bind:this={headerNode}> </td-doc-header>
  <div name="DOC">
    <Overview />
  </div>

  <td-doc-footer slot="doc-footer"></td-doc-footer>
</td-doc-content>
