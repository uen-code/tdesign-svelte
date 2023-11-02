<script>
  import TRadio from "./Radio.svelte";

  /** 是否允许取消选中 */
  export let allowUncheck = false
  /** 是否选中 */
  export let checked = false
  /** 是否为禁用态。如果存在父组件 RadioGroup，默认值由 RadioGroup.disabled 控制。Radio.disabled 优先级高于 RadioGroup.disabled */
  export let disabled = false
  /** 单选按钮的值 */
  export let value = undefined

  let type = 'button'
</script>

<TRadio {allowUncheck} {checked} {disabled} {value} {type}>
  <slot/>
</TRadio>