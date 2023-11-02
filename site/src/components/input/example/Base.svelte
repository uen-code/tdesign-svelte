<script>
  import {TInput} from 'tdesign-svelte'
  import {SearchIcon} from "tdesign-svelte-icon";

  const value = '有默认值'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-base tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TInput/>
        <TInput {value} placeholder="请输入内容（有默认值）"/>
        <!-- label/suffix/suffixIcon 支持同名插槽 -->
        <TInput label="价格：" suffix="元"/>
        <TInput label="姓名：" placeholder="按后置图标进行搜索">
          <SearchIcon slot="suffixIcon" style="cursor: pointer"/>
        </TInput>
      </div>
    </div>
  </td-doc-demo>
</div>
