<script>
  import {TRadioGroup, TRadio} from 'tdesign-svelte'

  const options = [
    {
      value: '1',
      label: '选项一',
      disabled: true,
    },
    {
      value: '2',
      label: '选项二',
    },
    {
      value: '3',
      label: '选项三',
    },
    {
      value: '4',
      label: '选项四',
    },
  ]
  let value = '2';
  const itemOptions = ['选项一', '选项二', '选项三', '选项四'];

  function onChange(e) {
    console.log("change", value)
  }
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--radio-size tdesign-demo-item--radio">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;flex-direction:column;gap: 16px" class="fl">
        <div>
          <TRadioGroup bind:value allowUncheck name="city" {options} on:change={onChange}></TRadioGroup>
        </div>
        <div>
          <TRadioGroup defaultValue="选项一" options={itemOptions} name="city"></TRadioGroup>
        </div>
        <div>
          <TRadioGroup defaultValue="1">
            <TRadio value="1">选项一</TRadio>
            <TRadio value="2">选项二</TRadio>
            <TRadio value="3">选项三</TRadio>
            <TRadio value="4" disabled>选项四</TRadio>
          </TRadioGroup>
        </div>
        <h5>可取消选中单选框组</h5>
        <div>
          <TRadioGroup defaultValue="3">
            <TRadio allowUncheck value="1">可取消选中项一</TRadio>
            <TRadio allowUncheck value="2">可取消选中项二</TRadio>
            <TRadio allowUncheck value="3">可取消选中项三</TRadio>
            <TRadio value="4">不可取消选中项</TRadio>
          </TRadioGroup>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>

<style>
  .fl>div{
    margin-bottom: 16px;
  }
</style>