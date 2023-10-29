<script>
  import {TButton,TSpace} from 'tdesign-svelte'
</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <TSpace direction="vertical">
      <TSpace>
        <TButton theme="primary" size="small" variant="base">填充按钮</TButton>
        <TButton size="small" variant="outline">描边按钮</TButton>
        <TButton size="small" variant="dashed">虚框按钮</TButton>
        <TButton size="small" variant="text">文字按钮</TButton>
      </TSpace>
      <TSpace>
        <TButton theme="primary" size="medium" variant="base">填充按钮</TButton>
        <TButton size="medium" variant="outline">描边按钮</TButton>
        <TButton size="medium" variant="dashed">虚框按钮</TButton>
        <TButton size="medium" variant="text">文字按钮</TButton>
      </TSpace>
      <TSpace>
        <TButton theme="primary" size="large" variant="base">填充按钮</TButton>
        <TButton size="large" variant="outline">描边按钮</TButton>
        <TButton size="large" variant="dashed">虚框按钮</TButton>
        <TButton size="large" variant="text">文字按钮</TButton>
      </TSpace>
    </TSpace>
  </div>
  
</td-doc-demo>
