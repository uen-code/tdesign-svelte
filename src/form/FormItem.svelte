<script>
  import { getFormItemClassName, useClassName } from './useForm.js';
  import { getClassString, getStyleString, usePrefixClass } from '../common.js';
  import { getContext } from 'svelte';
  import { isNil, isNumber } from '../utils/lodash/index.js';

  const COMPONENT_NAME = usePrefixClass('form-item');
  const { classPrefix, formItem, formItemWithHelp, formItemWithExtra, formItemLabel, controls, controlsContent } =
    useClassName();

  const form = getContext('form');

  /** 表单字段名称 */
  export let name = '';
  /** 校验状态，可在需要完全自主控制校验状态时使用 */
  export let status = '';
  /** 字段标签名称 */
  export let label = '';
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign */
  export let labelAlign = 'right';
  /** 可以整体设置标签宽度，优先级高于 Form.labelWidth */
  export let labelWidth = undefined;

  // compute
  $: hasLabel = label || $$slots.label;
  $: hasColon = !!(form?.colon && hasLabel);
  $: labelAlignValue = isNil(labelAlign) ? form?.labelAlign : labelAlign;
  $: labelWidthValue = isNil(labelWidth) ? form?.labelWidth : labelWidth;

  // style
  $: labelStyle =
    labelWidthValue && labelAlign.value !== 'top'
      ? isNumber(labelWidthValue)
        ? { width: `${labelWidthValue}px` }
        : { width: labelWidthValue }
      : {};
  $: contentStyle =
    labelWidthValue && labelAlign.value !== 'top'
      ? isNumber(labelWidthValue)
        ? { marginLeft: `${labelWidthValue}px` }
        : { marginLeft: labelWidthValue }
      : {};

  // class
  const formItemNameClass = getFormItemClassName(formItem, name);
  $: formItemClass = {
    [formItem]: true,
    [formItemNameClass]: name,
    [formItemWithHelp]: $$slots.help,
    [formItemWithExtra]: $$slots.extra,
  };
  $: labelClass = {
    [formItemLabel]: true,
    [`${formItemLabel}--colon`]: hasColon,
    [`${formItemLabel}--top`]: hasLabel && (labelAlignValue === 'top' || !labelWidthValue),
    [`${formItemLabel}--left`]: labelAlignValue === 'left' && labelWidthValue,
    [`${formItemLabel}--right`]: labelAlignValue === 'right' && labelWidthValue,
  };
  $: contentClass = {
    [controls]: true,
  };
  $: tipsClass = {
    [`${COMPONENT_NAME}-tips`]: true,
    [`${classPrefix}-tips`]: true,
    [`${classPrefix}-is-${status || 'default'}`]: true,
  };
</script>

<div class={getClassString(formItemClass)}>
  <!-- label -->
  {#if Number(labelWidthValue) !== 0}
    <div class={getClassString(labelClass)} style={getStyleString(labelStyle)}>
      <label>
        {#if label}
          {label}
        {:else}
          <slot name="label" />
        {/if}
      </label>
    </div>
  {/if}

  <!-- content -->
  <div class={getClassString(contentClass)} style={getStyleString(contentStyle)}>
    <div class={controlsContent}>
      <slot />
    </div>
  </div>
</div>
