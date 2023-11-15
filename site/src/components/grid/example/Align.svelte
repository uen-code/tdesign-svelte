<script>
  import { TRow, TCol } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.align;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-valign tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <p>align top</p>
        <TRow align="top" justify="center">
          <TCol span="3">
            <div style="height: 100px">col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div style="height: 100px">col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
        </TRow>

        <p>align middle</p>
        <TRow align="middle" justify="space-around">
          <TCol span="3">
            <div style="height: 100px">col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div style="height: 100px">col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
        </TRow>

        <p>align bottom</p>
        <TRow align="bottom" justify="space-between">
          <TCol span="3">
            <div style="height: 100px">col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div style="height: 100px">col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
