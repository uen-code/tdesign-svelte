<script>
  import { TButton } from 'tdesign-svelte';
  import { AddIcon, CloudUploadIcon, SearchIcon, CloudDownloadIcon, DiscountIcon } from 'tdesign-icons-svelte';
</script>

<td-doc-demo mode="auto" language="markup" code={demoCode}>
  <div class="tdesign-demo-item__body">
    <div class="fl">
      <TButton theme="primary">
        <AddIcon slot="icon" />
        新建
      </TButton>
      <TButton variant="outline">
        <CloudUploadIcon slot="icon" />
        上传文件
      </TButton>
      <TButton shape="circle" theme="primary">
        <DiscountIcon slot="icon" />
      </TButton>
      <TButton shape="circle" theme="primary">
        <CloudDownloadIcon slot="icon" />
      </TButton>
      <TButton variant="outline">
        <SearchIcon slot="icon" />
        搜索
      </TButton>
    </div>
  </div>
</td-doc-demo>

<style>
  .fl {
    display: inline-flex;
    gap: 24px;
  }
</style>
