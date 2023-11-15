<script>
  import { TIcon, TLayout, THeader, TContent, TFooter, THeadMenu, TMenuItem } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.top;

  const operations = [
    {
      name: 'search',
    },
    {
      name: 'notificationFilled',
    },
    {
      name: 'home',
    },
  ];
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--layout-top tdesign-demo-item--layout">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TLayout>
        <THeader>
          <THeadMenu theme="light" value="item1" height="120px" {operations}>
            <img
              slot="logo"
              width="136"
              class="logo"
              src="https://www.tencent.com/img/index/menu_logo_hover.png"
              alt="logo"
            />
            <TMenuItem value="item1">已选内容</TMenuItem>
            <TMenuItem value="item2">菜单内容一</TMenuItem>
            <TMenuItem value="item3">菜单内容二</TMenuItem>
            <TMenuItem value="item4" disabled>菜单内容三</TMenuItem>
            <a href="javascript:;" let:item slot="operation">
              <TIcon className="t-menu__operations-icon" slot="icon" name={item.name} />
            </a>
          </THeadMenu>
        </THeader>
        <TContent>
          <div>Content</div>
        </TContent>
        <TFooter>Copyright @ 2019-23123 Tencent. All Rights Reserved</TFooter>
      </TLayout>
    </div>
  </td-doc-demo>
</div>
