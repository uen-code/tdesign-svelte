<script>
  import { TTabs, TTabPanel } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.position;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tabs-position tdesign-demo-item--tabs">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px;flex-direction: column">
        <TTabs placement="top" value="1">
          <TTabPanel value="1" label="选项卡1">
            <p style="margin: 20px">选项卡1</p>
          </TTabPanel>
          <TTabPanel value="2" label="选项卡2">
            <p style="margin: 20px">选项卡2</p>
          </TTabPanel>
          <TTabPanel value="3" label="选项卡3">
            <p style="margin: 20px">选项卡3</p>
          </TTabPanel>
        </TTabs>
        <TTabs placement="right" value="1">
          <TTabPanel value="1" label="选项卡1">
            <p style="margin: 20px">选项卡1</p>
          </TTabPanel>
          <TTabPanel value="2" label="选项卡2">
            <p style="margin: 20px">选项卡2</p>
          </TTabPanel>
          <TTabPanel value="3" label="选项卡3">
            <p style="margin: 20px">选项卡3</p>
          </TTabPanel>
        </TTabs>
        <TTabs placement="bottom" value="1">
          <TTabPanel value="1" label="选项卡1">
            <p style="margin: 20px">选项卡1</p>
          </TTabPanel>
          <TTabPanel value="2" label="选项卡2">
            <p style="margin: 20px">选项卡2</p>
          </TTabPanel>
          <TTabPanel value="3" label="选项卡3">
            <p style="margin: 20px">选项卡3</p>
          </TTabPanel>
        </TTabs>
        <TTabs placement="left" value="1">
          <TTabPanel value="1" label="选项卡1">
            <p style="margin: 20px">选项卡1</p>
          </TTabPanel>
          <TTabPanel value="2" label="选项卡2">
            <p style="margin: 20px">选项卡2</p>
          </TTabPanel>
          <TTabPanel value="3" label="选项卡3">
            <p style="margin: 20px">选项卡3</p>
          </TTabPanel>
        </TTabs>
      </div>
    </div>
  </td-doc-demo>
</div>
