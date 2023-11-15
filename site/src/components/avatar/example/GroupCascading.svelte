<script>
  import { TAvatar, TAvatarGroup } from 'tdesign-svelte';
  import { UserIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.groupCascading;

  const image = 'https://tdesign.gtimg.com/site/avatar.jpg';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--avatar-group-cascading tdesign-demo-item--avatar">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction:column;gap: 40px">
        <div>
          <TAvatarGroup>
            <TAvatar {image} />
            <TAvatar>W</TAvatar>
            <TAvatar>
              <UserIcon slot="icon" />
            </TAvatar>
          </TAvatarGroup>
        </div>
        <div>
          <TAvatarGroup cascading="left-up">
            <TAvatar {image} />
            <TAvatar>W</TAvatar>
            <TAvatar>
              <UserIcon slot="icon" />
            </TAvatar>
          </TAvatarGroup>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
