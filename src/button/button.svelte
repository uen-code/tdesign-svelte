<script>
  import { usePrefixClass, componentSize, componentStatus, getClassString } from '../common'
  import { sizeEnum, themeEnum } from '../config'
  import '../style/web/components/button/_index.less'
  import '../common.less'

  const COMPONENT_NAME = usePrefixClass('button')

  export let theme = themeEnum.primary
  export let size = sizeEnum.medium
  export let variant = 'base'
  
  const buttonClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--variant-${variant}`]: true,
    [`${COMPONENT_NAME}--theme-${theme}`]: true,
    [componentSize[size]]: size !== 'medium'
  }
  console.log(buttonClass)
</script>

<button class={getClassString(buttonClass)} type="button">123</button>