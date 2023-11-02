import flatten from "tdesign-svelte/utils/lodash/flatten.js";

import Starter from "./components/starter/Starter.svelte";
import Overview from "./components/overview/Overview.svelte";
import Button from './components/button/Index.svelte'
import Divider from './components/divider/Index.svelte'
import Popup from "./components/popup/Index.svelte";
import Message from "./components/message/Index.svelte";
import Menu from "./components/menu/Index.svelte";
import Tabs from "./components/tabs/Index.svelte";
import Switch from "./components/switch/Index.svelte";
import Link from "./components/link/Index.svelte";
import Layout from "./components/layout/Index.svelte";
import Radio from "./components/radio/Index.svelte";
import Loading from "./components/loading/Index.svelte";
import Textarea from "./components/textarea/Index.svelte";
import Input from "./components/input/Index.svelte";
import InputAdornment from "./components/input-adornment/Index.svelte";
import Card from "./components/card/Index.svelte";
import Avatar from "./components/avatar/Index.svelte";
import Image from "./components/image/Index.svelte";
import Space from "./components/space/Index.svelte";

export const routerList = [
  {
    title: "开始",
    name: "start",
    type: "doc", // 组件文档
    children: [
      {
        title: "快速开始",
        name: "starter",
        path: "/",
        component: Starter
      },
      {
        title: "组件概述",
        name: "overview",
        path: "/svelte/overview",
        component: Overview
      },
    ],
  },
  {
    title: "基础",
    name: "base",
    type: "component", // 组件文档
    children: [
      {
        title: "Button 按钮",
        name: "button",
        path: "/svelte/components/button",
        component: Button
      },
      {
        title: "Icon 图标",
        name: "icon",
        path: "/svelte/components/icon",
      },
      {
        title: "Link 线",
        name: "link",
        path: "/svelte/components/link",
        component: Link
      },
    ],
  },
  {
    title: "布局",
    name: "layouts",
    type: "component", // 组件文档
    children: [
      {
        title: "Divider 分割线",
        name: "divider",
        path: "/svelte/components/divider",
        component: Divider
      },
      {
        title: "Layout 布局",
        name: "layout",
        path: "/svelte/components/layout",
        component: Layout
      },
      {
        title: "Space 间距",
        name: "space",
        path: "/svelte/components/space",
        component: Space
      },
    ],
  },
  {
    title: "导航",
    name: "navigation",
    type: "component", // 组件文档
    children: [
      {
        title: "Menu 导航",
        name: "menu",
        path: "/svelte/components/menu",
        component: Menu
      },
      {
        title: "Tabs 选项卡",
        name: "tabs",
        path: "/svelte/components/tabs",
        component: Tabs
      },
    ],
  },
  {
    title: "表单",
    name: "Forms",
    type: "component", // 组件文档
    children: [
      {
        title: "Checkbox 多选框",
        name: "checkbox",
        path: "/svelte/components/checkbox",
      },
      {
        title: "Form 表单",
        name: "form",
        path: "/svelte/components/form",
      },
      {
        title: "Input 输入框",
        name: "input",
        path: "/svelte/components/input",
        component: Input
      },
      {
        title: "InputAdornment 输入装饰器",
        name: "input-adornment",
        path: "/svelte/components/input-adornment",
        component: InputAdornment
      },
      {
        title: "Radio 单选框",
        name: "radio",
        path: "/svelte/components/radio",
        component: Radio
      },
      {
        title: "Switch 开关",
        name: "switch",
        path: "/svelte/components/switch",
        component: Switch
      },
      {
        title: "Textarea 多行文本框",
        name: "textarea",
        path: "/svelte/components/textarea",
        component: Textarea
      },
    ],
  },
  {
    title: "数据展示",
    name: "Data",
    type: "component", // 组件文档
    children: [
      {
        title: "Avatar 头像",
        name: "avatar",
        path: "/svelte/components/avatar",
        component: Avatar
      },
      {
        title: "Card 卡片",
        name: "card",
        path: "/svelte/components/card",
        component: Card
      },
      {
        title: "Image 图片",
        name: "image",
        path: "/svelte/components/image",
        component: Image
      },
      {
        title: "Badge 徽标数",
        name: "badge",
        path: "/svelte/components/badge",
      },
      {
        title: "Calendar 日历",
        name: "calendar",
        path: "/svelte/components/calendar",
      },
      {
        title: "List 列表",
        name: "list",
        path: "/svelte/components/list",
      },
      {
        title: "Progress 进度条",
        name: "progress",
        path: "/svelte/components/progress",
      },
      {
        title: "Table 表格",
        name: "table",
        path: "/svelte/components/table",
      },
      {
        title: "Tag 标签",
        name: "tag",
        path: "/svelte/components/tag",
      },
      {
        title: "Tooltip 文字提示",
        name: "tooltip",
        path: "/svelte/components/tooltip",
      },
    ],
  },
  {
    title: "消息提醒",
    name: "Notifications",
    type: "component", // 组件文档
    children: [
      {
        title: "Alert 警告提醒",
        name: "alert",
        path: "/svelte/components/alert",
      },
      {
        title: "Dialog 对话框",
        name: "dialog",
        path: "/svelte/components/dialog",
      },
      {
        title: "Drawer 模态抽屉",
        name: "drawer",
        path: "/svelte/components/drawer",
      },
      {
        title: "Loading 加载",
        name: "loading",
        path: "/svelte/components/loading",
        component: Loading
      },
      {
        title: "Message 全局提示",
        name: "message",
        path: "/svelte/components/message",
        component: Message
      },
      {
        title: "Notification 消息通知",
        name: "notification",
        path: "/svelte/components/notification",
      },
      {
        title: "Popconfirm 气泡确认框",
        name: "popconfirm",
        path: "/svelte/components/popconfirm",
      },
      {
        title: "Popup 弹出层",
        name: "popup",
        path: "/svelte/components/popup",
        component: Popup
      },
    ],
  },
];

export const menuItems = flatten(routerList.map(item => item.children));