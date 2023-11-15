<script>
  import { TCard } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.headerSubtitle;

  const title = '标题';
  const subtitle = '副标题';
  const infoMessage = `卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。`;

  const clickHandler = (e) => {
    console.log('点击操作', e);
  };
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-header-subtitle tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TCard {title} {subtitle} style="width: 400px">
        {infoMessage}
        <a class="a-not" slot="actions" href="javascript:void(0)" on:click={clickHandler}>操作</a>
      </TCard>
    </div>
  </td-doc-demo>
</div>

<style>
  .a-not {
    line-height: 24px;
    text-decoration: none;
    color: var(--text-interactive);
  }
</style>
