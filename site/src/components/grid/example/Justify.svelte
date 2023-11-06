<script>
  import {TRow, TCol} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-halign tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <span>align left</span>
        <TRow justify="start">
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
        </TRow>

        <span>align center</span>
        <TRow justify="center">
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
        </TRow>

        <span>align right</span>
        <TRow justify="end">
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
        </TRow>

        <span>space-between</span>
        <TRow justify="space-between">
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
        </TRow>

        <span>space-around</span>
        <TRow justify="space-around">
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
          <TCol span="2">
            <div>col-2</div>
          </TCol>
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
