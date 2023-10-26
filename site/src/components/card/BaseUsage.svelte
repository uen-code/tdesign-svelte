<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TCard} from "tdesign-svelte";
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
  <div slot="card" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TCard {...changedProps}>
      仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
    </TCard>
  </div>
</td-doc-usage>