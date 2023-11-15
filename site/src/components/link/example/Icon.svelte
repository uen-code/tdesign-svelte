<script>
  import { TLink } from 'tdesign-svelte';
  import { LinkIcon, JumpIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.icon;
</script>

<td-doc-demo mode="auto" language="markup" code={demoCode}>
  <div class="tdesign-demo-item__body">
    <div class="fl">
      <TLink theme="default">
        <LinkIcon slot="prefixIcon" />
        跳转链接
      </TLink>
      <TLink theme="primary" underline href="https://tdesign.tencent.com/" target="_self">
        <LinkIcon slot="prefixIcon" />
        跳转链接
      </TLink>
      <TLink theme="danger" hover="color" href="https://tdesign.tencent.com/" target="_blank">
        <JumpIcon slot="suffixIcon" />
        跳转链接
      </TLink>
      <TLink theme="warning" disabled>
        <JumpIcon slot="suffixIcon" />跳转链接
      </TLink>
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
