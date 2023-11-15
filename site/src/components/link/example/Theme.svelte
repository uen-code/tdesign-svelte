<script>
  import { TLink } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.theme;
</script>

<td-doc-demo mode="auto" language="markup" code={demoCode}>
  <div class="tdesign-demo-item__body">
    <div class="fl">
      <TLink theme="default">跳转链接</TLink>
      <TLink theme="primary">跳转链接</TLink>
      <TLink theme="danger">跳转链接</TLink>
      <TLink theme="warning">跳转链接</TLink>
      <TLink theme="success">跳转链接</TLink>
    </div>
  </div>
</td-doc-demo>

<style>
  .fl {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px;
  }
</style>
