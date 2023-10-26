<script>
  import {Router, Route, navigate} from "svelte-routing";
  import {onMount} from "svelte";

  import {routerList, menuItems} from './router.js'

  let dom;
  onMount(() => {
    dom.routerList = routerList
  })

  function change(e) {
    navigate(e.detail, {replace: true})
  }
</script>

<td-doc-layout>
  <td-header slot="header" framework="svelte">
  </td-header>
  <td-doc-aside title="Svelte for Web" bind:this={dom} on:change={change}>
    <td-select value="1" slot="extra"></td-select>
  </td-doc-aside>
  <Router>
    {#each menuItems as menuItem}
      <Route path="{menuItem.path}" component="{menuItem.component}"></Route>
    {/each}
  </Router>
</td-doc-layout>
