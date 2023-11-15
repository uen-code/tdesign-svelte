<script>
  import { getClassString, usePrefixClass } from '../common.js';

  import './style/css';

  const COMPONENT_NAME = usePrefixClass('input-adornment');

  /** 后缀装饰 */
  export let append = undefined;
  /** 前缀装饰 */
  export let prepend = undefined;

  export let className = '';
  export let style = '';

  // class
  $: inputAdrnmentClass = {
    [className]: className,
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--prepend`]: prepend,
    [`${COMPONENT_NAME}--append`]: append,
  };
</script>

<div class={getClassString(inputAdrnmentClass)}>
  <!-- prepend -->
  {#if prepend || $$slots.prepend}
    <span class={`${COMPONENT_NAME}__prepend`}>
      {#if prepend}
        <span class={`${COMPONENT_NAME}__text`}>
          {prepend}
        </span>
      {:else}
        <slot name="prepend" />
      {/if}
    </span>
  {/if}

  <!-- content -->
  <slot />

  <!-- append -->
  {#if append || $$slots.append}
    <span class={`${COMPONENT_NAME}__append`}>
      {#if append}
        <span class={`${COMPONENT_NAME}__text`}>
          {append}
        </span>
      {:else}
        <slot name="append" />
      {/if}
    </span>
  {/if}
</div>
