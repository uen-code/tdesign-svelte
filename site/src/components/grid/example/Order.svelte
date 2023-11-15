<script>
  import { TRow, TCol } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.order;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-order tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TRow>
          <TCol span="3" order="4">
            <div>1 col-3-order-4</div>
          </TCol>
          <TCol span="3" order="3">
            <div>2 col-3-order-3</div>
          </TCol>
          <TCol span="3" order="2">
            <div>3 col-3-order-2</div>
          </TCol>
          <TCol span="3" order="1">
            <div>4 col-3-order-1</div>
          </TCol>
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
