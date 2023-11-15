<script>
  import { SIZE, getClassString, usePrefixClass } from '../common.js';
  import { SIZE_ENUM } from '../config.js';
  import tabBase from './js/base.js';
  import { ChevronLeftIcon, ChevronRightIcon } from '../icon';
  import TabNavBar from './TabNavBar.svelte';
  import TabNavItem from './TabNavItem.svelte';
  import { TAB_NAV_ITEM_ID, TAB_ATTRIBUTE_VALUE } from './useTabs.js';
  import { getContext, onMount } from 'svelte';
  import { filterChildNodes, getActiveNode } from '../utils/domOperations.js';

  const COMPONENT_NAME = usePrefixClass('tabs');
  const classPrefix = usePrefixClass();

  const {
    calculateCanToLeft,
    calculateCanToRight,
    calcScrollLeft,
    scrollToLeft,
    scrollToRight,
    moveActiveTabIntoView,
  } = tabBase;

  const [tabValue] = getContext('tabStore');

  let navs = [];
  onMount(() => {
    navs = filterChildNodes(navsWrapNode, TAB_NAV_ITEM_ID);
    getNodes();
    totalAdjust();
    setActiveTab();
  });

  /** 选项卡数据 */
  export let panels = [];
  /** 选项卡主题 */
  export let theme = 'normal';
  /** 唯一标识 */
  export let value = undefined;
  /** 选项卡位置 */
  export let placement = 'top';
  export let size = SIZE_ENUM.medium;
  export let disabled = false;

  let scrollLeft = 0;
  let canToLeft = false;
  let canToRight = false;

  // nodes
  let navsContainerNode;
  let navsWrapNode;
  let leftOperationsNode;
  let toLeftBtnNode;
  let rightOperationsNode;
  let toRightBtnNode;
  let activeTabNode;
  const getNodes = () => ({
    navsContainer: navsContainerNode,
    navsWrap: navsWrapNode,
    leftOperations: leftOperationsNode,
    toLeftBtn: toLeftBtnNode,
    rightOperations: rightOperationsNode,
    toRightBtn: toRightBtnNode,
  });

  // 计算滚动值
  const totalAdjust = () => {
    adjustArrowDisplay();
    adjustScrollLeft();
  };
  const adjustScrollLeft = () => {
    scrollLeft = calcScrollLeft(getNodes(), scrollLeft);
  };
  const adjustArrowDisplay = () => {
    canToLeft = calculateCanToLeft(getNodes(), scrollLeft, placement);
    canToRight = calculateCanToRight(getNodes(), scrollLeft, placement);
  };
  const handleScroll = (direction) => {
    if (direction === 'left') {
      scrollLeft = scrollToLeft(getNodes(), scrollLeft);
    } else {
      scrollLeft = scrollToRight(getNodes(), scrollLeft);
    }
  };
  const setActiveTab = () => {
    const el = getActiveNode(navs, TAB_ATTRIBUTE_VALUE, value);
    const tabNavItemValue = el?.getAttribute(TAB_ATTRIBUTE_VALUE);
    const activeTabNavItemValue = activeTabNode?.getAttribute(TAB_ATTRIBUTE_VALUE);
    if (tabNavItemValue === value && tabNavItemValue !== activeTabNavItemValue) {
      activeTabNode = el;
      scrollLeft = moveActiveTabIntoView(
        {
          activeTab: activeTabNode,
          ...getNodes(),
        },
        scrollLeft,
      );
    }
  };

  // sub tabValue
  tabValue.subscribe((val) => {
    if (val) value = val;
    if (navs.length > 0) {
      totalAdjust();
      setActiveTab();
    }
  });

  // style
  $: wrapTransformStyle = ['left', 'right'].includes(placement.toLowerCase())
    ? ''
    : `transform: translate3d(${-scrollLeft}px, 0px, 0px)`;

  // class
  $: iconBaseClass = {
    [`${COMPONENT_NAME}__btn`]: true,
    [SIZE.medium]: size === 'medium',
    [SIZE.large]: size === 'large',
  };
  $: leftIconClass = {
    [`${COMPONENT_NAME}__btn--left`]: true,
    ...iconBaseClass,
  };
  $: rightIconClass = {
    [`${COMPONENT_NAME}__btn--right`]: true,
    ...iconBaseClass,
  };
  $: navContainerClass = {
    [`${COMPONENT_NAME}__nav-container`]: true,
    [`${COMPONENT_NAME}__nav--card`]: theme === 'card',
    [`${classPrefix}-is-${placement}`]: true,
    // [`${classPrefix}-is-addable`]: addable,
  };
  $: navScrollContainerClass = {
    [`${COMPONENT_NAME}__nav-scroll`]: true,
    [`${classPrefix}-is-scrollable`]: canToLeft || canToRight,
  };
  $: navsWrapClass = {
    [`${COMPONENT_NAME}__nav-wrap`]: true,
    [`${classPrefix}-is-smooth`]: true,
    [`${classPrefix}-is-vertical`]: placement === 'left' || placement === 'right',
  };
</script>

<div bind:this={navsContainerNode} class={`${COMPONENT_NAME}__nav`}>
  <!-- left nav -->
  <div bind:this={leftOperationsNode} class="{`${COMPONENT_NAME}__operations`} {`${COMPONENT_NAME}__operations--left`}">
    {#if canToLeft}
      <div bind:this={toLeftBtnNode} class={getClassString(leftIconClass)} on:click={() => handleScroll('left')}>
        <ChevronLeftIcon />
      </div>
    {/if}
  </div>
  <!-- right nav -->
  <div
    bind:this={rightOperationsNode}
    class="{`${COMPONENT_NAME}__operations`} {`${COMPONENT_NAME}__operations--right`}"
  >
    {#if canToRight}
      <div bind:this={toRightBtnNode} class={getClassString(rightIconClass)} on:click={() => handleScroll('right')}>
        <ChevronRightIcon />
      </div>
    {/if}
  </div>

  <!-- bar and item -->
  <div class={getClassString(navContainerClass)}>
    <div class={getClassString(navScrollContainerClass)}>
      <div bind:this={navsWrapNode} class={getClassString(navsWrapClass)} style={wrapTransformStyle}>
        {#if theme !== 'card' && navs.length > 0}
          <TabNavBar {placement} {value} {navs}></TabNavBar>
        {/if}
        {#each panels as panel, index}
          <TabNavItem
            {theme}
            {size}
            {placement}
            label={panel.label}
            active={panel.value === value}
            disabled={disabled || panel.disabled}
            value={panel.value}
            labelIcon={panel.labelIcon}
            labelIconClass={panel.labelIconClass}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
