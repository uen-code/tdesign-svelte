<script>
  import configJson from '../config/config.json';
  import propJson from '../config/props.json';
  import { onMount } from 'svelte';
  import { TDivider } from 'tdesign-svelte';
  import { codeReplace } from '../../../common.js';

  const baseCode = configJson.base.code;
  // 初始化dom
  let usageNode;
  onMount(() => {
    usageNode.configList = propJson;
    usageNode.panelList = configJson.base.panelList;
    usageNode.addEventListener('ConfigChange', onConfigChange);
  });

  let changedProps = {};
  let usageCode = codeReplace(baseCode, changedProps);

  function onConfigChange(e) {
    const { name, value } = e.detail;
    changedProps[name] = value;
    usageCode = codeReplace(baseCode, changedProps);
  }
</script>

<td-doc-usage bind:this={usageNode} code={usageCode}>
  <div slot="divider" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <div style="width: 200px">
      <span>正直</span>
      <TDivider {...changedProps}>TDesign</TDivider>
      <span>进取</span>
      <TDivider {...changedProps}>TDesign</TDivider>
      <span>合作</span>
      <TDivider {...changedProps}>TDesign</TDivider>
      <span>创新</span>
    </div>
  </div>
</td-doc-usage>
