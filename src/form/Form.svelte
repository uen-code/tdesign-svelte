<script>
  import './style/css';
  import { useClassName } from './useForm.js';
  import { onMount, setContext } from 'svelte';
  import { getClassString } from '../common.js';

  const { form, inline } = useClassName();

  let formNode;
  onMount(() => {});

  /** 是否在表单标签字段右侧显示冒号 */
  export let colon = false;
  /** 表单数据 */
  export let data = {};
  /** 表单布局，有两种方式：纵向布局 和 行内布局 */
  export let layout = 'vertical';
  /** 是否禁用整个表单 */
  export let disabled = false;
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  export let labelAlign = 'right';
  /** 可以整体设置label标签宽度，默认为100px */
  export let labelWidth = '100px';

  export let className = '';
  export let style = '';

  setContext('form', { labelAlign, labelWidth, colon });

  // class
  $: formClass = {
    [className]: className,
    [form]: true,
    [inline]: layout === 'inline',
  };
</script>

<form bind:this={formNode} class={getClassString(formClass)}>
  <slot />
</form>
