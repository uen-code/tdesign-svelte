<script>
  import { TInput } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.clearable;

  const value = 'Hello TDesign';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-clearable tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TInput {value} clearable placeholder="请输入" />
      </div>
    </div>
  </td-doc-demo>
</div>
