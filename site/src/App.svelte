<script>
  import {Router, Route, navigate} from "svelte-routing";
  import {onMount} from "svelte";

  import {routerList, menuItems} from './Router.js'

  let dom;
  onMount(() => {
    dom.routerList = routerList
  })

  function change(e) {
    navigate(e.detail, {replace: true})
  }
</script>

<td-doc-layout>
  <td-header slot="header">
    <td-doc-search slot="search"></td-doc-search>
  </td-header>
  <td-doc-aside title="Vue for Web" bind:this={dom} on:change={change}>
    <td-select value="1" slot="extra"></td-select>
  </td-doc-aside>
  <Router>
    {#each menuItems as menuItem}
      <Route path="{menuItem.path}" component="{menuItem.component}"></Route>
    {/each}
  </Router>
</td-doc-layout>
