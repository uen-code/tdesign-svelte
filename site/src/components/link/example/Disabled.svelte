<script>
  import {TLink,TSpace} from 'tdesign-svelte'
  import { JumpIcon } from 'tdesign-svelte-icon';
  
  const clickLink = () => {
    console.log('不触发');
  };
</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <TSpace>
      <TLink theme="default" disabled on:click={clickLink}> 跳转链接 </TLink>
      <TLink theme="primary" underline disabled on:click={clickLink}> 跳转链接 </TLink>
      <TLink theme="danger" hover="color" disabled on:click={clickLink}> 跳转链接 </TLink>
      <TLink theme="warning" hover="underline" disabled on:click={clickLink}> 跳转链接 </TLink>
      <TLink theme="success" disabled on:click={clickLink}>
        <JumpIcon slot="suffixIcon" />
        跳转链接
      </TLink>
    </TSpace>
  </div>
</td-doc-demo>
