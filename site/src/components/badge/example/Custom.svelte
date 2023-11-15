<script>
  import { TBadge } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.custom;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--badge-custom tdesign-demo-item--badge">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;">
        <TBadge count="2" dot>
          <div class="badge-block" />
        </TBadge>
        <TBadge count="new">
          <div class="badge-block" />
        </TBadge>
        <TBadge count="99" color="#00A870">
          <div class="badge-block" />
        </TBadge>
        <TBadge count="100" color="#0052D9" shape="round">
          <div class="badge-block" />
        </TBadge>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .badge-block {
    width: 40px;
    height: 40px;
    background: #eeeeee;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    border-radius: 3px;
  }
</style>
