<script>
  import { TTag, TIcon, TInput } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.delete;

  let inputVisible = false;
  function handleClose(index) {
    console.log(index);
    tags.splice(index, 1);
    tags = [...tags];
  }
  function handleAdd(e) {
    inputVisible = true;
  }
  function handleInputEnter(e) {
    const val = e.detail;
    if (val && !tags.some((item) => item.name === val)) {
      tags.push({ name: val, type: 'default', showClose: true });
    }
    tags = [...tags];
    inputVisible = false;
  }

  let tags = [
    {
      name: '可删除标签可删除标签',
      type: 'default',
      showClose: true,
      maxWidth: 100,
    },
    {
      name: '可删除标签可删除标签',
      type: 'default',
      icon: 'discount',
      showClose: true,
      maxWidth: 100,
    },
    {
      name: '可删除标签',
      type: 'default',
      showClose: true,
      disabled: true,
    },
  ];
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tag-base tdesign-demo-item--tag">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <div class="fl">
          <TTag theme="primary" closable>标签一</TTag>
          <TTag theme="success" closable>标签二</TTag>
          <TTag theme="warning" closable>标签三</TTag>
          <TTag theme="danger" closable>标签四</TTag>
        </div>
        <div class="fl">
          <TTag theme="primary" variant="light" closable>标签一</TTag>
          <TTag theme="success" variant="light" closable>标签二</TTag>
          <TTag theme="warning" variant="light" closable>标签三</TTag>
          <TTag theme="danger" variant="light" closable>标签四</TTag>
        </div>
        <div class="fl">
          <TTag variant="outline" theme="primary" closable>标签一</TTag>
          <TTag variant="outline" theme="success" closable>标签二</TTag>
          <TTag variant="outline" theme="warning" closable>标签三</TTag>
          <TTag variant="outline" theme="danger" closable>标签四</TTag>
        </div>
        <div class="fl">
          {#each tags as tag, index}
            <TTag
              theme={tag.type}
              closable={tag.showClose}
              disabled={!!tag.disabled}
              maxWidth={tag.maxWidth}
              on:close={() => handleClose(index)}
            >
              {tag.name}
              {#if tag.icon}
                <TIcon slot="icon" name={tag.icon}></TIcon>
              {/if}
            </TTag>
          {/each}
        </div>
        <div class="fl">
          {#if !inputVisible}
            <TTag on:click={handleAdd}>
              <TIcon name="add" />
              添加标签
            </TTag>
          {:else}
            <TInput size="small" style="width: 94px" on:enter={handleInputEnter} />
          {/if}
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl {
    display: inline-flex;
    gap: 16px;
  }
</style>
