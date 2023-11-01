<script>
  import {THeadMenu, TMenuItem, TIcon, TButton} from 'tdesign-svelte'

  const menu1Value = 'item2'
  const menu2Value = 'item1'

  const changeHandler = (active) => {
    console.log("handle", active)
  };

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

<div class="tdesign-demo-wrapper tdesign-demo-item--menu-single tdesign-demo-item--menu">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div>
        <THeadMenu value={menu1Value} theme="light" {operations} on:change={changeHandler}>
          <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo"/>
          <TMenuItem value="item1"> 菜单1</TMenuItem>
          <TMenuItem value="item2"> 菜单2</TMenuItem>
          <TMenuItem value="item4" disabled> 禁用菜单</TMenuItem>
          <TButton style="margin-left: 8px" slot="operation" let:item variant="text" shape="square">
            <TIcon slot="icon" name={item.name}/>
          </TButton>
        </THeadMenu>

        <br/>

        <THeadMenu className="t-demo-menu--dark" value={menu2Value} {operations} theme="dark">
          <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo"/>
          <TMenuItem value="item1"> 菜单1</TMenuItem>
          <TMenuItem value="item2"> 菜单2</TMenuItem>
          <TMenuItem value="item4" disabled> 禁用菜单</TMenuItem>
          <TButton  slot="operation" let:item variant="text" shape="square">
            <TIcon slot="icon" name={item.name}/>
          </TButton>
        </THeadMenu>
      </div>
    </div>
  </td-doc-demo>
</div>