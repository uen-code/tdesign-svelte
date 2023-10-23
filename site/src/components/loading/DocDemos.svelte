<script>
  import {TMessage} from "tdesign-svelte";
</script>

<div name="DOC" id="test">
  <nav class="tdesign-toc_container">
    <ol class="tdesign-toc_list">
      <li class="tdesign-toc_list_item">
        <a href="#表格分类" class="tdesign-toc_list_item_a">表格分类</a>
      </li>
      <li class="tdesign-toc_list_item">
        <a href="#基础表格" class="tdesign-toc_list_item_a">基础表格</a>
      </li>
    </ol>
  </nav>

  <td-doc-demo>
    <div style="padding: 100px;">
      <TMessage>这是一个消息</TMessage>
    </div>
  </td-doc-demo>
  <td-doc-demo show-code mode="open"></td-doc-demo>
</div>