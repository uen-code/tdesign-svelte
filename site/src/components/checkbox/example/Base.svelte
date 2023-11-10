<script>
  import {TCheckbox} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--checkbox-base tdesign-demo-item--checkbox">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px">
        <TCheckbox>未选中项</TCheckbox>
        <TCheckbox>未选悬停项</TCheckbox>
        <TCheckbox checked="true"> 选中项 </TCheckbox>
        <TCheckbox disabled> 未选禁用项 </TCheckbox>
        <TCheckbox disabled checked="true"> 选中禁用项 </TCheckbox>
      </div>
    </div>
  </td-doc-demo>
</div>
