<script>
  import { TBadge } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.size;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--badge-size tdesign-demo-item--badge">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction:column;gap: 24px">
        <h3>1.默认大小</h3>
        <div>
          <TBadge count="2">
            <div class="badge-block" />
          </TBadge>
          <TBadge count="99">
            <div class="badge-block" />
          </TBadge>
          <TBadge count="999">
            <div class="badge-block" />
          </TBadge>
        </div>

        <h3>2.小</h3>
        <div>
          <TBadge count="2" size="small">
            <div class="badge-block" />
          </TBadge>
          <TBadge count="99" size="small">
            <div class="badge-block" />
          </TBadge>
          <TBadge count="999" size="small">
            <div class="badge-block" />
          </TBadge>
        </div>
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
