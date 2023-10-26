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
  const items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="tabs" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TTabs value="1">
      {#each items as item,i}
        <TTabPanel value="{i}" label="{`选项卡${i+1}`}">
          <p style="padding: 25px">选项卡{i + 1}</p>
        </TTabPanel>
      {/each}
    </TTabs>
  </div>
</td-doc-usage>