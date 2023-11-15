<script>
  import { TForm, TFormItem, TInput, TSwitch, TRadioGroup, TRadio, TCheckboxGroup, TButton } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;

  const courseOptions = [
    { label: '语文', value: '1' },
    { label: '数学', value: '2' },
    { label: '英语', value: '3' },
  ];

  let formData = {
    name: '',
    tel: '',
    gender: '',
    course: [],
    status: false,
  };

  function handleClick() {
    console.log('form', formData);
  }
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--form-base tdesign-demo-item--form">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <TForm data="formData" colon>
          <TFormItem label="姓名" name="name">
            <TInput bind:value={formData.name} placeholder="请输入内容"></TInput>
          </TFormItem>

          <TFormItem label="手机号码" name="tel">
            <TInput bind:value={formData.tel} placeholder="请输入内容"></TInput>
          </TFormItem>

          <TFormItem label="接收短信" name="status">
            <TSwitch bind:value={formData.status}></TSwitch>
          </TFormItem>

          <TFormItem label="性别" name="gender">
            <TRadioGroup bind:value={formData.gender}>
              <TRadio value="1">男</TRadio>
              <TRadio value="2">女</TRadio>
            </TRadioGroup>
          </TFormItem>

          <TFormItem label="课程" name="course">
            <TCheckboxGroup bind:value={formData.course} options={courseOptions}></TCheckboxGroup>
          </TFormItem>

          <TFormItem>
            <div style="display: inline-flex;gap:16px">
              <TButton theme="primary" type="submit" on:click={handleClick}>提交</TButton>
              <TButton theme="default" variant="base" type="reset">重置</TButton>
            </div>
          </TFormItem>
        </TForm>
      </div>
    </div>
  </td-doc-demo>
</div>
