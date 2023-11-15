<script>
  import { TButton } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.size;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-size tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column">
        <div class="fl">
          <TButton theme="primary" size="small" variant="base">填充按钮</TButton>
          <TButton size="small" variant="outline">描边按钮</TButton>
          <TButton size="small" variant="dashed">虚框按钮</TButton>
          <TButton size="small" variant="text">文字按钮</TButton>
        </div>
        <div class="fl">
          <TButton theme="primary" size="medium" variant="base">填充按钮</TButton>
          <TButton size="medium" variant="outline">描边按钮</TButton>
          <TButton size="medium" variant="dashed">虚框按钮</TButton>
          <TButton size="medium" variant="text">文字按钮</TButton>
        </div>
        <div class="fl">
          <TButton theme="primary" size="large" variant="base">填充按钮</TButton>
          <TButton size="large" variant="outline">描边按钮</TButton>
          <TButton size="large" variant="dashed">虚框按钮</TButton>
          <TButton size="large" variant="text">文字按钮</TButton>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px;
  }
</style>
