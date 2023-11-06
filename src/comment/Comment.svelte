<script>
  import {usePrefixClass} from "../common.js";
  import {isString} from "../utils/lodash/index.js";
  import TButton from "../button/Button.svelte";

  import './style/css'

  const COMPONENT_NAME = usePrefixClass('comment');

  /** 操作 */
  export let actions = [];
  /** 作者 */
  export let author = undefined;
  /** 头像 */
  export let avatar = undefined;
  /** 内容 */
  export let content = undefined;
  /** 时间 */
  export let datetime = undefined;
  /** 回复 */
  export let reply = undefined;
  /** 引用 */
  export let quote = undefined;
</script>

<div class={COMPONENT_NAME}>
  <div class={`${COMPONENT_NAME}__inner`}>
    <!--  avatar  -->
    <div class={`${COMPONENT_NAME}__avatar`}>
      {#if isString(avatar)}
        <img src={avatar} alt="" class={`${COMPONENT_NAME}__avatar-image`}/>
      {/if}
    </div>

    <!--  content  -->
    <div class={`${COMPONENT_NAME}__content`}>
      <!--   author and datetime   -->
      <div class={`${COMPONENT_NAME}__author`}>
        {#if author || $$slots.author}
          <span class={`${COMPONENT_NAME}__name`}>
            {#if author}
              {author}
            {:else}
              <slot name="author"/>
            {/if}
          </span>
        {/if}
        {#if datetime || $$slots.datetime}
          <span class={`${COMPONENT_NAME}__time`}>
            {#if datetime}
              {datetime}
            {:else}
              <slot name="datetime"/>
            {/if}
          </span>
        {/if}
      </div>

      <!--   content   -->
      <div class={`${COMPONENT_NAME}__detail`}>
        {#if content}
          {content}
        {:else}
          <slot content/>
        {/if}
      </div>

      <!--   quote   -->
      {#if quote || $$slots.quote}
        <div class={`${COMPONENT_NAME}__quote`}>
          {#if quote}
            {quote}
          {:else}
            <slot name="quote"/>
          {/if}
        </div>
      {/if}

      <!-- actions -->
      {#if actions && actions.length > 0}
        {#each actions as action,i}
          <TButton size="small" variant="text">
            <slot slot="action" {action}></slot>
          </TButton>
        {/each}
      {/if}
    </div>

    <!--  reply  -->
    {#if reply || $$slots.reply}
      <div class={`${COMPONENT_NAME}__reply`}>
        {#if reply}
          {reply}
        {:else}
          <slot name="reply"/>
        {/if}
      </div>
    {/if}
  </div>
</div>