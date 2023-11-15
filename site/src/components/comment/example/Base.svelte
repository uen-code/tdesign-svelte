<script>
  import { TComment } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--comment-base tdesign-demo-item--comment">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TComment
        avatar="https://tdesign.gtimg.com/site/avatar.jpg"
        author="评论作者名"
        datetime="今天16:38"
        content="这里是评论者写的评论内容。"
      />
    </div>
  </td-doc-demo>
</div>
