<script>
  import { TLink } from 'tdesign-svelte';
  import { JumpIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.disabled;

  const clickLink = () => {
    console.log('不触发');
  };
</script>

<td-doc-demo mode="auto" language="markup" code={demoCode}>
  <div class="tdesign-demo-item__body">
    <div class="fl">
      <TLink theme="default" disabled on:click={clickLink}>跳转链接</TLink>
      <TLink theme="primary" underline disabled on:click={clickLink}>跳转链接</TLink>
      <TLink theme="danger" hover="color" disabled on:click={clickLink}>跳转链接</TLink>
      <TLink theme="warning" hover="underline" disabled on:click={clickLink}>跳转链接</TLink>
      <TLink theme="success" disabled on:click={clickLink}>
        <JumpIcon slot="suffixIcon" />
        跳转链接
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
