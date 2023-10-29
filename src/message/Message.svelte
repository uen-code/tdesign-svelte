<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import {
    CheckCircleFilledIcon, CloseIcon, ErrorCircleFilledIcon,
    HelpCircleFilledIcon, InfoCircleFilledIcon,
  } from "../icon";
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
  console.log("closeBt",closeBtn)

  // class
  $: messageClasses = {
    [COMPONENT_NAME]: true,
    [`${classPrefix}-is-${theme}`]: theme,
    [`${classPrefix}-is-closable`]: closeBtn
  }

  // icon
  $: Icon = {
    info: InfoCircleFilledIcon,
    success: CheckCircleFilledIcon,
    warning: ErrorCircleFilledIcon,
    error: ErrorCircleFilledIcon,
    question: HelpCircleFilledIcon,
    loading: TLoading
  }[theme]
</script>

<div class={getClassString(messageClasses)}>
  <Icon/>
  <slot/>
  {#if closeBtn}
    <span class={`${COMPONENT_NAME}__close`}>
      <CloseIcon/>
    </span>
  {/if}
</div>


