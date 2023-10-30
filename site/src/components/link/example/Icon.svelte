<script>
  import {TLink,TSpace} from 'tdesign-svelte'
  import { LinkIcon, JumpIcon } from 'tdesign-svelte-icon';

</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <TSpace>
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
        <JumpIcon slot="suffixIcon" />跳转链接 </TLink>
    </TSpace>
  </div>
</td-doc-demo>
