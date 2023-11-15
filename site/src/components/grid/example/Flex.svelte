<script>
  import { TRow, TCol } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.flex;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-flex tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TRow>
          <TCol flex="2">
            <div>2 / 5</div>
          </TCol>
          <TCol flex="3">
            <div>3 / 5</div>
          </TCol>
        </TRow>

        <TRow>
          <TCol flex="100px">
            <div>100px</div>
          </TCol>
          <TCol flex="auto">
            <div>auto</div>
          </TCol>
        </TRow>

        <TRow>
          <TCol flex="1 1 200px">
            <div>1 1 200px</div>
          </TCol>
          <TCol flex="0 1 300px">
            <div>0 1 300px</div>
          </TCol>
        </TRow>

        <TRow>
          <TCol flex="none">
            <div style="padding: 0 16px">none</div>
          </TCol>
          <TCol flex="auto">
            <div>auto with no-wrap</div>
          </TCol>
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
