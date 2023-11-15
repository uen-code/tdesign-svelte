<script>
  import { TCard, TButton, TRow, TCol } from 'tdesign-svelte';
  import { MoreIcon, ThumbUpIcon, ChatIcon, ShareIcon } from 'tdesign-icons-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.bordered;

  const title = '标题';

  const subtitle = '副标题';

  const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-header-subtitle-footer-actions tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TCard {title} {subtitle} {cover} style="width: 400px">
        <TButton slot="actions" variant="text" shape="square">
          <MoreIcon />
        </TButton>
        <TRow slot="footer" align="middle" justify="center" style="gap: 24px">
          <TCol flex="auto" style="display: inline-flex; justify-content: center">
            <TButton variant="text" shape="square">
              <ThumbUpIcon slot="icon" />
            </TButton>
          </TCol>

          <TCol flex="auto" style="display: inline-flex; justify-content: center">
            <TButton variant="text" shape="square">
              <ChatIcon slot="icon" />
            </TButton>
          </TCol>

          <TCol flex="auto" style="display: inline-flex; justify-content: center">
            <TButton variant="text" shape="square">
              <ShareIcon slot="icon" />
            </TButton>
          </TCol>
        </TRow>
      </TCard>
    </div>
  </td-doc-demo>
</div>
