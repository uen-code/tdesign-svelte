<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TImage} from "tdesign-svelte";

  const panelList = configJson.base.panelList
  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="image" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TImage src="https://tdesign.gtimg.com/demo/demo-image-1.png" style="{`width:120px; height:120px`}"/>
  </div>
</td-doc-usage>