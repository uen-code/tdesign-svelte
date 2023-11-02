<script>
  import {TInput} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-base tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap:80px;">
        <div class="fl">
          <div>
            <TInput disabled defaultValue="禁用状态"/>
          </div>
          <div>
            <TInput readonly defaultValue="只读状态"/>
          </div>
        </div>
        <div class="fl">
          <div>
            <TInput defaultValue="普通状态"/>
          </div>
          <div>
            <TInput status="success" defaultValue="成功状态"/>
          </div>
          <div>
            <TInput status="warning" defaultValue="警告状态"/>
          </div>
          <div>
            <TInput status="error" defaultValue="错误状态"/>
          </div>
        </div>
        <div class="fl">
          <div>
            <TInput defaultValue="普通状态" tips="这是普通文本提示"/>
          </div>
          <div>
            <TInput status="success" defaultValue="成功状态" tips="校验通过文本提示"/>
          </div>
          <div>
            <TInput status="warning" defaultValue="警告状态" tips="校验不通过文本提示"/>
          </div>
          <div>
            <TInput status="error" defaultValue="错误状态" tips="校验存在严重问题文本提示"/>
          </div>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl {
    display: inline-flex;
    flex-direction: column;
    gap: 16px
  }

  .fl > div {
    margin-bottom: 12px;
  }
</style>

