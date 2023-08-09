<script>
  import '../style/web/components/button/_index.less'
  import '../common.less'
  import {createEventDispatcher} from 'svelte';
  import {usePrefixClass, componentSize, componentStatus, getClassString} from '../common'
  import {sizeEnum, themeEnum} from '../config'
  import useRipple from "../hooks/useRipple";


  const dispatch = createEventDispatcher()
  const COMPONENT_NAME = usePrefixClass('button')

  function handleButtonClick(event) {
    useRipple(event.currentTarget)
    dispatch('click', event)
  }

  export let theme = themeEnum.primary
  export let size = sizeEnum.medium
  export let variant = 'base'
  export let isDisabled = false

  const buttonClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--variant-${variant}`]: true,
    [`${COMPONENT_NAME}--theme-${theme}`]: true,
    [componentSize[size]]: size !== 'medium',
    [componentStatus.disabled]: isDisabled
  }
</script>

<button class={getClassString(buttonClass)} on:click={handleButtonClick} type="button">
  <span class={`${COMPONENT_NAME}__text`}>
    <slot>
      <em>确定</em>
    </slot>
  </span>
</button>
