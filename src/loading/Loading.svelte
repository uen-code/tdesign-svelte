<script>

  import {componentSize, getClassString, usePrefixClass} from "../common.js";
  import GradientIcon from "./icon/GradientIcon.svelte";

  import './style/index.css'

  // 获取样式并解构
  const classPrefix = usePrefixClass();
  const useComponentClassName = () => {
    return {
      componentName: usePrefixClass('loading'),
      centerClass: usePrefixClass('loading--center'),
      fullscreenClass: usePrefixClass('loading__fullscreen'),
      lockClass: usePrefixClass('loading--lock'),
      overlayClass: usePrefixClass('loading__overlay'),
      relativeClass: usePrefixClass('loading__parent'),
      fullClass: usePrefixClass('loading--full'),
      inheritColorClass: usePrefixClass('loading--inherit-color'),
    };
  };
  const {
    componentName,
    centerClass,
    fullscreenClass,
    lockClass,
    overlayClass,
    relativeClass,
    fullClass,
    inheritColorClass
  } =
    useComponentClassName();

  /** 尺寸 */
  export let size = 'medium'
  /** 加载提示文案 */
  export let text = undefined

  // classes
  $: baseClasses = {
    [centerClass]: true,
    [componentSize[size]]: true,
  }
  $: fullScreenClasses = `${componentName} ${fullscreenClass} ${centerClass} ${overlayClass}`
  $: attachClasses = `${getClassString(baseClasses)} ${componentName} ${fullClass}`
  $: withContentClasses = `${getClassString(baseClasses)} ${componentName} ${fullClass}`
  $: normalClasses = `${getClassString(baseClasses)} ${componentName}`
</script>
<div class={normalClasses}>
  <GradientIcon />
  {#if text}
    {text}
  {/if}
</div>