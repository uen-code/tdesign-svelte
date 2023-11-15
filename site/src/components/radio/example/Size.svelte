<script>
  import { TRadioGroup, TRadioButton } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.size;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--radio-size tdesign-demo-item--radio">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;flex-direction:column;gap: 16px">
        <TRadioGroup defaultValue="1" size="small">
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选项四</TRadioButton>
          <TRadioButton value="5">选项五</TRadioButton>
        </TRadioGroup>
        <TRadioGroup defaultValue="2">
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选项四</TRadioButton>
        </TRadioGroup>
        <TRadioGroup defaultValue="3" size="large">
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选项四</TRadioButton>
        </TRadioGroup>
      </div>
    </div>
  </td-doc-demo>
</div>
