<script>
  import {TCard} from 'tdesign-svelte'

  const title = '标题';
  const infoMessage = `仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。`;

  const bordered = false
  const clickHandler = (e) => {
    console.log("点击操作", e)
  }
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--card-bordered tdesign-demo-item--card">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div class="demo-card">
        <TCard {title} style="width: 400px" {bordered}>
          {infoMessage}
          <a class="a-not" slot="actions" href="javascript:void(0)" on:click="{clickHandler}">操作</a>
        </TCard>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .demo-card {
    padding: 16px;
    background-color: var(--td-bg-color-container-hover);
  }

  .a-not {
    line-height: 24px;
    text-decoration: none;
    color: var(--text-interactive);
  }
</style>