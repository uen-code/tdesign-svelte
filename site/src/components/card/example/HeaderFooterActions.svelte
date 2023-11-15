<script>
  import { TCard, TButton, TAvatar } from 'tdesign-svelte';
  import { MoreIcon, HeartIcon, ChatIcon, ShareIcon } from 'tdesign-icons-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.headerFooterActions;

  const title = '标题';

  const subtitle = '副标题';

  const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-header-subtitle-footer-actions tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TCard {title} {subtitle} {cover} style="width: 400px">
        <TAvatar slot="avatar" image="https://tdesign.gtimg.com/site/avatar-boy.jpg" size="56px" />
        <div slot="footer">
          <TButton style="margin-right: 8px" variant="text" shape="square">
            <HeartIcon slot="icon" />
          </TButton>
          <TButton style="margin-right: 8px" variant="text" shape="square">
            <ChatIcon slot="icon" />
          </TButton>
          <TButton style="margin-right: 8px" variant="text" shape="square">
            <ShareIcon slot="icon" />
          </TButton>
        </div>
        <TButton slot="actions" variant="text" shape="square">
          <MoreIcon />
        </TButton>
      </TCard>
    </div>
  </td-doc-demo>
</div>
