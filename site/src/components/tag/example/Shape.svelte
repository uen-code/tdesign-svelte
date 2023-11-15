<script>
  import { TTag } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.shape;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tag-seltctable tdesign-demo-item--tag">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <div class="fl">
          <TTag>标签一</TTag>
          <TTag theme="primary">标签一</TTag>
        </div>
        <div class="fl">
          <TTag shape="round">标签一</TTag>
          <TTag shape="round" theme="primary">标签一</TTag>
        </div>
        <div class="fl">
          <TTag shape="mark">标签一</TTag>
          <TTag shape="mark" theme="primary">标签一</TTag>
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
