<script>
  import { onMount } from 'svelte';

  import GettingStarted from './getting-started.md';

  // header
  const headerInfo = {
    title: 'Svelte for Web',
    desc: 'TDesign 适配桌面端的组件库，适合在 Svelte4.x 技术栈项目中使用。',
  };
  let headerNode;
  onMount(() => {
    headerNode.docInfo = headerInfo;
  });
  // demo
</script>

<svelte:head>
  <title>Svelte fro Web | TDesign</title>
</svelte:head>

<td-doc-content>
  <td-doc-header slot="doc-header" bind:this={headerNode}> </td-doc-header>

  <div name="DOC">
    <GettingStarted />
  </div>
  <td-doc-footer slot="doc-footer"></td-doc-footer>
</td-doc-content>
