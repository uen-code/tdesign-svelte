<script>
  import {TSwitch} from 'tdesign-svelte'

  const checked = true

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--switch-status tdesign-demo-item--switch">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px">
        <TSwitch {checked} size="large"/>
        <TSwitch {checked} size="large" loading/>
        <TSwitch disabled size="large"/>
      </div>
    </div>
  </td-doc-demo>
</div>
