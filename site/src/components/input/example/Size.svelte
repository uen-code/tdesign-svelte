<script>
  import { TInput } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.size;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-size tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <TInput size="large" placeholder="请输入内容" />
        <TInput placeholder="请输入内容" />
        <TInput size="small" placeholder="请输入内容" />
      </div>
    </div>
  </td-doc-demo>
</div>
