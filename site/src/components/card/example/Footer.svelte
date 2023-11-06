<script>
  import {TCard, TRow, TCol, TButton} from 'tdesign-svelte'
  import {ThumbUpIcon,ChatIcon,ShareIcon} from 'tdesign-svelte-icon'

  const title = '标题';
  const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-footer tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div>
        <TCard {cover} bordered style="width:400px ">
          <TRow slot="footer" align="middle" justify="center" style="gap: 24px">
            <TCol flex="auto" style="display: inline-flex; justify-content: center">
              <TButton variant="text" shape="square">
                <ThumbUpIcon slot="icon"/>
              </TButton>
            </TCol>

            <TCol flex="auto" style="display: inline-flex; justify-content: center">
              <TButton variant="text" shape="square">
                <ChatIcon slot="icon"/>
              </TButton>
            </TCol>

            <TCol flex="auto" style="display: inline-flex; justify-content: center">
              <TButton variant="text" shape="square">
                <ShareIcon slot="icon"/>
              </TButton>
            </TCol>
          </TRow>
        </TCard>
      </div>
    </div>
  </td-doc-demo>
</div>