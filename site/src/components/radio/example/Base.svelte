<script>
  import { TRadio } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--radio-base tdesign-demo-item--radio">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px">
        <TRadio>未选中项</TRadio>
        <TRadio allowUncheck>可取消选中项</TRadio>
        <TRadio checked>选中项</TRadio>
        <TRadio checked disabled>选中禁用态</TRadio>
        <TRadio disabled>未选中禁用态</TRadio>
      </div>
    </div>
  </td-doc-demo>
</div>
