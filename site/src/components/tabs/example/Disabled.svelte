<script>
  import { TTabs, TTabPanel } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.disabled;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tabs-disabled tdesign-demo-item--tabs">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;gap:16px">
        <div style="display: inline-flex;flex-direction: column;gap: 16px">
          <TTabs defaultValue="1" value="1">
            <TTabPanel value="1" label="选项卡1">
              <p style="margin: 20px">选项卡1内容区</p>
            </TTabPanel>
            <TTabPanel value="2" label="选项卡2" disabled>
              <p style="margin: 20px">选项卡2内容区</p>
            </TTabPanel>
            <TTabPanel value="3" label="选项卡3">
              <p style="margin: 20px">选项卡3内容区</p>
            </TTabPanel>
          </TTabs>
          <TTabs defaultValue="1" value="1" theme="card">
            <TTabPanel value="1" label="选项卡1">
              <p style="margin: 20px">选项卡1内容区</p>
            </TTabPanel>
            <TTabPanel value="2" label="选项卡2" disabled>
              <p style="margin: 20px">选项卡2内容区</p>
            </TTabPanel>
            <TTabPanel value="3" label="选项卡3">
              <p style="margin: 20px">选项卡3内容区</p>
            </TTabPanel>
          </TTabs>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
