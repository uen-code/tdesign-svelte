<script>
  import { TAvatar } from 'tdesign-svelte';
  import { UserIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;

  const image = 'https://tdesign.gtimg.com/site/avatar.jpg';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--avatar-base tdesign-demo-item--avatar">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 40px">
        <TAvatar>
          <UserIcon slot="icon" />
        </TAvatar>
        <TAvatar {image} />
        <TAvatar>W</TAvatar>
      </div>
    </div>
  </td-doc-demo>
</div>
