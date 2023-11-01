<script>
  import {THeadMenu, TMenuItem, TIcon, TButton} from 'tdesign-svelte'

  const operations = [
    {
      name: "search"
    },
    {
      name: "mail"
    },
    {
      name: "user"
    },
    {
      name: "ellipsis"
    }
  ]
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--menu-custom-header tdesign-demo-item--menu">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div>
        <THeadMenu className="t-demo-menu--dark" value="item2" {operations} theme="dark">
          <TMenuItem value="item1"> 菜单内容一</TMenuItem>
          <TMenuItem value="item2"> 已选内容</TMenuItem>
          <TMenuItem value="item3"> 菜单内容二</TMenuItem>
          <TMenuItem value="item4" disabled> 菜单内容三</TMenuItem>
          <TButton  slot="operation" let:item variant="text" shape="square">
            <TIcon slot="icon" name={item.name}/>
          </TButton>
        </THeadMenu>
      </div>
    </div>
  </td-doc-demo>
</div>