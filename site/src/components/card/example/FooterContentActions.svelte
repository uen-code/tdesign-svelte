<script>
    import {TCard,TComment,TButton} from 'tdesign-svelte'
    import {MoreIcon} from 'tdesign-svelte-icon'
    const cover = 'https://tdesign.gtimg.com/site/source/card-demo.png';

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-footer-content-actions tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <TCard {cover} theme="footer" style="width: 400px">
        <TComment slot="footer" avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="标题" content="卡片内容" ></TComment>
        <TButton slot="actions" variant="text" shape="square">
          <MoreIcon />
        </TButton>
      </TCard>
    </div>
  </td-doc-demo>
</div>