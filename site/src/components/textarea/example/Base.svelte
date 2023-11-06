<script>
  import {TTextarea} from 'tdesign-svelte'


  let value = ''
  let value2 = ''
  let value3 = ''

  const autosize = {minRows: 3, maxRows: 5}
  const placeholder = "请输入文案，高度可自适应，最小3行，最大5行；autosize{minRows: 3, maxRows: 5}"

  const onChange = (e) => {
    console.log('value: ', e);
  };
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--textarea-base tdesign-demo-item--textarea">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;flex-direction:column;gap: 16px">
        <TTextarea bind:value={value} placeholder="请输入描述文案" on:change={onChange}/>

        <TTextarea
          bind:value={value2}
          placeholder="请输入文案，高度可自适应；autosize=true"
          autosize
        />

        <TTextarea
          bind:value={value3}
          {placeholder}
          {autosize}
        />
      </div>
    </div>
  </td-doc-demo>
</div>
