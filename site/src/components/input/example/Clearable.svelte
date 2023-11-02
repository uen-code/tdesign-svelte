<script>
  import {TInput} from 'tdesign-svelte'

  const value = 'Hello TDesign'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-clearable tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TInput {value} clearable placeholder="请输入" />
      </div>
    </div>
  </td-doc-demo>
</div>
