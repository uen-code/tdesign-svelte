<script>
  import {TCard} from 'tdesign-svelte'

  const infoMessage = `仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。`;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-bordered tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div>
        <TCard style="width: 400px">{infoMessage}</TCard>
      </div>
    </div>
  </td-doc-demo>
</div>