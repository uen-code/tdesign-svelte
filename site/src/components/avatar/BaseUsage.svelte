<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TAvatar} from "tdesign-svelte";

  const panelList = configJson.base.panelList
  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="avatar" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TAvatar image="https://tdesign.gtimg.com/site/avatar.jpg"/>
  </div>
</td-doc-usage>