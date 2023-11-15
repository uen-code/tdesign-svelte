<script>
  import { TBadge } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.offset;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--badge-shape tdesign-demo-item--badge">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;">
        <TBadge count="2">
          <div class="badge-block" />
        </TBadge>

        <TBadge count="2" offset={[10, 10]}>
          <div class="badge-block" />
        </TBadge>

        <TBadge count="2" offset={[-10, 10]}>
          <div class="badge-block" />
        </TBadge>

        <TBadge count="2" offset={[-10, -10]}>
          <div class="badge-block" />
        </TBadge>

        <TBadge count="2" offset={[10, -10]}>
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
