<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import FakeArrow from "../common-components/icon/FakeArrow.svelte";

  import './style/index.css'

  const componentName = usePrefixClass()
  const transitionClass = usePrefixClass('slide-down');

  /** 接收父组件属性 */
  export let expandType = undefined
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

  const paddingLeft = '60'

  const submenuClass = {
    [`${componentName}-menu__item`]: true,
    [`${componentName}-menu__item-spacer`]: true,
    [`${componentName}-menu__item-spacer--${isHead ? 'bottom' : 'right'}`]: true,

    [`${componentName}-is-disabled`]: disabled,
    [`${componentName}-is-opened`]: true,
    [`${componentName}-is-active`]: activeValue === value,
  }

  const subClass = {
    [`${componentName}-menu__sub`]: true,
    [`${componentName}-is-opened`]: true,
  }

  const arrowClass = {
    [`${componentName}-fake-arrow--active`]: true,
  }

</script>

<div class={getClassString(submenuClass)}>
  <slot name="icon"></slot>
  {#if title}
    <span class={`${componentName}-menu__content`}>{title}</span>
  {/if}
  {#if $$slots.default}
    <FakeArrow
      overlayClassName={getClassString(arrowClass)}
      overlayStyle={{transform: `rotate(0deg)`}}
    />
  {/if}
</div>

<ul class={getClassString(subClass)} style={{ '--padding-left': `${paddingLeft}px` }}>
  <slot></slot>
</ul>