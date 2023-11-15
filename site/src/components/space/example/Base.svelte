<script>
  import { TButton, TSpace } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--space-base tdesign-demo-item--space">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TSpace>
        <TButton>Button</TButton>
        <TButton>Button</TButton>
        <TButton>Button</TButton>
      </TSpace>
    </div>
  </td-doc-demo>
</div>
