<script>
  import { TTag } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.size;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tag-icon tdesign-demo-item--tag">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;gap:16px">
        <TTag size="small">小型标签</TTag>
        <TTag>默认标签</TTag>
        <TTag size="large">大型标签</TTag>
      </div>
    </div>
  </td-doc-demo>
</div>
