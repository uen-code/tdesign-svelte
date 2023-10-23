<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TTabs, TTabPanel} from "tdesign-svelte";

  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = configJson.base.panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="tabs" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TTabs value="1">
      <TTabPanel value="1" label="选项卡1">
        <p style="margin: 20px">选项卡1内容区</p>
      </TTabPanel>
      <TTabPanel value="2" label="选项卡2">
        <p style="margin: 20px">选项卡2内容区</p>
      </TTabPanel>
      <TTabPanel value="3" label="选项卡3">
        <p style="margin: 20px">选项卡3内容区</p>
      </TTabPanel>
      <TTabPanel value="4" label="选项卡4">
        <p style="margin: 20px">选项卡3内容区</p>
      </TTabPanel>
    </TTabs>
  </div>
</td-doc-usage>