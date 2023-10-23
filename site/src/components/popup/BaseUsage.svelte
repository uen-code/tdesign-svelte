<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TPopup,TButton} from "tdesign-svelte";

  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = configJson.base.panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="popup" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TPopup content="这是一个弹出框" showArrow trigger="click" placement="top">
      <TButton variant="outline">触发</TButton>
    </TPopup>
  </div>
</td-doc-usage>