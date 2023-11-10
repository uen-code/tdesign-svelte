<script>
  import {Router, Route, navigate} from "svelte-routing";
  import {onMount} from "svelte";

  import {routerList, menuItems} from './router.js'

  let dom;
  let selectDom;
  onMount(() => {
    dom.routerList = routerList
    selectDom.options = [{label: '0.0.1-alpha', value: 'alpha'}]
  })

  function change(e) {
    navigate(e.detail, {replace: true})
  }

  function changeVersion(e) {

  }
</script>

<td-doc-layout>
  <td-header slot="header" framework="svelte">
  </td-header>
  <td-doc-aside title="Svelte for Web" bind:this={dom} on:change={change}>
    <td-select value="alpha" slot="extra" bind:this={selectDom}></td-select>
  </td-doc-aside>
  <Router>
    {#each menuItems as menuItem}
      <Route path="{menuItem.path}" component="{menuItem.component}"></Route>
    {/each}
  </Router>
</td-doc-layout>
