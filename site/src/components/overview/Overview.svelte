<svelte:head>
  <title>组件概述 | TDesign</title>
</svelte:head>

<script>
  import {onMount} from "svelte";
  import {overviewList} from "./config.js";

  // header
  const headerInfo = {
    'title': '组件概览',
    'desc': '将根据业务实践持续新增组件类型，敬请留意组件库更新日志。'
  }
  let headerNode;
  onMount(() => {
    headerNode.docInfo = headerInfo
  })
</script>
<td-doc-content>
  <td-doc-header slot="doc-header" bind:this={headerNode}>
  </td-doc-header>
  <div name="DOC">
    {#each overviewList as overview,i}
      <h3>{overview.title}<em class="tag">{overview.num}</em></h3>
      <section class="image-group">
        {#each overview.child as overviewChild,i}
          <div class="image-wrapper">
            <a class="item" href={overviewChild.href}>
              <img class="__light__" src={overviewChild.lightSrc} alt="">
              <img class="__dark__" src={overviewChild.darkSrc} alt="">
              <p class="name">{overviewChild.name}</p>
            </a>
          </div>
        {/each}
      </section>
    {/each}
  </div>

  <td-doc-footer slot="doc-footer"></td-doc-footer>
</td-doc-content>