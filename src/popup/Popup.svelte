<script>
  import { getClassString, STATUS, usePrefixClass } from '../common.js';
  import isString from '../utils/lodash/isString.js';
  import { onMount } from 'svelte';
  import { autoUpdate, computePosition, flip } from '@floating-ui/dom';

  import './style/css';

  const COMPONENT_NAME = usePrefixClass('popup');

  // 位置拼接 floating-ui 需要的位置参数为 top-start bottom-end
  function getPopperPlacement(placement) {
    return placement.replace(/-(left|top)$/, '-start').replace(/-(right|bottom)$/, '-end');
  }

  let triggerNode;
  let popupNode;
  // onMount
  onMount(() => {});

  /** 浮层出现位置 */
  export let placement = 'top';
  /** 是否显示浮层箭头 */
  export let showArrow = false;
  /** 触发浮层出现的方式 */
  export let trigger = 'hover';
  /** 浮层内容 */
  export let content = '';
  /** 禁止点击 */
  export let disabled = false;

  let popper = false;

  // handle
  function handleHoverTrigger(action) {
    [
      ['mouseenter', show],
      ['mouseleave', hide],
      ['focus', show],
      ['blur', hide],
    ].forEach(([event, listener]) => {
      if (action === 'add') {
        triggerNode.addEventListener(event, listener);
      } else {
        triggerNode.removeEventListener(event, listener);
      }
    });
  }

  $: {
    if (trigger === 'hover') {
      if (triggerNode) {
        triggerNode.removeEventListener('click', clickTrigger);
        handleHoverTrigger('add');
      }
    } else {
      if (triggerNode) {
        handleHoverTrigger('remove');
        triggerNode.addEventListener('click', clickTrigger);
      }
    }
  }

  function updatePopper() {
    if (!popupNode || !triggerNode) return;
    computePosition(triggerNode, popupNode, {
      placement: getPopperPlacement(placement),
      middleware: [flip()],
    }).then(({ x, y }) => {
      Object.assign(popupNode.style, {
        position: 'absolute',
        margin: '0px',
        transform: `translate3d(${x}px, ${y}px, 0px)`,
        visibility: !popper ? 'hidden' : 'visible',
      });
    });
  }

  let clean;

  function autoPopper() {
    if (!popper && clean) {
      clean();
      updatePopper();
      return;
    }
    clean = autoUpdate(triggerNode, popupNode, updatePopper, {
      ancestorResize: false,
      elementResize: false,
    });
  }

  function clickTrigger() {
    popper = !popper;
    autoPopper();
  }

  function show() {
    popper = !popper;
    autoPopper();
  }

  function hide() {
    popper = !popper;
    autoPopper();
  }

  // class
  $: popupContentClasses = {
    [`${COMPONENT_NAME}__content`]: true,
    [`${COMPONENT_NAME}__content--text`]: isString(content),
    [`${COMPONENT_NAME}__content--arrow`]: showArrow,
    [`${STATUS.disabled}`]: disabled,
  };
</script>

<div>
  <div style="position: absolute; top: 0; left: 0; width: 100%;" class:show={!popper}>
    <div class={COMPONENT_NAME} bind:this={popupNode} data-popper-placement={getPopperPlacement(placement)}>
      <div class={getClassString(popupContentClasses)}>
        {content}
        {#if showArrow}
          <div class={`${COMPONENT_NAME}__arrow`}></div>
        {/if}
      </div>
    </div>
  </div>
  <div bind:this={triggerNode}>
    <slot />
  </div>
</div>

<style>
  .show {
    display: none;
  }
</style>
