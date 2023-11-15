<script>
  import { TButton } from 'tdesign-svelte';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-base tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div>
        <TButton theme="default" variant="base">填充按钮</TButton>
        <TButton theme="default" variant="outline">描边按钮</TButton>
        <TButton theme="default" variant="dashed">虚框按钮</TButton>
        <TButton theme="default" variant="text">文字按钮</TButton>
      </div>
    </div>
  </td-doc-demo>
</div>
