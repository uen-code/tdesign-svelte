<script>
  import {TSwitch} from 'tdesign-svelte'

  const checked = true

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--switch-size tdesign-demo-item--switch">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px;align-items: center">
        <TSwitch {checked} size="large"/>
        <TSwitch size="medium"/>
        <TSwitch size="small"/>
      </div>
    </div>
  </td-doc-demo>
</div>
