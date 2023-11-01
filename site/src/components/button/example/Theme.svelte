<script>
  import {TButton} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-theme tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column">
        <div class="fl">
          <TButton theme="default">填充按钮</TButton>
          <TButton variant="outline" theme="default">描边按钮</TButton>
          <TButton variant="dashed" theme="default">虚框按钮</TButton>
          <TButton variant="text" theme="default">文字按钮</TButton>
        </div>
        <div class="fl">
          <TButton theme="primary">填充按钮</TButton>
          <TButton variant="outline" theme="primary">描边按钮</TButton>
          <TButton variant="dashed" theme="primary">虚框按钮</TButton>
          <TButton variant="text" theme="primary">文字按钮</TButton>
        </div>
        <div class="fl">
          <TButton theme="danger">填充按钮</TButton>
          <TButton variant="outline" theme="danger">描边按钮</TButton>
          <TButton variant="dashed" theme="danger">虚框按钮</TButton>
          <TButton variant="text" theme="danger">文字按钮</TButton>
        </div>
        <div class="fl">
          <TButton theme="warning">填充按钮</TButton>
          <TButton variant="outline" theme="warning">描边按钮</TButton>
          <TButton variant="dashed" theme="warning">虚框按钮</TButton>
          <TButton variant="text" theme="warning">文字按钮</TButton>
        </div>
        <div class="fl">
          <TButton theme="success">填充按钮</TButton>
          <TButton variant="outline" theme="success">描边按钮</TButton>
          <TButton variant="dashed" theme="success">虚框按钮</TButton>
          <TButton variant="text" theme="success">文字按钮</TButton>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl{
    margin-top: 16px;
    display: inline-flex;
    gap: 16px
  }
</style>
