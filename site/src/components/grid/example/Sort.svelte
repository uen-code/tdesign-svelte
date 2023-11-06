<script>
  import {TRow, TCol} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-sort tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TRow>
          <TCol span="9" push="3">
            <div>col-9 col-pull-3</div>
          </TCol>
          <TCol span="3" pull="9">
            <div>col-3 col-pull-9</div>
          </TCol>
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
