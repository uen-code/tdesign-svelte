<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TTabs, TTabPanel} from "tdesign-svelte";
  import {codeReplace} from "../../common.js";
  import propJson from "./config/props.json";

  const baseCode = configJson.base.code

  // 初始化dom
  let usageNode;
  onMount(() => {
    usageNode.configList = propJson
    usageNode.panelList = configJson.base.panelList;
    usageNode.addEventListener('ConfigChange', onConfigChange);
  })

  let changedProps = {}
  let usageCode = codeReplace(baseCode,changedProps)
  function onConfigChange(e) {
    const { name, value } = e.detail;
    changedProps[name] = value
    usageCode = codeReplace(baseCode,changedProps)
  }
</script>

<td-doc-usage bind:this={usageNode} code={usageCode}>
  <div slot="tabs" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TTabs {...changedProps} value="1">
      <TTabPanel value="1" label="选项卡1">
        <p style="padding: 25px">选项卡1</p>
      </TTabPanel>
      <TTabPanel value="2" label="选项卡2">
        <p style="padding: 25px">选项卡2</p>
      </TTabPanel>
      <TTabPanel value="3" label="选项卡3">
        <p style="padding: 25px">选项卡1</p>
      </TTabPanel>
    </TTabs>
  </div>
</td-doc-usage>