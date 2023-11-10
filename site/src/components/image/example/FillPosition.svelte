<script>
  import {TImage} from 'tdesign-svelte'

</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--image-fill-position tdesign-demo-item--image">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction:column;gap: 16px">
        <div style="display: flex;gap: 16px">
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              position="center"
              style="width: 120px; height: 120px"
            />
            <span>cover center</span>
          </div>
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style="width: 120px; height: 120px"
              position="left"
            />
            <span>cover left</span>
          </div>
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style="width: 120px; height: 120px"
              position="right"
            />
            <span>cover right</span>
          </div>
        </div>

        <div style="margin-top: 20px;display: flex;gap: 16px">
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style="width: 280px; height: 120px"
              position="top"
            />
            <span>cover top</span>
          </div>
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="cover"
              style="width: 280px; height: 120px"
              position="bottom"
            />
            <span>cover bottom</span>
          </div>
        </div>

        <div style="margin-top: 20px;display: flex;gap: 16px">
          <div style="display: flex;flex-direction:column;gap: 16px">
              <TImage
                src="https://tdesign.gtimg.com/demo/demo-image-1.png"
                fit="contain"
                style="width: 120px; height: 200px"
                position="top"
              />
              <span>contain top</span>
          </div>
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="contain"
              style="width: 120px; height: 200px"
              position="bottom"
            />
            <span>contain bottom</span>
          </div>
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="contain"
              style="width: 120px; height: 200px"
              position="center"
            />
            <span>contain center</span>
          </div>
        </div>

        <div style="margin-top: 20px;display: flex;gap: 16px">
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="contain"
              style="width: 280px; height: 120px"
              position="left"
            />
            <span>contain left</span>
          </div>
          <div style="display: flex;flex-direction:column;gap: 16px">
            <TImage
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              fit="contain"
              style="width: 280px; height: 120px"
              position="right"
            />
            <span>contain right</span>
          </div>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
