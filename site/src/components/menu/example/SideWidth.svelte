<script>
  import {TMenu, TMenuItem, TIcon, TButton} from 'tdesign-svelte'

  let value = 'item2'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--menu-side-menu-width tdesign-demo-item--menu">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <TMenu {value} theme="light" width="200px">
        <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo"/>
        <TMenuItem value="item1">菜单内容</TMenuItem>
        <TMenuItem value="item2">菜单内容</TMenuItem>
        <TMenuItem value="item3">菜单内容</TMenuItem>
        <TMenuItem value="item4">菜单内容</TMenuItem>
      </TMenu>
    </div>
  </td-doc-demo>
</div>