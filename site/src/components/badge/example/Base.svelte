<script>
  import { TBadge } from 'tdesign-svelte';
  import { UserIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--badge-base tdesign-demo-item--badge">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 24px">
        <div class="fl">
          <TBadge dot count="2">
            <div class="badge-block"></div>
          </TBadge>
        </div>
        <div class="fl">
          <TBadge dot count="99">解锁新徽章</TBadge>
        </div>
        <div class="fl">
          <TBadge dot count="100">
            <UserIcon size="24" />
          </TBadge>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .badge-block {
    width: 40px;
    height: 40px;
    background: #eeeeee;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .fl {
    display: flex;
    align-items: center;
  }
</style>
