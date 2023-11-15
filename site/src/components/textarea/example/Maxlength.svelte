<script>
  import { TTextarea } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.maxlength;

  let value = '';
  let value2 = '';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--textarea-maxlength tdesign-demo-item--textarea">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;flex-direction:column;gap: 16px">
        <TTextarea
          bind:value
          placeholder="请输入描述文案，文本长度最多20，maxlength=20"
          tips="这里可以放一些提示文字"
          maxlength="20"
        />

        <TTextarea
          bind:value={value2}
          placeholder="请输入描述文案，最多20字符（一个汉字占两个字符长度），maxcharacter=20"
          maxCharacter="20"
        />
      </div>
    </div>
  </td-doc-demo>
</div>
