<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TLoading} from "tdesign-svelte";

  const panelList = configJson.base.panelList
  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="loading" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TLoading />
  </div>
</td-doc-usage>