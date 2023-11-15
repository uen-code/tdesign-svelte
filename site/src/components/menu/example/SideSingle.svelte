<script>
  import { TMenu, TMenuItem, TIcon } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.sideSingle;

  const changeHandler = (active) => {
    console.log('handle', active);
  };
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--menu-single-side tdesign-demo-item--menu">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div class="box">
        <TMenu theme="light" defaultValue="item1" style="margin-right: 40px" height="550px" on:change={changeHandler}>
          <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
          <TMenuItem value="item1">仪表盘</TMenuItem>
          <TMenuItem value="item2">资源列表</TMenuItem>
          <TMenuItem value="item3">根目录</TMenuItem>
          <TMenuItem value="item4" disabled>调度平台</TMenuItem>
          <TMenuItem value="item5">精准监控</TMenuItem>
          <TMenuItem value="item6">消息区</TMenuItem>
          <TMenuItem value="item7">个人中心</TMenuItem>
          <TMenuItem value="item8">视频区</TMenuItem>
          <TMenuItem value="item9">资源编辑</TMenuItem>
        </TMenu>

        <TMenu theme="light" defaultValue="dashboard" style="margin-right: 40px" height="550px">
          <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
          <TMenuItem value="dashboard">
            <TIcon name="dashboard" />
            仪表盘
          </TMenuItem>
          <TMenuItem value="resource">
            <TIcon name="server" />
            资源列表
          </TMenuItem>
          <TMenuItem value="root">
            <TIcon name="rootList" />
            根目录
          </TMenuItem>
          <TMenuItem value="controlPlatform">
            <TIcon name="controlPlatform" />
            调度平台
          </TMenuItem>
          <TMenuItem value="preciseMonitor">
            <TIcon name="preciseMonitor" />
            精准监控
          </TMenuItem>
          <TMenuItem value="mail">
            <TIcon name="mail" />
            消息区
          </TMenuItem>
          <TMenuItem value="userCircle">
            <TIcon name="userCircle" />
            个人中心
          </TMenuItem>
          <TMenuItem value="playCircle">
            <TIcon name="playCircle" />
            视频区
          </TMenuItem>
          <TMenuItem value="edit1">
            <TIcon name="edit1" />
            资源编辑
          </TMenuItem>
        </TMenu>

        <TMenu theme="dark" defaultValue="dashboard" height="550px">
          <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
          <TMenuItem value="dashboard">
            <TIcon name="dashboard" />
            仪表盘
          </TMenuItem>
          <TMenuItem value="resource">
            <TIcon name="server" />
            资源列表
          </TMenuItem>
          <TMenuItem value="root">
            <TIcon name="rootList" />
            根目录
          </TMenuItem>
          <TMenuItem value="controlPlatform">
            <TIcon name="controlPlatform" />
            调度平台
          </TMenuItem>
          <TMenuItem value="preciseMonitor">
            <TIcon name="preciseMonitor" />
            精准监控
          </TMenuItem>
          <TMenuItem value="mail">
            <TIcon name="mail" />
            消息区
          </TMenuItem>
          <TMenuItem value="userCircle">
            <TIcon name="userCircle" />
            个人中心
          </TMenuItem>
          <TMenuItem value="playCircle">
            <TIcon name="playCircle" />
            视频区
          </TMenuItem>
          <TMenuItem value="edit1">
            <TIcon name="edit1" />
            资源编辑
          </TMenuItem>
        </TMenu>
      </div>
    </div>
  </td-doc-demo>
</div>
