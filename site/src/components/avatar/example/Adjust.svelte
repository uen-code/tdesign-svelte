<script>
  import { TAvatar } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.adjust;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--avatar-adjust tdesign-demo-item--avatar">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 40px">
        <TAvatar>王</TAvatar>
        <TAvatar>王亿</TAvatar>
        <TAvatar>王亿亿</TAvatar>
      </div>
    </div>
  </td-doc-demo>
</div>
