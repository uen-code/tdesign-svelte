<script>
  import { TBadge } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.number;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--badge-number tdesign-demo-item--badge">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;">
        <TBadge count="2">
          <div class="badge-block" />
        </TBadge>
        <TBadge count="0" showZero>
          <div class="badge-block" />
        </TBadge>
        <TBadge count="100">
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
