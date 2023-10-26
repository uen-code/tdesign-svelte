<script>
  import configJson from './config/config.json'
  import {onMount} from "svelte";
  import {TMenu, TSubMenu, TMenuItem} from "tdesign-svelte";
  import {codeReplace} from "../../common.js";
  import propJson from "./config/props.json";

  const baseCode = configJson.base.code

  // 初始化dom
  let usageNode;
  onMount(() => {
    usageNode.configList = propJson
    usageNode.panelList = configJson.base.panelList;
    usageNode.addEventListener('ConfigChange', onConfigChange);
  })

  let changedProps = {}
  let usageCode = codeReplace(baseCode,changedProps)
  function onConfigChange(e) {
    const { name, value } = e.detail;
    changedProps[name] = value
    usageCode = codeReplace(baseCode,changedProps)
  }
</script>

<td-doc-usage bind:this={usageNode} code={usageCode}>
  <div slot="menu" style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
    <div style="padding: 24px; background: var(--bg-color-page); border-radius: 3px">
      <TMenu {...changedProps}>
        <TMenuItem value="0">
          仪表盘
        </TMenuItem>

        <TSubMenu value="1" title="资源列表">
          <TMenuItem value="1-1" disabled>
            <span>菜单二</span>
          </TMenuItem>
        </TSubMenu>
        <TSubMenu value="2" title="调度平台">
          <TSubMenu value="2-1" title="二级菜单-1">
            <TMenuItem value="3-1">三级菜单-1</TMenuItem>
            <TMenuItem value="3-2">三级菜单-2</TMenuItem>
            <TMenuItem value="3-3">三级菜单-3</TMenuItem>
          </TSubMenu>
          <TMenuItem value="2-2">
            <span>二级菜单-2</span>
          </TMenuItem>
        </TSubMenu>
      </TMenu>
    </div>
  </div>
</td-doc-usage>