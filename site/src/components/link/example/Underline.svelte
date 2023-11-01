<script>
  import {TLink} from 'tdesign-svelte'
</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <div class="fl">
      <TLink theme="default" underline> 跳转链接 </TLink>
      <TLink theme="primary" underline> 跳转链接 </TLink>
      <TLink theme="danger" underline> 跳转链接 </TLink>
      <TLink theme="warning" underline> 跳转链接 </TLink>
      <TLink theme="success" underline> 跳转链接 </TLink>
    </div>
  </div>
</td-doc-demo>

<style>
  .fl {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px
  }
</style>
