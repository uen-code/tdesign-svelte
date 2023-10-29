<script>
  import {TSpace, TButton} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-item--button-ghost">
  <td-doc-demo mode="auto" language="markup" demo-name="ghost">
    <div class="tdesign-demo-item__body">
      <TSpace direction="vertical">
        <TSpace>
          <TButton variant="outline" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" ghost>幽灵按钮</TButton>
          <TButton variant="text" ghost>幽灵按钮</TButton>
        </TSpace>
        <TSpace>
          <TButton variant="outline" theme="primary" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="primary" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="primary" ghost>幽灵按钮</TButton>
        </TSpace>
        <TSpace>
          <TButton variant="outline" theme="success" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="success" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="success" ghost>幽灵按钮</TButton>
        </TSpace>
        <TSpace>
          <TButton variant="outline" theme="warning" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="warning" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="warning" ghost>幽灵按钮</TButton>
        </TSpace>
        <TSpace>
          <TButton variant="outline" theme="danger" ghost>幽灵按钮</TButton>
          <TButton variant="dashed" theme="danger" ghost>幽灵按钮</TButton>
          <TButton variant="text" theme="danger" ghost>幽灵按钮</TButton>
        </TSpace>
      </TSpace>
    </div>
  </td-doc-demo>
</div>
