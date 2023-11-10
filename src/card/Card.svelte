<script>
  import {getClassString, SIZE, usePrefixClass} from "../common.js";
  import {SIZE_ENUM} from "../config.js";
  import Loading from "../loading/Loading.svelte";

  import './style/css'

  const classPrefix = usePrefixClass()
  const COMPONENT_NAME = usePrefixClass('card')

  /** 标题 */
  export let title = undefined
  /** 二级标题 */
  export let subtitle = undefined
  /** 卡片描述文案 */
  export let description = undefined
  /** 是否有边框 */
  export let bordered = true
  /** 头部是否带分割线，仅在有header时有效 */
  export let headerBordered = false
  /** hover时是否有阴影 */
  export let hoverShadow = false
  /** 加载状态 */
  export let loading = false
  /** 是否显示卡片阴影，默认不显示 */
  export let shadow = false
  /** 尺寸 */
  export let size = SIZE_ENUM.medium
  /** 操作区域位置 默认顶部 header(顶部) footer(底部)  */
  export let theme = 'normal'
  /** 卡片封面图。值类型为字符串，会自动使用 `img` 标签输出封面图；也可以完全自定义封面图  */
  export let cover = ''

  export let className = ''
  export let style = ''

  // 是否显示顶部
  $: isHeader = $$slots.header || title || subtitle || description || $$slots.avatar || ($$slots.actions && theme !== 'footer')
  // 是否显示底部
  $: isFooter = $$slots.footer || ($$slots.actions && theme === 'footer')

  // class
  $: cardClass = {
    [className]: className,
    [COMPONENT_NAME]: true,
    [`${SIZE[size]}`]: size === 'small',
    [`${COMPONENT_NAME}--bordered`]: bordered,
    [`${COMPONENT_NAME}--shadow`]: shadow,
    [`${COMPONENT_NAME}--shadow-hover`]: hoverShadow,
  };

  $: headerClass = {
    [`${COMPONENT_NAME}__header`]: true,
    [`${COMPONENT_NAME}__title--bordered`]: headerBordered,
  }

</script>
{#if loading}
  <Loading/>
{:else }
  <div class={getClassString(cardClass)} {style}>
    <!--  header  -->
    {#if !isHeader}
    {:else}
      {#if $$slots.header}
        <div class={getClassString(headerClass)}>
          <slot name="header"></slot>
        </div>
      {:else}
        <div class={getClassString(headerClass)}>
          <div class={`${classPrefix}-card__header-wrapper`}>
            {#if $$slots.avatar}
              <div class={`${classPrefix}-card__avatar`}>
                <slot name="avatar"></slot>
              </div>
            {/if}
            <div>
              {#if title}
                <div class={`${classPrefix}-card__title`}>{title}</div>
              {/if}
              {#if subtitle}
                <div class={`${classPrefix}-card__subtitle`}>{subtitle}</div>
              {/if}
              {#if description}
                <div class={`${classPrefix}-card__description`}>{description}</div>
              {/if}
            </div>
          </div>
          {#if $$slots.actions && theme !== 'footer'}
            <div class={`${classPrefix}-card__actions`}>
              <slot name="actions"></slot>
            </div>
          {/if}
        </div>
      {/if}
    {/if}

    <!--  cover  -->
    {#if cover}
      <div class={`${classPrefix}-card__cover`}>
        <img src={cover} alt=""/>
      </div>
    {/if}

    <!--  docs  -->
    {#if $$slots.default}
      <div class={`${classPrefix}-card__body`}>
        <slot/>
      </div>
    {/if}

    <!--  footer  -->
    {#if $$slots.footer}
      <div class={`${classPrefix}-card__footer`}>
        <div class={`${classPrefix}-card__footer-wrapper`}>
          <slot name="footer"/>
        </div>
        {#if $$slots.actions && theme === 'footer'}
          <div class={`${classPrefix}-card__actions`}>
            <slot name="actions"></slot>
          </div>
        {/if}
      </div>
    {/if}
  </div>
{/if}
