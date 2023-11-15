<script>
  import {
    LettersTIcon,
    LettersDIcon,
    LettersEIcon,
    LettersSIcon,
    LettersIIcon,
    LettersGIcon,
    LettersNIcon,
    ComponentCheckboxIcon,
    ComponentInputIcon,
    ComponentSwitchIcon,
    ComponentBreadcrumbIcon,
    ComponentDropdownIcon,
    ComponentRadioIcon,
    ComponentStepsIcon,
  } from 'tdesign-icons-svelte';
  import codeTemplate from '../config/code.json';

  let demoCode = codeTemplate.single;

  function onIconClick(e) {
    console.log('click');
  }
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--icon-single tdesign-demo-item--icon">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <div style="display: inline-flex;gap:16px;color: var(--td-brand-color)">
          <LettersTIcon on:click={onIconClick} />
          <LettersDIcon />
          <LettersEIcon />
          <LettersSIcon />
          <LettersIIcon />
          <LettersGIcon />
          <LettersNIcon />
        </div>
        <div style="display: inline-flex;gap:16px;">
          <ComponentCheckboxIcon />
          <ComponentBreadcrumbIcon />
          <ComponentInputIcon />
          <ComponentSwitchIcon />
          <ComponentDropdownIcon />
          <ComponentRadioIcon />
          <ComponentStepsIcon />
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
