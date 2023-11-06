<script>
  import {TTextarea} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--textarea-type tdesign-demo-item--textarea">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;flex-direction:column;gap: 16px">
        <TTextarea disabled defaultValue="禁用状态"/>
        <TTextarea readonly defaultValue="只读状态"/>
        <TTextarea tips="这是普通文本提示" defaultValue="普通状态"/>
        <TTextarea status="success" tips="校验通过文本提示" defaultValue="成功状态"/>
        <TTextarea status="warning" tips="校验不通过文本提示" defaultValue="警告状态"/>
        <TTextarea status="error" tips="校验存在严重问题文本提示" defaultValue="错误状态"/>
      </div>
    </div>
  </td-doc-demo>
</div>
