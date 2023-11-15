<script>
  import { TAvatar } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.shape;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--avatar-size tdesign-demo-item--avatar">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 40px">
        <TAvatar>W</TAvatar>
        <TAvatar shape="round">W</TAvatar>
      </div>
    </div>
  </td-doc-demo>
</div>
