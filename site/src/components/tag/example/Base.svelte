<script>
  import { TTag } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;

  function handleClick(e) {
    console.log('click', e);
  }
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tag-base tdesign-demo-item--tag">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <div class="fl">
          <a href="https://www.tencent.com/zh-cn" target="_blank">
            <TTag>超链接</TTag>
          </a>
        </div>
        <div class="fl">
          <TTag on:click={handleClick}>灰标签</TTag>
          <TTag theme="primary">标签一</TTag>
          <TTag theme="success">标签二</TTag>
          <TTag theme="warning">标签三</TTag>
          <TTag theme="danger">标签四</TTag>
        </div>
        <div class="fl">
          <TTag variant="light">灰标签</TTag>
          <TTag theme="primary" variant="light">标签一</TTag>
          <TTag theme="success" variant="light">标签二</TTag>
          <TTag theme="warning" variant="light">标签三</TTag>
          <TTag theme="danger" variant="light">标签四</TTag>
        </div>
        <div class="fl">
          <TTag variant="outline">灰标签</TTag>
          <TTag theme="primary" variant="outline">标签一</TTag>
          <TTag theme="success" variant="outline">标签二</TTag>
          <TTag theme="warning" variant="outline">标签三</TTag>
          <TTag theme="danger" variant="outline">标签四</TTag>
        </div>
        <div class="fl">
          <TTag variant="light-outline">灰标签</TTag>
          <TTag theme="primary" variant="light-outline">标签一</TTag>
          <TTag theme="success" variant="light-outline">标签二</TTag>
          <TTag theme="warning" variant="light-outline">标签三</TTag>
          <TTag theme="danger" variant="light-outline">标签四</TTag>
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
