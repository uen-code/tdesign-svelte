<script>
  import { TCheckboxGroup, TButton } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.link;

  let value = ['选项二'];

  function resetValue() {
    value = ['选项二'];
  }
</script>

<div style="display: flex;flex-direction: column;gap: 16px">
  <div>
    <p>选中值: {value}</p>
  </div>
  <div>
    <TCheckboxGroup bind:value options={['选项一', '选项二', '选项三']} name="city"></TCheckboxGroup>
  </div>
  <div>
    <TButton size="small" on:click={resetValue}>重置</TButton>
  </div>
</div>

<div class="tdesign-demo-wrapper tdesign-demo-item--checkbox-link tdesign-demo-item--checkbox">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <div>
          <p>选中值: {value}</p>
        </div>
        <div>
          <TCheckboxGroup bind:value options={['选项一', '选项二', '选项三']} name="city"></TCheckboxGroup>
        </div>
        <div>
          <TButton size="small" on:click={resetValue}>重置</TButton>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
