<script>
  import { SIZE_ENUM } from '../config.js';
  import { getClassString, SIZE, STATUS, usePrefixClass } from '../common.js';
  import { afterUpdate, createEventDispatcher, onMount, setContext } from 'svelte';
  import TRadio from './Radio.svelte';
  import { isNumber, isString } from '../utils/lodash';

  import { RadioGroupStore } from './useRadio.js';

  const COMPONENT_NAME = usePrefixClass('radio-group');
  const radioBtnName = usePrefixClass('radio-button');

  const dispatch = createEventDispatcher();

  let radioGroupNode;
  onMount(() => {
    calcBarStyle();
  });

  afterUpdate(() => {
    calcBarStyle();
  });

  /** 是否允许取消选中 */
  export let allowUncheck = false;
  /** 是否禁用全部子单选框。默认为 false。RadioGroup.disabled 优先级低于 Radio.disabled */
  export let disabled = false;
  /** 组件尺寸 */
  export let size = SIZE_ENUM.medium;
  /** 选中的值 */
  export let value = undefined;
  /** 选中的值，非受控属性 */
  export let defaultValue = undefined;
  /** 单选组件按钮形式 */
  export let variant = 'outline';
  /** 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同 */
  export let options = [];
  /** HTML 元素原生属性 */
  export let name = undefined;

  const radioGroupStore = RadioGroupStore(value || defaultValue, disabled, allowUncheck);
  setContext('radioGroupStore', radioGroupStore);

  let barStyle = `width:0px;height:0px;left:0px;top:0px`;
  const calcBarStyle = () => {
    if (variant === 'outline') return;
    const checkedRadio = radioGroupNode.querySelector(checkedClassName);
    if (!checkedRadio) return;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = checkedRadio;
    barStyle = `width:${offsetWidth}px;height:${offsetHeight}px;left:${offsetLeft}px;top:${offsetTop}px`;
  };

  // handle
  radioGroupStore.radioValue.subscribe((val) => {
    if (val) value = val;
    dispatch('change', value);
  });

  // compute
  $: checkedClassName = `.${radioBtnName}.${STATUS.checked}`;
  $: {
    if (options && options.length > 0) {
      options = options.map((option) => {
        if (isNumber(option) || isString(option)) {
          return { value: option, label: option.toString() };
        }
        return option;
      });
    }
  }

  // class
  $: groupClass = {
    [COMPONENT_NAME]: true,
    [SIZE[size]]: true,
    [`${COMPONENT_NAME}__outline`]: variant === 'outline',
    [`${COMPONENT_NAME}--filled`]: variant.includes('filled'),
    [`${COMPONENT_NAME}--primary-filled`]: variant === 'primary-filled',
  };
</script>

<div bind:this={radioGroupNode} class={getClassString(groupClass)}>
  {#if options && options.length > 0}
    {#each options as option, index}
      <TRadio {...option} />
    {/each}
  {:else}
    <slot />
    {#if variant.includes('filled') && value}
      <div style={barStyle} class={`${COMPONENT_NAME}__bg-block`}></div>
    {/if}
  {/if}
</div>
