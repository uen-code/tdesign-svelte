<script>
  import { TRow, TCol } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.offset;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-offset tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TRow>
          <TCol span="4">
            <div>col-4</div>
          </TCol>
          <TCol span="4" offset="4">
            <div>col-4 col-offset-4</div>
          </TCol>
        </TRow>

        <TRow>
          <TCol span="3" offset="3">
            <div>col-3 col-offset-3</div>
          </TCol>
          <TCol span="3" offset="3">
            <div>col-3 col-offset-3</div>
          </TCol>
        </TRow>

        <TRow>
          <TCol span="6" offset="3">
            <div>col-6 col-offset-3</div>
          </TCol>
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
