<script>
  import { TTag, TIcon } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.icon;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tag-icon tdesign-demo-item--tag">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <div>
          <TTag>
            <TIcon slot="icon" name="discount" />
            插槽图标
          </TTag>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
