<script>
  import {TTabs, TTabPanel} from 'tdesign-svelte'


</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tabs-icon tdesign-demo-item--tabs">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;gap:16px">
        <div style="display: inline-flex;gap: 16px;flex-direction: column">
          <TTabs defaultValue="1" value="1">
            <TTabPanel value="1" label="首页" labelIcon="home" labelIconClass="tabs-icon-margin">
              <p style="margin: 20px">选项卡1内容区</p>
            </TTabPanel>
            <TTabPanel value="2" label="日程" labelIcon="calendar" labelIconClass="tabs-icon-margin">
              <p style="margin: 20px">选项卡2内容区</p>
            </TTabPanel>
            <TTabPanel value="3" label="事项" labelIcon="layers" labelIconClass="tabs-icon-margin">
              <p style="margin: 20px">选项卡3内容区</p>
            </TTabPanel>
          </TTabs>
          <TTabs defaultValue="1" value="1" theme="card">
            <TTabPanel value="1" label="首页" labelIcon="home" labelIconClass="tabs-icon-margin">
              <p style="margin: 20px">选项卡1内容区</p>
            </TTabPanel>
            <TTabPanel value="2" label="日程" labelIcon="calendar" labelIconClass="tabs-icon-margin">
              <p style="margin: 20px">选项卡2内容区</p>
            </TTabPanel>
            <TTabPanel value="3" label="事项" labelIcon="layers" labelIconClass="tabs-icon-margin">
              <p style="margin: 20px">选项卡3内容区</p>
            </TTabPanel>
          </TTabs>
        </div>

      </div>
    </div>
  </td-doc-demo>
</div>
