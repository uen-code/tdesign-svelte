<script>
  import {TSpace, TButton} from 'tdesign-svelte'
</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <TSpace direction="vertical" align="center">
      <TButton style="min-width: 320px;max-width:640px" block theme="primary" variant="base">填充按钮</TButton>
      <TButton style="min-width: 320px;max-width:640px" block variant="outline">描边按钮</TButton>
      <TButton style="min-width: 320px;max-width:640px" block variant="dashed">虚框按钮</TButton>
      <TButton style="min-width: 320px;max-width:640px" block variant="text">文字按钮</TButton>
    </TSpace>
  </div>
</td-doc-demo>