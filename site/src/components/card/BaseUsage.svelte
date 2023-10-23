<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TCard} from "tdesign-svelte";

  const code = configJson.base.code

  // 初始化dom
  let dom;
  onMount(() => {
    dom.panelList = configJson.base.panelList;
  })
</script>

<td-doc-usage bind:this={dom} :code={code}>
  <div slot="card" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TCard>
      仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
    </TCard>
  </div>
</td-doc-usage>