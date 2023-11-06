<script>
  import {getClassString, usePrefixClass} from "../common.js";
  import {onMount} from "svelte";

  const COMPONENT_AVATAR_NAME = usePrefixClass('avatar');
  const COMPONENT_NAME = usePrefixClass('avatar-group');

  let avatarGroupNode;
  onMount(() => {
    console.log("group",avatarGroupNode)
  })

  /** 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上 */
  export let cascading = 'right-up'

  // class
  $: avatarGroupClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_AVATAR_NAME}--offset-right`]: cascading === 'right-up',
    [`${COMPONENT_AVATAR_NAME}--offset-left`]: cascading === 'left-up',
  }
</script>

<div class="{getClassString(avatarGroupClass)}" bind:this={avatarGroupNode}>
  <slot/>
</div>
