<script>
  import {TTabs, TTabPanel} from 'tdesign-svelte'


</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tabs-theme tdesign-demo-item--tabs">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px;">
        <div style="display: inline-flex;flex-direction: column;gap: 16px">
          <TTabs value="3">
            <TTabPanel value="1"  label="选项卡1">
              <p style="margin: 20px">选项卡1</p>
            </TTabPanel>
            <TTabPanel value="2" label="选项卡2" >
              <p style="margin: 20px">选项卡2</p>
            </TTabPanel>
            <TTabPanel value="3" label="选项卡3" >
              <p style="margin: 20px">选项卡3</p>
            </TTabPanel>
          </TTabs>
          <TTabs theme="card" value="1">
            <TTabPanel value="1" label="选项卡1">
              <p style="margin: 20px">选项卡1</p>
            </TTabPanel>
            <TTabPanel value="2" label="选项卡2" >
              <p style="margin: 20px">选项卡2</p>
            </TTabPanel>
            <TTabPanel value="3" label="选项卡3" >
              <p style="margin: 20px">选项卡3</p>
            </TTabPanel>
          </TTabs>

        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
