<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TRadio} from "tdesign-svelte";

  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = configJson.base.panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="radio" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TRadio>单选框</TRadio>
  </div>
</td-doc-usage>