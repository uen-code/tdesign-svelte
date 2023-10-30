<script>
  import {getClassString, usePrefixClass} from "../common.js";

  import './style/css'
  import {setContext} from "svelte";

  const COMPONENT_NAME = usePrefixClass('layout')

  // 是否包含侧边栏
  let hasSide = false;

  // 侧边栏状态与函数下放
  const setHasSide = (val) => {
    hasSide = val
  }
  setContext("setHasSide", setHasSide)

  // class
  $: layoutClass = {
    [COMPONENT_NAME]: true,
    [`${COMPONENT_NAME}--with-sider`]: hasSide,
  }
</script>

<section class={getClassString(layoutClass)}>
  <slot></slot>
</section>