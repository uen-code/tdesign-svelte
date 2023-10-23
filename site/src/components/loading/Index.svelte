<svelte:head>
  <title>Loading 加载中 | TDesign</title>
</svelte:head>


<script>
  import BaseUsage from "./BaseUsage.svelte";
  import DocDemos from "./DocDemos.svelte";
  import config from "./config/config.json"
</script>
<td-doc-content>
  <td-doc-header component-name="{config.base.componentName}" slot="doc-header" spline="{config.docHeader.spline}">
    <td-doc-badge slot="badge" message="100%" color="brightgreen"></td-doc-badge>
  </td-doc-header>

  <td-doc-tabs></td-doc-tabs>

  <BaseUsage></BaseUsage>

  <!-- <td-doc-empty></td-doc-empty> -->
<!--  <DocDemos></DocDemos>-->

  <!-- <td-doc-phone qrcode-url="https://tdesign.tencent.com">
    <iframe src="https://tdesign.tencent.com/design" style="overflow-x: hidden;" width="100%" height="100%" frameborder="0"></iframe>
  </td-doc-phone> -->

  <td-contributors platform="mobile" framework="vue" component-name="dialog"></td-contributors>

  <td-avatar username="chazzhou"></td-avatar>

  <td-doc-history time="1639583136582"></td-doc-history>

  <td-doc-footer platform="mobile" slot="doc-footer"></td-doc-footer>
</td-doc-content>
