<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TImage} from "tdesign-svelte";
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
  <div slot="image" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TImage {...changedProps} src="https://tdesign.gtimg.com/demo/demo-image-1.png" style="{`width:120px; height:120px`}"/>
  </div>
</td-doc-usage>