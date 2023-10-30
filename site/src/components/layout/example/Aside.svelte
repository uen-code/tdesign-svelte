<script>
  import {TIcon, TLayout, TContent, TFooter, TAside, TMenu, TMenuItem} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--layout-aside tdesign-demo-item--layout">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <TLayout>
        <TAside>
          <TMenu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
            <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo"
                 slot="logo"/>
            <TMenuItem value="dashboard">
              <TIcon name="dashboard"/>
              仪表盘
            </TMenuItem>
            <TMenuItem value="resource">
              <TIcon name="server"/>
              资源列表
            </TMenuItem>
            <TMenuItem value="root">
              <TIcon name="rootList"/>
              根目录
            </TMenuItem>
            <TMenuItem value="control-platform">
              <TIcon name="controlPlatform"/>
              调度平台
            </TMenuItem>
            <TMenuItem value="precise-monitor">
              <TIcon name="preciseMonitor"/>
              调度平台
            </TMenuItem>
            <TMenuItem value="mail">
              <TIcon name="mail"/>
              消息区
            </TMenuItem>
            <TMenuItem value="user-circle">
              <TIcon name="userCircle"/>
              个人中心
            </TMenuItem>
            <TMenuItem value="play-circle">
              <TIcon name="playCircle"/>
              视频区
            </TMenuItem>
            <TMenuItem value="edit1">
              <TIcon name="edit1"/>
              资源编辑
            </TMenuItem>
          </TMenu>
        </TAside>
        <TLayout>
          <TContent>
            <div>Content</div>
          </TContent>
          <TFooter>Copyright @ 2019-123 Tencent. All Rights Reserved</TFooter>
        </TLayout>
      </TLayout>
    </div>
  </td-doc-demo>
</div>