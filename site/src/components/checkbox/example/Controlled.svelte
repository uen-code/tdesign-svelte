<script>
  import { TCheckbox, TCheckboxGroup } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.controlled;

  let checked1 = true;
  let checked2 = [1];

  const onChange1 = (val) => {
    console.log('change:', checked1, val);
  };
  const onChange2 = (value) => {
    console.log('change: ', value);
  };

  const options = [
    { label: '全选', checkAll: true },
    { value: 1, label: '受控模式选项一' },
    { value: 2, label: '受控模式选项二' },
    { value: 3, label: '受控模式选项三' },
  ];
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--checkbox-controlled tdesign-demo-item--checkbox">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction:column;gap: 24px">
        <div style="display: inline-flex;gap: 16px">
          <TCheckbox bind:checked={checked1} on:change={onChange1}>语法糖（bind）</TCheckbox>
          <TCheckbox checked={true} readonly on:change={onChange2}>受控属性</TCheckbox>
          <TCheckbox checked={false} on:change={onChange2}>非受控属性</TCheckbox>
        </div>
        <TCheckboxGroup value={checked2} readonly {options} on:change={onChange2} />
      </div>
    </div>
  </td-doc-demo>
</div>
