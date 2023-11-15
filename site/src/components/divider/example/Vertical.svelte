<script>
  import { TDivider } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.vertical;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--divider-vertical tdesign-demo-item--divider">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div class="fl">
        <span>正直</span>
        <div>
          <TDivider layout="vertical" />
        </div>
        <span>进取</span>
        <div>
          <TDivider layout="vertical" />
        </div>
        <span>协作</span>
        <div>
          <TDivider layout="vertical" dashed />
        </div>
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
