<script>
  import { TCard, TSpace } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.vertical;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--space-vertical tdesign-demo-item--space">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TSpace direction="vertical">
        <TCard title="标题" header bordered hoverShadow>
          <span slot="actions">操作</span>
          仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
        </TCard>
        <TCard title="标题" header bordered hoverShadow>
          <span slot="actions">操作</span>
          仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
        </TCard>
        <TCard title="标题" header bordered hoverShadow>
          <span slot="actions">操作</span>
          仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
        </TCard>
      </TSpace>
    </div>
  </td-doc-demo>
</div>
