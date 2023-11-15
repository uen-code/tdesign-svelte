<script>
  import { TInput } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.align;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-size tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <TInput defaultValue="左对齐" align="left" />
        <TInput defaultValue="居中对齐" align="center" />
        <TInput defaultValue="右对齐" align="right" />
      </div>
    </div>
  </td-doc-demo>
</div>
