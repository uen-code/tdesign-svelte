<script>
  import {TDivider} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--divider-vertical tdesign-demo-item--divider">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div class="fl">
        <span>正直</span>
        <TDivider layout="vertical"/>
        <span>进取</span>
        <TDivider layout="vertical"/>
        <span>协作</span>
        <TDivider layout="vertical" dashed/>
        <span>创造</span>
      </div>
    </div>
  </td-doc-demo>

</div>


<style>
  .fl {
    display: inline-flex;
    gap: 16px;
    align-items: center;
  }
</style>
