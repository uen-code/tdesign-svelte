<script>

  import {SIZE, getClassString, usePrefixClass} from "../common.js";
  import GradientIcon from "./icon/GradientIcon.svelte";

  import './style/css'
  import {SIZE_ENUM} from "../config.js";

  // 获取样式并解构
  const classPrefix = usePrefixClass();
  const useComponentClassName = () => {
    return {
      COMPONENT_NAME: usePrefixClass('loading'),
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
    COMPONENT_NAME,
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
  export let size = SIZE_ENUM.medium
  /** 加载提示文案 */
  export let text = undefined

  export let className = '';
  export let style = '';

  // classes
  $: baseClasses = {
    [className]: className,
    [centerClass]: true,
    [SIZE[size]]: true,
  }
  $: fullScreenClasses = `${COMPONENT_NAME} ${fullscreenClass} ${centerClass} ${overlayClass}`
  $: attachClasses = `${getClassString(baseClasses)} ${COMPONENT_NAME} ${fullClass}`
  $: withContentClasses = `${getClassString(baseClasses)} ${COMPONENT_NAME} ${fullClass}`
  $: normalClasses = `${getClassString(baseClasses)} ${COMPONENT_NAME}`
</script>
<div class={normalClasses} {style}>
  <GradientIcon />
  {#if text}
    {text}
  {/if}
</div>