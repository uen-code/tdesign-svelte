<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import FakeArrow from "../common-components/FakeArrow.svelte";
  import { slide } from 'svelte/transition';
  import {SUB_MENU_ID} from "./useMenu.js";

  import './style/css'
  import {getContext, onMount} from "svelte";
  import useRipple from "../hooks/useRipple.js";

  const classPrefix = usePrefixClass()
  const TRANSITION_CLASS = usePrefixClass('slide-down');

  let subNode;
  let node;
  onMount(() => {
    useRipple(subNode)
    calculateLeft(node)
  })

  /** 子菜单展开的导航集合 */
  const open = getContext('open')
  const menuExpand = getContext('menuExpand')

  export let isHead = false
  export let activeValue = undefined

  /** 禁止点击 */
  export let disabled = false
  /** 菜单图标 */
  export let icon = undefined
  /** 菜单唯一标识 */
  export let value = undefined
  /** 菜单内容 */
  export let title = undefined

  let isOpen = false

  function handleClick() {
    open(value)
  }

  menuExpand.subscribe(expandValues => {
    isOpen = expandValues && expandValues.includes(value);
  })

  let paddingLeft = 44

  // 计算left
  function calculateLeft(el) {
    // 检查是否有父节点
    const parentElement = el.parentNode
    if (parentElement && parentElement.id === SUB_MENU_ID) {
      paddingLeft += 16
    }
  }

  // class
  $: submenuClass = {
    [`${classPrefix}-menu__item`]: true,
    [`${classPrefix}-menu__item-spacer`]: true,
    [`${classPrefix}-menu__item-spacer--${isHead ? 'bottom' : 'right'}`]: true,
    [`${classPrefix}-is-disabled`]: disabled,
    [`${classPrefix}-is-opened`]: isOpen,
    [`${classPrefix}-is-active`]: activeValue === value,
  }
  $: subClass = {
    [`${classPrefix}-menu__sub`]: true,
    [`${classPrefix}-is-opened`]: isOpen,
  }
  $: arrowClass = {
    [`${classPrefix}-fake-arrow--active`]: isOpen,
  }
</script>

<div class={getClassString(submenuClass)} on:click={handleClick} bind:this={subNode}>
  <slot name="icon"></slot>
  {#if title}
    <span class={`${classPrefix}-menu__content`}>{title}</span>
  {/if}
  {#if $$slots.default}
    <FakeArrow
      overlayClassName={getClassString(arrowClass)}
      overlayStyle={`transform: rotate(0deg)`}
    />
  {/if}
</div>

<div bind:this={node} >
  {#if isOpen}
    <ul in:slide="{{duration: 300}}" out:slide={{duration: 200}} id="{SUB_MENU_ID}"
        class={getClassString(subClass)}
        style={`--padding-left: ${paddingLeft}px`}>
      <slot></slot>
    </ul>
  {/if}
</div>
