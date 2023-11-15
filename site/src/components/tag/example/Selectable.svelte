<script>
  import { TCheckTag } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.selectable;

  let checked1 = false;
  let checked2 = false;
  let checked3 = false;

  const STYLE_B_UNCHECKED_PROPS = {
    theme: 'default',
    variant: 'outline',
  };

  const STYLE_C_CHECKED_PROPS = {
    theme: 'primary',
    variant: 'outline',
  };
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tag-seltctable tdesign-demo-item--tag">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <div class="fl">
          <label>StyleA</label>
          <TCheckTag bind:checked={checked1} style="margin-right: 32px">选中/未选态</TCheckTag>
          <TCheckTag readonly checked={true}>选中态</TCheckTag>
          <TCheckTag readonly checked={false}>未选态</TCheckTag>
          <TCheckTag checked={true} disabled>选中禁用</TCheckTag>
          <TCheckTag checked={false} disabled>未选禁用</TCheckTag>
        </div>
        <div class="fl">
          <label>StyleB</label>
          <TCheckTag bind:checked={checked2} uncheckedProps={STYLE_B_UNCHECKED_PROPS} style="margin-right: 32px"
            >选中/未选态</TCheckTag
          >
          <TCheckTag readonly checked={true}>选中态</TCheckTag>
          <TCheckTag readonly checked={false} uncheckedProps={STYLE_B_UNCHECKED_PROPS}>未选态</TCheckTag>
          <TCheckTag checked={true} disabled>选中禁用</TCheckTag>
          <TCheckTag checked={false} disabled uncheckedProps={STYLE_B_UNCHECKED_PROPS}>未选禁用</TCheckTag>
        </div>
        <div class="fl">
          <label>StyleC</label>
          <TCheckTag
            bind:checked={checked3}
            checkedProps={STYLE_C_CHECKED_PROPS}
            uncheckedProps={STYLE_B_UNCHECKED_PROPS}
            style="margin-right: 32px">Outline Tag</TCheckTag
          >
          <TCheckTag checked={true} readonly checkedProps={STYLE_C_CHECKED_PROPS}>Checked</TCheckTag>
          <TCheckTag checked={false} readonly uncheckedProps={STYLE_B_UNCHECKED_PROPS}>Unchecked</TCheckTag>
          <TCheckTag checked={true} disabled checkedProps={STYLE_C_CHECKED_PROPS}>Disabled</TCheckTag>
          <TCheckTag checked={false} disabled uncheckedProps={STYLE_B_UNCHECKED_PROPS}>Disabled</TCheckTag>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl {
    display: inline-flex;
    gap: 16px;
  }
</style>
