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

  export let className = '';
  export let style = '';
</script>

<div class="{COMPONENT_NAME} {className}" style="{style}">
  <div class={`${COMPONENT_NAME}__inner`}>
    <!--  avatar  -->
    {#if isString(avatar)}
      <div class={`${COMPONENT_NAME}__avatar`}>
        <img src={avatar} alt="" class={`${COMPONENT_NAME}__avatar-image`}/>
      </div>
    {/if}

    <!--  content  -->
    <div class={`${COMPONENT_NAME}__content`}>
      {#if $$slots.content}
        <slot name="content" />
      {:else}
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
        {content}
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
        <div class={`${COMPONENT_NAME}__actions`}>
          {#each actions as action,i}
            <TButton size="small" variant="text">
              <slot name="action" {action}></slot>
            </TButton>
          {/each}
        </div>
      {/if}
    {/if}
    </div>
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