<script>
  import { TImage, TTag } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.galleryCover;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--image-fill-shape tdesign-demo-item--image">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px">
        <TImage src="https://tdesign.gtimg.com/demo/demo-image-1.png" style="width:284px;height:160px" gallery>
          <TTag
            slot="overlay"
            shape="mark"
            theme="warning"
            style="margin: 8px;border-radius: 3px;background: rgba(236,242,254,1);color: rgba(0,82,217,1)"
          >
            标签一
          </TTag>
        </TImage>
      </div>
    </div>
  </td-doc-demo>
</div>
