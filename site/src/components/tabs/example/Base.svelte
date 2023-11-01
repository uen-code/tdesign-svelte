<script>
  import {TTabs, TTabPanel} from 'tdesign-svelte'

  const tabList = [
    {label: '选项卡一', value: "1", panel: '<p style="padding: 25px">这是选项卡一的内容，使用 t-tabs 渲染</p>'},
    {label: '选项卡二', value: "2", panel: '<p style="padding: 25px">这是选项卡二的内容，使用 t-tabs 渲染</p>'},
    {label: '选项卡三', value: "3", panel: '<p style="padding: 25px">这是选项卡三的内容，使用 t-tabs 渲染</p>'},
  ];

  const panel = '<p style="padding: 25px">这是选项卡三的内容，使用 t-tabs 渲染</p>'

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tabs-base tdesign-demo-item--tabs">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <TTabs defaultValue="1" value="1">
          <TTabPanel value="1" label="选项卡1">
            <p style="margin: 20px">选项卡1内容区</p>
          </TTabPanel>
          <TTabPanel value="2" label="选项卡2">
            <p style="margin: 20px">选项卡2内容区</p>
          </TTabPanel>
          <TTabPanel value="3" label="选项卡3">
            <p style="margin: 20px">选项卡3内容区</p>
          </TTabPanel>
        </TTabs>

        <TTabs value="1" list={tabList}/>
      </div>
    </div>
  </td-doc-demo>
</div>
