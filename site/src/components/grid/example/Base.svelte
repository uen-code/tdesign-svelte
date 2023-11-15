<script>
  import { TRow, TCol } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;

  const demoCols = [
    Array(12).fill(1),
    Array(6).fill(2),
    Array(4).fill(3),
    Array(3).fill(4),
    Array(2).fill(6),
    Array(1).fill(12),
  ];
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-base tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      {#each demoCols as cols, i}
        <TRow>
          {#each cols as col}
            <TCol span={col}>
              <div>{col}</div>
            </TCol>
          {/each}
        </TRow>
      {/each}
    </div>
  </td-doc-demo>
</div>
