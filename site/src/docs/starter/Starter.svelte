<svelte:head>
  <title>Svelte fro Web | TDesign</title>
</svelte:head>

<script>
  import {onMount} from "svelte";
  import {demoList} from "./config.js";
  import {TLink} from "tdesign-svelte"

  // header
  const headerInfo = {
    'title': 'Svelte for Web',
    'desc': 'TDesign 适配桌面端的组件库，适合在 Svelte4.x 技术栈项目中使用。'
  }
  let headerNode;
  onMount(() => {
    headerNode.docInfo = headerInfo
  })
  // demo

</script>

<td-doc-content>
  <td-doc-header slot="doc-header" bind:this={headerNode}>
  </td-doc-header>
  <div name="DOC">
    <!--  描点  -->
    <nav class="tdesign-toc_container">
      <ol class="tdesign-toc_list">
        {#each demoList as demo,i}
          <li class="tdesign-toc_list_item">
            <a href={demo.href} class="tdesign-toc_list_item_a">{demo.title}</a>
            {#if demo.child && demo.child.length > 0}
              <ol class="tdesign-toc_list">
                {#each demo.child as demoChild,i}
                  <li class="tdesign-toc_list_item">
                    <a href={demoChild.href} class="tdesign-toc_list_item_a">{demoChild.title}</a>
                  </li>
                {/each}
              </ol>
            {/if}
          </li>
        {/each}
      </ol>
    </nav>

    <!--  demo  -->
    {#each demoList as demo,i}
      <h2 id={demo.id}>
        {demo.title}
        <a class="header-anchor" href={demo.href}></a>
      </h2>
      {#if demo.desc}<p>{demo.desc}</p>{/if}
      {#if demo.child && demo.child.length > 0}
        {#each demo.child as demoChild,i}
          <h3 id={demoChild.id}>
            {demoChild.title}
            <a class="header-anchor" href={demoChild.href}></a>
          </h3>
          {#if demoChild.desc && demoChild.desc.length > 0}
            {#each demoChild.desc as desc,i}
              <p>{desc}</p>
            {/each}
          {/if}
          {#if demoChild.url}
            <TLink theme="primary" href="https://github.com/hzx000822/tdesign-svelte">查看</TLink>
          {/if}
          {#if demoChild.code}
            <div class={`language-${demoChild.language}`}>
              <pre class={`language-${demoChild.language}`}><code>{@html demoChild.code}</code></pre>
            </div>
          {/if}

        {/each}
      {/if}
    {/each}
    <table>
      <thead>
      <tr>
        <th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img
          src="https://tdesign.gtimg.com/docs/edge_48x48.png" alt="IE / Edge" width="24px" height="24px"></a><br> IE /
          Edge
        </th>
        <th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img
          src="https://tdesign.gtimg.com/docs/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a><br>Firefox
        </th>
        <th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img
          src="https://tdesign.gtimg.com/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a><br>Chrome
        </th>
        <th><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img
          src="https://tdesign.gtimg.com/docs/safari_48x48.png" alt="Safari" width="24px" height="24px"></a><br>Safari
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Edge &gt;=84</td>
        <td>Firefox &gt;=83</td>
        <td>Chrome &gt;=84</td>
        <td>Safari &gt;=14.1</td>
      </tr>
      </tbody>
    </table>
  </div>

  <td-doc-footer slot="doc-footer"></td-doc-footer>
</td-doc-content>