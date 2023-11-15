<script>
  import { TRadioGroup, TRadioButton } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.type;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--radio-type tdesign-demo-item--radio">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;flex-direction:column;gap: 16px">
        <h5>边框型单选按钮</h5>
        <TRadioGroup defaultValue="1">
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选项四</TRadioButton>
          <TRadioButton value="5">选项五</TRadioButton>
        </TRadioGroup>
        <TRadioGroup defaultValue="4" disabled>
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选中禁用态</TRadioButton>
          <TRadioButton>未选中禁用态</TRadioButton>
        </TRadioGroup>
        <h5>填充型单选按钮</h5>
        <TRadioGroup variant="default-filled" defaultValue="1">
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选项四</TRadioButton>
          <TRadioButton value="5">选项五</TRadioButton>
        </TRadioGroup>
        <TRadioGroup variant="primary-filled" defaultValue="1">
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选项四</TRadioButton>
          <TRadioButton value="5">选项五</TRadioButton>
        </TRadioGroup>
        <TRadioGroup variant="default-filled" defaultValue="4" disabled>
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选中禁用态</TRadioButton>
          <TRadioButton value="5">未选中禁用态</TRadioButton>
        </TRadioGroup>
        <TRadioGroup variant="primary-filled" defaultValue="4" disabled>
          <TRadioButton value="1">选项一</TRadioButton>
          <TRadioButton value="2">选项二</TRadioButton>
          <TRadioButton value="3">选项三</TRadioButton>
          <TRadioButton value="4">选中禁用态</TRadioButton>
          <TRadioButton value="5">未选中禁用态</TRadioButton>
        </TRadioGroup>
      </div>
    </div>
  </td-doc-demo>
</div>
