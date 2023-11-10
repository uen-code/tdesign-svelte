<script>
  import {TImage} from 'tdesign-svelte'

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--image-fill-shape tdesign-demo-item--image">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: inline-flex;gap: 16px">
        <div style="display: flex;flex-direction: column;gap: 16px;align-items: center">
          <TImage
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            shape="square"
            style="width: 160px; height: 160px"
            fit="cover"
          />
          <span>square</span>
        </div>

        <div style="display: flex;flex-direction: column;gap: 16px;align-items: center">
          <TImage
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            style="width: 160px; height: 160px"
            fit="cover"
            shape="round"
          />
          <span>round</span>
        </div>

        <div style="display: flex;flex-direction: column;gap: 16px;align-items: center">
          <TImage
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            style="width: 160px; height: 160px"
            shape="circle"
            fit="cover"
          />
          <span>circle</span>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
