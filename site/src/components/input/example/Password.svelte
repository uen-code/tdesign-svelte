<script>
  import { TInput } from 'tdesign-svelte';
  import { LockOnIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.password;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-password tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TInput type="password" defaultValue="520 TDesign">
          <LockOnIcon slot="prefixIcon" />
        </TInput>
      </div>
    </div>
  </td-doc-demo>
</div>
