<script>
  import {TTabs, TTabPanel} from 'tdesign-svelte'

  const nums = Array.from({ length: 20 }, (_, i) => i + 1+'');

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--tabs-combination tdesign-demo-item--tabs">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px;flex-direction: column;width: 100%">
        <TTabs value="1">
          {#each nums as num,index}
            <TTabPanel value={num} label={`选项卡${num}`}>
              <p style="margin: 20px">选项卡{num}</p>
            </TTabPanel>
          {/each}
        </TTabs>
        <TTabs value="1" theme="card">
          {#each nums as num,index}
            <TTabPanel value={num} label={`选项卡${num}`}>
              <p style="margin: 20px">选项卡{num}</p>
            </TTabPanel>
          {/each}
        </TTabs>

      </div>
    </div>
  </td-doc-demo>
</div>
