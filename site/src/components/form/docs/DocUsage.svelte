<script>
  import configJson from '../config/config.json';
  import propJson from '../config/props.json';
  import { onMount } from 'svelte';
  import { TForm, TFormItem, TInput, TCheckboxGroup } from 'tdesign-svelte';
  import { codeReplace } from '../../../common.js';

  const baseCode = configJson.base.code;
  // 初始化dom
  let usageNode;
  onMount(() => {
    usageNode.configList = propJson;
    usageNode.panelList = configJson.base.panelList;
    usageNode.addEventListener('ConfigChange', onConfigChange);
  });

  let changedProps = {};
  let usageCode = codeReplace(baseCode, changedProps);

  function onConfigChange(e) {
    const { name, value } = e.detail;
    changedProps[name] = value;
    usageCode = codeReplace(baseCode, changedProps);
  }

  const options = [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { value: '1', label: '语文' },
    { value: '2', label: '数学' },
    { value: '3', label: '英语' },
    { value: '4', label: '体育' },
  ];
</script>

<td-doc-usage bind:this={usageNode} code={usageCode}>
  <div slot="form" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <TForm {...changedProps}>
      <TFormItem label="姓名" name="name">
        <TInput placeholder="请输入内容" />
      </TFormItem>
      <TFormItem label="手机号码" name="tel">
        <TInput placeholder="请输入内容" />
      </TFormItem>
      <TFormItem label="课程" name="course">
        <TCheckboxGroup {options}></TCheckboxGroup>
      </TFormItem>
    </TForm>
  </div>
</td-doc-usage>
