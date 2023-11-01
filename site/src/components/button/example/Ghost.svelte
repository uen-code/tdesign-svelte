<script>
  import { TButton} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-ghost tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup" demo-name="ghost">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column">
        <div class="fl">
          <TButton variant="outline" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" ghost>幽灵按钮</TButton>
          <TButton variant="text" ghost>幽灵按钮</TButton>
        </div>
        <div class="fl">
          <TButton variant="outline" theme="primary" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="primary" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="primary" ghost>幽灵按钮</TButton>
        </div>
        <div class="fl">
          <TButton variant="outline" theme="success" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="success" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="success" ghost>幽灵按钮</TButton>
        </div>
        <div class="fl">
          <TButton variant="outline" theme="warning" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="warning" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="warning" ghost>幽灵按钮</TButton>
        </div>
        <div class="fl">
          <TButton variant="outline" theme="danger" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="danger" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="danger" ghost>幽灵按钮</TButton>
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