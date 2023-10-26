<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TAvatar} from "tdesign-svelte";
  import propJson from "./config/props.json";
  import {codeReplace} from "../../common.js";

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
  <div slot="avatar" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TAvatar {...changedProps} image="https://tdesign.gtimg.com/site/avatar.jpg"/>
  </div>
</td-doc-usage>