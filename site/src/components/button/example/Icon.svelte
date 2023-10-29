<script>
  import {TSpace, TButton} from 'tdesign-svelte'
  import {AddIcon, CloudUploadIcon, SearchIcon, CloudDownloadIcon, DiscountIcon} from 'tdesign-svelte-icon';
</script>

<td-doc-demo mode="auto" language="markup">
  <div class="tdesign-demo-item__body">
    <TSpace size="24px">
      <TButton theme="primary">
        <AddIcon slot="icon"/>
        新建
      </TButton>
      <TButton variant="outline">
        <CloudUploadIcon slot="icon"/>
        上传文件
      </TButton>
      <TButton shape="circle" theme="primary">
        <DiscountIcon slot="icon"/>
      </TButton>
      <TButton shape="circle" theme="primary">
        <CloudDownloadIcon slot="icon"/>
      </TButton>
      <TButton variant="outline">
        <SearchIcon slot="icon"/>
        搜索
      </TButton>
    </TSpace>
  </div>
</td-doc-demo>
