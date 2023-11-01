<svelte:head>
  <title>Space 间距（不可用） | TDesign</title>
</svelte:head>

<script>
  import DocApi from "./docs/DocApi.svelte";
  import DocDesign from "../common-components/CommonDesign.svelte";
  import DocDemo from "./docs/DocDemo.svelte";
  import config from "./config/config.json"
  import {onMount} from "svelte";

  let headerNode;
  onMount(() => {
    headerNode.docInfo = config.docHeader
  })

  const coverage = config.badge

  const components = {
    "demo": DocDemo,
    "api": DocApi,
    "design": DocDesign
  }

  let component = 'demo'

  function handleTabChange(e) {
    component = e.detail
  }
</script>
<td-doc-content>
  <td-doc-header bind:this={headerNode} component-name="{config.base.componentName}" slot="doc-header"
                 spline="{config.docHeader.spline}">
    <td-doc-badge style="margin-right: 10px" slot="badge" label="coverages: lines" message="{coverage.lines || '0%'}" />
    <td-doc-badge style="margin-right: 10px" slot="badge" label="coverages: functions" message="{coverage.functions || '0%'}" />
    <td-doc-badge style="margin-right: 10px" slot="badge" label="coverages: statements" message="{coverage.statements || '0%'}" />
    <td-doc-badge style="margin-right: 10px" slot="badge" label="coverages: branches" message="{coverage.branches || '0%'}" />
  </td-doc-header>

  <td-doc-tabs on:change={handleTabChange}></td-doc-tabs>

  <svelte:component this={components[component]}/>

  <td-contributors framework="svelte" component-name="dialog"></td-contributors>

  <div style="margin-top: 48px;">
    <td-doc-history time="1639583136582"></td-doc-history>
  </div>

  <td-doc-footer slot="doc-footer"></td-doc-footer>
</td-doc-content>
