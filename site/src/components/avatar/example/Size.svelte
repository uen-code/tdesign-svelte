<script>
  import { TAvatar } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.size;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--avatar-size tdesign-demo-item--avatar">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 40px">
        <div style="display: inline-flex;gap: 40px">
          <TAvatar size="small">W</TAvatar>
          <TAvatar size="medium">W</TAvatar>
          <TAvatar size="large">W</TAvatar>
          <TAvatar size="100px">W</TAvatar>
        </div>
        <div style="display: inline-flex;gap: 40px">
          <TAvatar shape="round" size="small">W</TAvatar>
          <TAvatar shape="round" size="medium">W</TAvatar>
          <TAvatar shape="round" size="large">W</TAvatar>
          <TAvatar shape="round" size="100px">W</TAvatar>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
