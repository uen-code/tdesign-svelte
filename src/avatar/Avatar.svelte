<script>
  import { getClassString, SIZE, usePrefixClass } from '../common.js';
  import TImage from '../image/Image.svelte';

  import './style/css';
  import { getContext, onMount, tick } from 'svelte';

  const avatarGroup = getContext('avatarGroup');
  const COMPONENT_NAME = usePrefixClass('avatar');

  let avatarNode;
  let avatarChildNode;
  onMount(() => {
    tick().then(() => {
      setScale();
    });
  });

  /** 形状 */
  export let shape = 'circle';
  /** 图片地址 */
  export let image = '';
  /** 头像替换文本，仅当图片加载失败时有效 */
  export let alt = '';
  /** 尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件存在 AvatarGroup，默认值便由 AvatarGroup.size 决定 */
  export let size = '';

  export let className = '';
  export let style = '';

  // 内容区在左右两边的间距保持为4
  const gap = 4;
  // 缩放比例 文字自适应
  let scale = '';

  // handle
  const setScale = () => {
    const avatarWidth = avatarNode.offsetWidth;
    const avatarChildWidth = avatarChildNode.offsetWidth;
    if (gap * 2 < avatarWidth) {
      scale =
        avatarChildWidth > avatarWidth - gap * 2 ? `scale(${(avatarWidth - gap * 2) / avatarChildWidth})` : 'scale(1)';
    }
  };

  // compute
  $: sizeValue = size || avatarGroup?.size;
  $: isCustomSize = sizeValue && !SIZE[sizeValue];

  $: customAvatarSize = isCustomSize
    ? `width:${sizeValue}; height:${sizeValue}; font-size:${Number.parseInt(sizeValue, 10) / 2}px;`
    : '';
  $: customImageSize = isCustomSize ? `width:${sizeValue};height:${sizeValue};` : '';
  $: customCharacterSize = `transform: ${scale};`;

  // class
  $: avatarClass = {
    [className]: className,
    [`${COMPONENT_NAME}`]: true,
    [SIZE[sizeValue]]: sizeValue && SIZE[sizeValue],
    [`${COMPONENT_NAME}--circle`]: shape === 'circle',
    [`${COMPONENT_NAME}--round`]: shape === 'round',
    [`${COMPONENT_NAME}__icon`]: $$slots.icon && !$$slots.default,
  };
</script>

<div class={getClassString(avatarClass)} bind:this={avatarNode} style="{customAvatarSize} {style}">
  {#if image}
    <TImage src={image} {alt} />
  {:else if $$slots.icon}
    <slot name="icon" />
  {:else}
    <span bind:this={avatarChildNode} style={customCharacterSize}>
      <slot>
        <em>t</em>
      </slot>
    </span>
  {/if}
</div>
