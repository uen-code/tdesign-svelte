<script>
    import {TComment, TButton, TTextarea} from 'tdesign-svelte'

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--comment-reply tdesign-demo-item--comment">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <TComment avatar="https://tdesign.gtimg.com/site/avatar.jpg">
        <div slot="content" class="form-container">
          <TTextarea></TTextarea>
          <TButton style="margin-top: 8px">回复</TButton>
        </div>
      </TComment>
    </div>
  </td-doc-demo>
</div>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
</style>
