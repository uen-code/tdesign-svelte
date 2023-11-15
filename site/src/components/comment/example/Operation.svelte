<script>
  import { TComment, TIcon } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.operation;

  const operations = [
    { content: '6', icon: 'thumbUp' },
    { content: '回复', icon: 'chat' },
  ];
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--comment-operation tdesign-demo-item--comment">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TComment
        avatar="https://tdesign.gtimg.com/site/avatar.jpg"
        author="评论作者名"
        datetime="今天16:38"
        content="这里是评论者写的评论内容。"
        actions={operations}
      >
        <div slot="action" let:action style="gap: 6px;display: inline-flex">
          <div>
            <TIcon name={action.icon} />
          </div>
          <div>
            <span>{action.content}</span>
          </div>
        </div>
      </TComment>
    </div>
  </td-doc-demo>
</div>
