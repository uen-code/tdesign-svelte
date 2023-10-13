<script>
  import {componentSize, getClassString, usePrefixClass} from "../common.js";
  import {sizeEnum} from "../config.js";
  import tabBase from "./js/base.js"

  import ChevronLeft from "../common-components/icon/ChevronLeftIcon.svelte";
  import ChevronRight from "../common-components/icon/ChevronRightIcon.svelte";
  import TabNavBar from "./TabNavBar.svelte";
  import TabNavItem from "./TabNavItem.svelte";

  const {calculateCanToLeft, calculateCanToRight, calcScrollLeft, scrollToLeft, scrollToRight, moveActiveTabIntoView} =
    tabBase;
  const componentName = usePrefixClass('tabs');
  const classPrefix = usePrefixClass();

  /** 选项卡数据 */
  export let panels = []
  /** 选项卡主题 */
  export let theme = 'normal'
  /** 唯一标识 */
  export let value = undefined
  /** 选项卡位置 */
  export let placement = 'top'
  export let size = 'medium'
  export let disabled = false

  let scrollLeft = 0;
  let canToLeft = false;
  let canToRight = false;

  // els
  let navsContainerEl;
  let navsWrapEl;
  let leftOperationsEl;
  let toLeftBtnEl;
  let rightOperationsEl;
  let toRightBtnEl;
  let activeTabEl;
  const getEls = () => ({
    navsContainer: navsContainerEl,
    navsWrap: navsWrapEl,
    leftOperations: leftOperationsEl,
    toLeftBtn: toLeftBtnEl,
    rightOperations: rightOperationsEl,
    toRightBtn: toRightBtnEl,
  });

  // style
  $: wrapTransformStyle = () => {
    if (['left', 'right'].includes(placement.toLowerCase())) return {};
    return {
      transform: `translate3d(${-scrollLeft.value}px, 0, 0)`,
    };
  }

  // class
  $: iconBaseClass = {
    [`${componentName}__btn`]: true,
    [componentSize.medium]: size === 'medium',
    [componentSize.large]: size === 'large',
  }
  $: leftIconClass = {
    [`${componentName}__btn--left`]: true,
    ...iconBaseClass,
  }
  $: rightIconClass = {
    [`${componentName}__btn--right`]: true,
    ...iconBaseClass.value,
  }
  $: navContainerClass = {
    [`${componentName}__nav-container`]: true,
    [`${componentName}__nav--card`]: theme === 'card',
    [`${classPrefix}-is-${placement}`]: true,
    // [`${classPrefix}-is-addable`]: addable,
  }
  $: navScrollContainerClass = {
    [`${componentName}__nav-scroll`]: true,
    [`${classPrefix}-is-scrollable`]: canToLeft || canToRight,
  }
  $: navsWrapClass = {
    [`${componentName}__nav-wrap`]: true,
    [`${classPrefix}-is-smooth`]: true,
    [`${classPrefix}-is-vertical`]: placement === 'left' || placement === 'right'
  }

  // 计算滚动值
  const totalAdjust = () => {
    adjustArrowDisplay();
    adjustScrollLeft();
  };
  $: {
    totalAdjust();
  }
  const adjustScrollLeft = () => {
    scrollLeft = calcScrollLeft(getEls(), scrollLeft);
  };
  const adjustArrowDisplay = () => {
    canToLeft = calculateCanToLeft(getEls(), scrollLeft, placement);
    canToRight = calculateCanToRight(getEls(), scrollLeft, placement);
  };
  const handleScroll = (direction) => {
    if (direction === 'left') {
      scrollLeft.value = scrollToLeft(getEls(), scrollLeft.value);
    } else {
      scrollLeft.value = scrollToRight(getEls(), scrollLeft.value);
    }
  };
</script>
<div bind:this={navsContainerEl} class={`${componentName}__nav`}>
  <!-- left nav -->
  <div
    bind:this={leftOperationsEl}
    class="{`${componentName}__operations`} {`${componentName}__operations--left`}"
  >
    {#if canToLeft}
      <div bind:this={toLeftBtnEl} class={getClassString(leftIconClass)} on:click={()=>handleScroll('left')}>
        <ChevronLeft/>
      </div>
    {/if}
  </div>
  <!-- right nav -->
  <div
    bind:this={rightOperationsEl}
    class="{`${componentName}__operations`} {`${componentName}__operations--right`}"
  >
    {#if canToRight}
      <div bind:this={toRightBtnEl} class={getClassString(rightIconClass)} onClick={() => handleScroll('right')}>
        <ChevronRight/>
      </div>
    {/if}
  </div>

  <!-- bar and item -->
  <div class={getClassString(navContainerClass)}>
    <div class={getClassString(navScrollContainerClass)}>
      <div bind:this={navsWrapEl} class={getClassString(navsWrapClass)} style={wrapTransformStyle}>
        {#if theme !== 'card'}
          <TabNavBar placement={placement} value={value} navs={panels}></TabNavBar>
        {/if}
        {#each panels as item, index}
          <TabNavItem
            theme={theme}
            size={size}
            placement={placement}
            label={item.props.label}
            active={item.props.value === value}
            disabled={disabled || item.disabled}
            value={value}
          />
        {/each}
      </div>
    </div>
  </div>
</div>