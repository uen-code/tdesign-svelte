<script>
  import { TButton, TSpace } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.align;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--space-align tdesign-demo-item--space">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TSpace breakLine>
        <TSpace align="start" style="padding: 12px;border: 1px dashed var(--td-component-stroke);">
          <div>start</div>
          <TButton>Button</TButton>
          <div class="space-block"></div>
        </TSpace>
        <TSpace align="center" style="padding: 12px;border: 1px dashed var(--td-component-stroke);">
          <div>center</div>
          <TButton>Button</TButton>
          <div class="space-block"></div>
        </TSpace>
        <TSpace align="end" style="padding: 12px;border: 1px dashed var(--td-component-stroke);">
          <div>end</div>
          <TButton>Button</TButton>
          <div class="space-block"></div>
        </TSpace>
        <TSpace align="baseline" style="padding: 12px;border: 1px dashed var(--td-component-stroke);">
          <div>baseline</div>
          <TButton>Button</TButton>
          <div class="space-block"></div>
        </TSpace>
      </TSpace>
    </div>
  </td-doc-demo>
</div>

<style>
  .space-block {
    background: var(--td-bg-color-component);
    height: 60px;
    width: 60px;
  }
</style>
