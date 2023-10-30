<script>
  import {TLink, TSpace} from 'tdesign-svelte'
  import {JumpIcon} from 'tdesign-svelte-icon';

</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <TSpace direction="vertical">
      <TSpace>
        <TLink theme="default" size="small"> 跳转链接</TLink>
        <TLink theme="primary" size="small"> 跳转链接</TLink>
        <TLink theme="danger" size="small"> 跳转链接</TLink>
        <TLink theme="warning" size="small" disabled>跳转链接</TLink>
        <TLink theme="success" size="small">
          <JumpIcon slot="suffixIcon"/>
          跳转链接
        </TLink>
      </TSpace>
      <TSpace>
        <TLink theme="default" size="medium"> 跳转链接</TLink>
        <TLink theme="primary" size="medium"> 跳转链接</TLink>
        <TLink theme="danger" size="medium"> 跳转链接</TLink>
        <TLink theme="warning" size="medium" disabled>跳转链接</TLink>
        <TLink theme="success" size="medium">
          <JumpIcon slot="suffixIcon"/>
          跳转链接
        </TLink>
      </TSpace>
      <TSpace>
        <TLink theme="default" size="large"> 跳转链接</TLink>
        <TLink theme="primary" size="large"> 跳转链接</TLink>
        <TLink theme="danger" size="large"> 跳转链接</TLink>
        <TLink theme="warning" size="large" disabled>跳转链接</TLink>
        <TLink theme="success" size="large">
          <JumpIcon slot="suffixIcon"/>
          跳转链接
        </TLink>
      </TSpace>
    </TSpace>
  </div>
</td-doc-demo>
