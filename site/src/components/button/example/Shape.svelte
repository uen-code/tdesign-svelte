<script>
  import {TButton, TSpace} from 'tdesign-svelte'
  import {CalendarIcon} from "tdesign-svelte-icon";
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-base tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <TSpace direction="vertical">
        <TSpace>
          <TButton theme="primary" shape="rectangle" variant="base">填充按钮</TButton>
          <TButton theme="primary" shape="square" variant="base">
            <CalendarIcon slot="icon"/>
          </TButton>
          <TButton theme="primary" shape="round" variant="base">填充按钮</TButton>
          <TButton theme="primary" shape="circle" variant="base">
            <CalendarIcon slot="icon"/>
          </TButton>
        </TSpace>
        <TSpace>
          <TButton shape="rectangle" variant="outline">描边按钮</TButton>
          <TButton shape="square" variant="outline">
            <CalendarIcon slot="icon"/>
          </TButton>
          <TButton shape="round" variant="outline">描边按钮</TButton>
          <TButton shape="circle" variant="outline">
            <CalendarIcon slot="icon"/>
          </TButton>
        </TSpace>
        <TSpace>
          <TButton shape="rectangle" variant="dashed">虚框按钮</TButton>
          <TButton shape="square" variant="dashed">
            <CalendarIcon slot="icon"/>
          </TButton>
          <TButton shape="round" variant="dashed">虚框按钮</TButton>
          <TButton shape="circle" variant="dashed">
            <CalendarIcon slot="icon"/>
          </TButton>
        </TSpace>
        <TSpace>
          <TButton shape="rectangle" variant="text">文字按钮</TButton>
          <TButton shape="square" variant="text">
            <CalendarIcon slot="icon"/>
          </TButton>
          <TButton shape="round" variant="text">文字按钮</TButton>
          <TButton shape="circle" variant="text">
            <CalendarIcon slot="icon"/>
          </TButton>
        </TSpace>
      </TSpace>
    </div>
  </td-doc-demo>

</div>
