<script>
  import {TButton} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-block tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div class="df">
        <TButton style="min-width: 320px;max-width:640px" block theme="primary" variant="base">填充按钮</TButton>
        <TButton style="min-width: 320px;max-width:640px" block variant="outline">描边按钮</TButton>
        <TButton style="min-width: 320px;max-width:640px" block variant="dashed">虚框按钮</TButton>
        <TButton style="min-width: 320px;max-width:640px" block variant="text">文字按钮</TButton>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .df{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>