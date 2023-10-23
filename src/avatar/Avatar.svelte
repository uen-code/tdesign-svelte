<script>

  import {getClassString, usePrefixClass} from "../common.js";
  import TImage from '../image/Image.svelte'

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('avatar')

  /** 形状 */
  export let shape = 'circle'
  /** 大小 */
  export let size = ''
  /** 图片地址 */
  export let image = ''
  /** 头像替换文本，仅当图片加载失败时有效 */
  export let alt = ''

  // class
  $: avatarClasses = {
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_NAME}--circle`]: shape === 'circle',
    [`${COMPONENT_NAME}--round`]: shape === 'round',
  }
</script>
<div class={getClassString(avatarClasses)}>
  {#if image}
    <TImage src={image} {alt}/>
  {:else if $$slots.icon}
    <slot name="icon"></slot>
  {:else}
    <span>
      <slot>
        <em>t</em>
      </slot>
    </span>
  {/if}
</div>