<script>
  import { TSwitch } from 'tdesign-svelte';
  import { CheckIcon, CloseIcon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.describe;

  const checked = true;
  const label = ['开', '关'];
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--switch-describe tdesign-demo-item--switch">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;flex-direction:column;gap: 16px">
        <div class="fl">
          <TSwitch {checked} size="large" {label} />
          <TSwitch size="large" {label} />
        </div>
        <div class="fl">
          <TSwitch {checked} size="large">
            <CheckIcon slot="labelOpen" />
            <CloseIcon slot="labelClose" />
          </TSwitch>
          <TSwitch size="large">
            <CheckIcon slot="labelOpen" />
            <CloseIcon slot="labelClose" />
          </TSwitch>
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
