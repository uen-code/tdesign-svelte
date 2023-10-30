<script>
  import {TButton, TSpace, TDivider} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--space-separator tdesign-demo-item--space">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <TSpace align="center">
        <TButton variant="text">Text</TButton>
        <TButton variant="text">Text</TButton>
        <TButton variant="text">Text</TButton>
        <TDivider slot="separator" layout="vertical"/>
      </TSpace>

      <TSpace align="center">
        <TButton variant="text">Text</TButton>
        <TButton variant="text">Text</TButton>
        <TButton variant="text">Text</TButton>
        <TDivider slot="separator" layout="vertical"/>
      </TSpace>
    </div>
  </td-doc-demo>
</div>
