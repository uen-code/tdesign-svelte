<script>
  import { TTag } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.longText;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tag-icon tdesign-demo-item--tag">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <TTag maxWidth="150">默认超八个字超长文本标签超长省略文本标签</TTag>
      </div>
    </div>
  </td-doc-demo>
</div>
