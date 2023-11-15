<script>
  import { usePrefixClass } from '../common.js';
  import { isNil, isObject, isUndefined } from '../utils/lodash/index.js';
  import TCheckbox from './Checkbox.svelte';
  import { setContext } from 'svelte';
  import { CheckboxStore } from './useCheckbox.js';

  const COMPONENT_NAME = usePrefixClass('checkbox-group');

  /** 是否禁用组件，默认为 false。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled */
  export let disabled = false;
  /** 只读 */
  export let readonly = false;
  /** 支持最多选中的数量 */
  export let max = undefined;
  /** 统一设置内部复选框 HTML 属性 */
  export let name = '';
  /** 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」 */
  export let options = [];
  /** 选中值 */
  export let value = [];

  export let className = '';
  export let style = '';

  const checkboxStore = CheckboxStore(value);
  setContext('checkboxStore', checkboxStore);

  const optionList = options
    ? options.map((item) => {
        return isObject(item) ? item : { label: String(item), value: item };
      })
    : [];
  const siftList = optionList.filter((item) => !item.disabled && !item.checkAll).map((t) => t.value);
  setContext('siftList', siftList);

  // handle
  const getAllCheckboxValue = () => {
    const val = new Set();
    for (let i = 0, len = optionList.length; i < len; i++) {
      const item = optionList[i];
      if (item.checkAll) continue;
      if (item.disabled) continue;
      val.add(item.value);
      if (maxExceeded.value) break;
    }
    return [...val];
  };

  // handle
  const handleCheckboxChange = (checked, checkAll, currentValue) => {
    if (checkAll) {
      value = checked ? getAllCheckboxValue() : [];
    } else {
      checked ? value.push(currentValue) : value.splice(value.indexOf(currentValue), 1);
      value = [...value];
    }
    checkboxStore.setCheckboxGroupValue(value);
  };
  setContext('handleCheckboxChange', handleCheckboxChange);

  // compute
  // todo 限制选中数量 逻辑
  $: maxExceeded = !isUndefined(max) && !isNil(max * 1) && value.length === max * 1;
</script>

<div class="{COMPONENT_NAME} {className}" {style} role="group" aria-label="checkbox-group">
  {#if optionList.length}
    {#each optionList as option, index}
      <TCheckbox
        {readonly}
        checked={value?.includes(option.value)}
        value={option.value}
        label={option.label}
        checkAll={option.checkAll}
      ></TCheckbox>
    {/each}
  {/if}
</div>
