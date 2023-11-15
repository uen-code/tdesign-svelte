<script>
  import { TInput, TInputAdornment } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.addon;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-addon tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TInputAdornment prepend="http://">
          <TInput placeholder="请输入内容" />
        </TInputAdornment>

        <TInputAdornment append=".com">
          <TInput placeholder="请输入内容" />
        </TInputAdornment>

        <TInputAdornment prepend="http://" append=".com">
          <TInput placeholder="请输入内容" />
        </TInputAdornment>
      </div>
    </div>
  </td-doc-demo>
</div>
