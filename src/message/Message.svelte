<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import {
    TCheckCircleFilledIcon, TCloseIcon, TErrorCircleFilledIcon,
    THelpCircleFilledIcon, TInfoCircleFilledIcon,
  } from "../common-components/icon";
  import TLoading from "../loading/Loading.svelte";

  const COMPONENT_NAME = usePrefixClass('message');
  const classPrefix = usePrefixClass();

  import './style/css'

  /** 主题 */
  export let theme = 'info'
  /** 消息内容 */
  export let content = ''
  /** 是否有关闭按钮 */
  export let closeBtn = false

  // class
  $: messageClasses = {
    [COMPONENT_NAME]: true,
    [`${classPrefix}-is-${theme}`]: theme,
    [`${classPrefix}-is-closable`]: closeBtn
  }

  // icon
  const Icon = {
    info: TInfoCircleFilledIcon,
    success: TCheckCircleFilledIcon,
    warning: TErrorCircleFilledIcon,
    error: TErrorCircleFilledIcon,
    question: THelpCircleFilledIcon,
    loading: TLoading
  }[theme]
</script>

<div class={getClassString(messageClasses)}>
  <Icon/>
  <slot/>
  {#if closeBtn}
    <span class={`${COMPONENT_NAME}__close`}>
      <TCloseIcon/>
    </span>
  {/if}
</div>


