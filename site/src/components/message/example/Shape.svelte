<script>
  import { TButton } from 'tdesign-svelte';
  import { CalendarIcon } from 'tdesign-icons-svelte';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-base tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column">
        <div class="fl">
          <TButton theme="primary" shape="rectangle" variant="base">填充按钮</TButton>
          <TButton theme="primary" shape="square" variant="base">
            <CalendarIcon slot="icon" />
          </TButton>
          <TButton theme="primary" shape="round" variant="base">填充按钮</TButton>
          <TButton theme="primary" shape="circle" variant="base">
            <CalendarIcon slot="icon" />
          </TButton>
        </div>
        <div class="fl">
          <TButton shape="rectangle" variant="outline">描边按钮</TButton>
          <TButton shape="square" variant="outline">
            <CalendarIcon slot="icon" />
          </TButton>
          <TButton shape="round" variant="outline">描边按钮</TButton>
          <TButton shape="circle" variant="outline">
            <CalendarIcon slot="icon" />
          </TButton>
        </div>
        <div class="fl">
          <TButton shape="rectangle" variant="dashed">虚框按钮</TButton>
          <TButton shape="square" variant="dashed">
            <CalendarIcon slot="icon" />
          </TButton>
          <TButton shape="round" variant="dashed">虚框按钮</TButton>
          <TButton shape="circle" variant="dashed">
            <CalendarIcon slot="icon" />
          </TButton>
        </div>
        <div class="fl">
          <TButton shape="rectangle" variant="text">文字按钮</TButton>
          <TButton shape="square" variant="text">
            <CalendarIcon slot="icon" />
          </TButton>
          <TButton shape="round" variant="text">文字按钮</TButton>
          <TButton shape="circle" variant="text">
            <CalendarIcon slot="icon" />
          </TButton>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px;
  }
</style>
