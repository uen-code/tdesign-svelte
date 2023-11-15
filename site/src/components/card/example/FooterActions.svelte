<script>
  import { TCard, TRow, TCol, TButton, TAvatar, TAvatarGroup } from 'tdesign-svelte';
  import { ThumbUpIcon, ChatIcon, ShareIcon, MoreIcon, HeartIcon } from 'tdesign-icons-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.footerActions;

  const title = '标题';
  const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';
  const image = 'https://tdesign.gtimg.com/site/avatar-boy.jpg';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-footer-actions tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TCard {cover} bordered style="width:400px ">
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
        <TCard {cover} bordered theme="footer" style="width:400px ">
          <TRow slot="footer" style="gap: 24px">
            <TCol style="display: inline-flex; justify-content: center">
              <TButton style="margin-right: 8px" variant="text" shape="square">
                <HeartIcon slot="icon" />
              </TButton>
            </TCol>

            <TCol style="display: inline-flex; justify-content: center">
              <TButton style="margin-right: 8px" variant="text" shape="square">
                <ChatIcon slot="icon" />
              </TButton>
            </TCol>

            <TCol style="display: inline-flex; justify-content: center">
              <TButton style="margin-right: 8px" variant="text" shape="square">
                <ShareIcon slot="icon" />
              </TButton>
            </TCol>
          </TRow>
          <TButton slot="actions" variant="text" shape="square">
            <MoreIcon />
          </TButton>
        </TCard>
        <TCard {cover} bordered theme="footer" style="width:400px ">
          <TAvatarGroup slot="footer">
            <TAvatar {image} />
            <TAvatar>Q</TAvatar>
            <TAvatar>C</TAvatar>
          </TAvatarGroup>
          <TButton slot="actions" variant="text" shape="square">
            <MoreIcon />
          </TButton>
        </TCard>
      </div>
    </div>
  </td-doc-demo>
</div>
