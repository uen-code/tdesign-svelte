<script>
  import { TDivider } from 'tdesign-svelte';

  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--divider-base tdesign-demo-item--divider">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="flex-direction: column;display: flex;gap:16px">
        <p>
          这是第一种类型的内容元素或信息数据，通过分割线进行分割。分割线方便用户清晰明确的读取和预览，减少信息符合，提高用户使用效率。避免大段内容的聚集、信息负荷过多，导致信息获取或内容操作效率降低。
        </p>
        <TDivider />
        <p>
          这是第二种类型的内容元素或信息数据，通过分割线进行分割。分割线方便用户清晰明确的读取和预览，减少信息符合，提高用户使用效率。避免大段内容的聚集、信息负荷过多，导致信息获取或内容操作效率降低。
        </p>
        <TDivider dashed />
        <p>
          这是第三种类型的内容元素或信息数据，通过分割线进行分割。分割线方便用户清晰明确的读取和预览，减少信息符合，提高用户使用效率。避免大段内容的聚集、信息负荷过多，导致信息获取或内容操作效率降低。
        </p>
      </div>
    </div>
  </td-doc-demo>
</div>
