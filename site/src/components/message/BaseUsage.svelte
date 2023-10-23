<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TMessage} from "tdesign-svelte";

  const panelList = configJson.base.panelList
  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="message" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TMessage closeBtn>这里是Message消息</TMessage>
  </div>
</td-doc-usage>