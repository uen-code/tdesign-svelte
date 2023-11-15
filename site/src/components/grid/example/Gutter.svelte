<script>
  import { TRow, TCol } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.gutter;

  const demoCols = Array(8).fill(3);
  const gutterObj = { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 };
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--grid-gutter tdesign-demo-item--grid">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <!-- 只指定水平 gutter，垂直默认为0 -->
        <span>水平 gutter 为固定值</span>
        <TRow gutter="16">
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
        </TRow>
        <!-- 水平 gutter 为响应式 -->
        <span>水平 gutter 为响应式</span>
        <TRow gutter={gutterObj}>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
          <TCol span="3">
            <div>col-3</div>
          </TCol>
        </TRow>
        <!-- 指定水平和垂直 gutter，注：垂直 gutter 只在同一个row组件下面的col组件之间生效 -->
        <span>水平和垂直 gutter 均为固定值</span>
        <TRow gutter={[16, 24]}>
          {#each demoCols as col, i}
            <TCol span={col}>
              <div>col-3</div>
            </TCol>
          {/each}
        </TRow>
        <!-- 水平 gutter 响应式，垂直 gutter 固定值-->
        <span>水平 gutter 响应式，垂直 gutter 固定值</span>
        <TRow gutter={[gutterObj, 24]}>
          {#each demoCols as col, i}
            <TCol span={col}>
              <div>col-3</div>
            </TCol>
          {/each}
        </TRow>
        <!-- 水平和垂直 gutter 均为响应式 -->
        <span>水平和垂直 gutter 均为响应式</span>
        <TRow gutter={[gutterObj, gutterObj]}>
          {#each demoCols as col, i}
            <TCol span={col}>
              <div>col-3</div>
            </TCol>
          {/each}
        </TRow>
      </div>
    </div>
  </td-doc-demo>
</div>
