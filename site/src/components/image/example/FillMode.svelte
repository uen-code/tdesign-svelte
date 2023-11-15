<script>
  import { TImage } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.fillMode;

  const mode = ['fill', 'contain', 'cover', 'none', 'scale-down'];

  let asyncImageUrl = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--image-fill-mode tdesign-demo-item--image">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px">
        {#each mode as modeItem, index}
          <div style="display: flex;flex-direction: column;gap: 16px">
            <TImage src={asyncImageUrl} fit={modeItem} style="width: 120px; height: 120px" />
            <span>{modeItem}</span>
          </div>
        {/each}
      </div>
    </div>
  </td-doc-demo>
</div>
