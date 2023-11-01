<script>
  import {TButton} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-status tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div class="fl">
        <TButton disabled>填充按钮</TButton>
        <TButton loading>加载中</TButton>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px
  }
</style>

