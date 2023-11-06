<script>
  import {TRow, TCol} from 'tdesign-svelte'

  const xs={ offset: 0, span: 3 }
  const sm={offset: 2, span: 3 }
  const md={ offset: 4, span: 3 }
  const lg={ offset: 6, span: 3 }
  const xl={ offset: 8, span: 3 }
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-responsive tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <span>宽度响应式</span>
        <TRow>
          <TCol xs="2" sm="4" md="6" lg="8" xl="10">
            <div>Col</div>
          </TCol>
          <TCol xs="10" sm="8" md="6" lg="4" xl="2">
            <div>Col</div>
          </TCol>
        </TRow>

        <span>其他属性响应式（支持span，offset，order，pull，push）</span>
        <TRow>
          <TCol {xs} {sm} {md} {lg} {xl}>
            <div>Col</div>
          </TCol>
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
