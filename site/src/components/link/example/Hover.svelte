<script>
  import {TLink} from 'tdesign-svelte'
</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <div style="display: flex;flex-direction: column">
      <div class="fl">
        <TLink theme="default" hover="underline"> 跳转链接 </TLink>
        <TLink theme="primary" hover="underline"> 跳转链接 </TLink>
        <TLink theme="danger" hover="underline"> 跳转链接 </TLink>
        <TLink theme="warning" hover="underline"> 跳转链接 </TLink>
        <TLink theme="success" hover="underline"> 跳转链接 </TLink>
      </div>
      <div class="fl">
        <TLink theme="default" hover="color"> 跳转链接 </TLink>
        <TLink theme="primary" hover="color"> 跳转链接 </TLink>
        <TLink theme="danger" hover="color"> 跳转链接 </TLink>
        <TLink theme="warning" hover="color"> 跳转链接 </TLink>
        <TLink theme="success" hover="color"> 跳转链接 </TLink>
      </div>
      <div class="fl">
        <TLink theme="default" hover="color" underline> 跳转链接 </TLink>
        <TLink theme="primary" hover="color" underline> 跳转链接 </TLink>
        <TLink theme="danger" hover="color" underline> 跳转链接 </TLink>
        <TLink theme="warning" hover="color" underline> 跳转链接 </TLink>
        <TLink theme="success" hover="color" underline> 跳转链接 </TLink>
      </div>
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