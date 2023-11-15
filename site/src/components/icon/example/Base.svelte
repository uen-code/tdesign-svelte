<script>
  import { Icon } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;

  function onIconClose() {
    console.log('click');
  }
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--button-base tdesign-demo-item--button">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <div style="display: inline-flex;gap:16px;">
          <p>How do you feel today?</p>
          <Icon name="facialSneer" on:click={onIconClose} />
          <Icon name="facialUnhappy" />
          <Icon name="facialExcited" />
          <Icon name="facialSurprised" />
          <Icon name="facialGiggle" />
        </div>
        <div style="display: inline-flex;gap:16px;">
          <p>What's your favourite food?</p>
          <Icon name="foodTangerinr" color="orange" />
          <Icon name="foodBambooShoot" color="green" />
          <Icon name="foodApple" color="red" />
          <Icon name="foodMilk" color="#0052D9" />
          <Icon name="foodPeach" color="pink" />
        </div>
        <div style="display: inline-flex;gap:16px;">
          <p>How much Icons does TDesign Icon includes?</p>
          <Icon name="numbers1" style="color: var(--td-brand-color-5)" />
          <Icon name="numbers2" style="color: var(--td-brand-color-6)" />
          <Icon name="numbers0" style="color: var(--td-brand-color-7)" />
          <Icon name="numbers3" style="color: var(--td-brand-color-8)" />
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
