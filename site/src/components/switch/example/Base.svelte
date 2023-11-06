<script>
  import {TSwitch} from 'tdesign-svelte'

  const checked = true

  const onChange = (e) => {
    console.log('checked: ',e.detail);
  };
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--switch-base tdesign-demo-item--switch">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px">
        <TSwitch/>
        <TSwitch {checked} on:change={onChange}/>
      </div>
    </div>
  </td-doc-demo>
</div>
