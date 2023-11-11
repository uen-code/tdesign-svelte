<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import FakeArrow from "../common-components/FakeArrow.svelte";
  import {slide} from 'svelte/transition';
  import {SUB_MENU_ID} from "./useMenu.js";

  import {getContext, onMount} from "svelte";
  import useRipple from "../hooks/useRipple.js";

  const classPrefix = usePrefixClass()
  const TRANSITION_CLASS = usePrefixClass('slide-down');

  const [,,menuExpands,setMenuExpands] = getContext('menuStore')

  let subNode;
  let node;
  onMount(() => {
    useRipple(subNode)
    calculateLeft(node)
  })

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
  menuExpands.subscribe((expands) => isOpen = expands.includes(value))

  function handleClick(e) {
    setMenuExpands(value)
  }

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
  <!-- icon -->
  <slot name="icon"></slot>

  <!-- menu content 菜单内容 -->
  {#if title}
    <span class={`${classPrefix}-menu__content`}>{title}</span>
  {/if}

  <!-- fake arrow 菜单右侧图标 -->
  {#if $$slots.default}
    <FakeArrow
      overlayClassName={getClassString(arrowClass)}
      overlayStyle={`transform: rotate(0deg)`}
    />
  {/if}
</div>

<!-- child menu item 子菜单 -->
<div bind:this={node}>
  {#if isOpen}
    <ul in:slide="{{duration: 300}}" out:slide={{duration: 200}} id="{SUB_MENU_ID}"
        class={getClassString(subClass)}
        style={`--padding-left: ${paddingLeft}px`}>
      <slot></slot>
    </ul>
  {/if}
</div>