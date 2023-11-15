<script>
  import { TLink } from 'tdesign-svelte';
  import { JumpIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.size;
</script>

<td-doc-demo mode="auto" language="markup" code={demoCode}>
  <div class="tdesign-demo-item__body">
    <div style="display: flex;flex-direction: column">
      <div class="fl">
        <TLink theme="default" size="small">跳转链接</TLink>
        <TLink theme="primary" size="small">跳转链接</TLink>
        <TLink theme="danger" size="small">跳转链接</TLink>
        <TLink theme="warning" size="small" disabled>跳转链接</TLink>
        <TLink theme="success" size="small">
          <JumpIcon slot="suffixIcon" />
          跳转链接
        </TLink>
      </div>
      <div class="fl">
        <TLink theme="default" size="medium">跳转链接</TLink>
        <TLink theme="primary" size="medium">跳转链接</TLink>
        <TLink theme="danger" size="medium">跳转链接</TLink>
        <TLink theme="warning" size="medium" disabled>跳转链接</TLink>
        <TLink theme="success" size="medium">
          <JumpIcon slot="suffixIcon" />
          跳转链接
        </TLink>
      </div>
      <div class="fl">
        <TLink theme="default" size="large">跳转链接</TLink>
        <TLink theme="primary" size="large">跳转链接</TLink>
        <TLink theme="danger" size="large">跳转链接</TLink>
        <TLink theme="warning" size="large" disabled>跳转链接</TLink>
        <TLink theme="success" size="large">
          <JumpIcon slot="suffixIcon" />
          跳转链接
        </TLink>
      </div>
    </div>
  </div>
</td-doc-demo>

<style>
  .fl {
    margin-top: 16px;
    display: inline-flex;
    gap: 16px;
  }
</style>
