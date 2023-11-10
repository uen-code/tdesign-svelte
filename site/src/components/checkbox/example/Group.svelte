<script>
  import {TCheckboxGroup, TCheckbox, TButton} from 'tdesign-svelte'

  let value1 = ['选项一']
  let value2 = ['选项一', '选项二', '选项三'];
  const handleSelectAll = (e) => {
    value1 = e.detail ? ['选项一', '选项二', '选项三'] : [];
  };
  const options1 = [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    {value: '选项一', label: '选项一'},
    {value: '选项二', label: '选项二'},
    {value: '选项三', label: '选项三'},
  ];
  let indeterminate = false
  $: indeterminate = options1.length > value1.length && value1.length > 0
  $: checkAll = options1.length === value1.length

  const options2 = [
    {label: '全选', checkAll: true},
    // html attribute: title, hover to see more label text info
    {value: '选项一', label: '选项一', title: '选项一'},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    {value: '选项二', label: '选项二'},
    {value: '选项三', label: '选项三'},
  ];

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--checkbox-group tdesign-demo-item--checkbox">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <p>方式一：业务侧自定义全选功能。选中值: { value1}</p>
        <TCheckbox checked={checkAll} indeterminate="{indeterminate}" on:change="{handleSelectAll}">全选</TCheckbox>
        <TCheckboxGroup options="{options1}" bind:value={value1} name="city"></TCheckboxGroup>

        <br/>
        <p>方式三：组件内置全选功能，使用 `options` 定义选项。选中值: {value2}</p>
        <TCheckboxGroup bind:value={value2} options={options2}/>
      </div>
    </div>
  </td-doc-demo>
</div>
