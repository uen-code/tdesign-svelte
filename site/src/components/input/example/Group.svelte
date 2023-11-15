<script>
  import { TInput, TInputGroup } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.group;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--input-group tdesign-demo-item--input">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap: 16px">
        <div>
          <TInputGroup separate>
            <TInput style="width: 100px " defaultValue="0731" />
            <TInput defaultValue="12345677" />
          </TInputGroup>
        </div>
        <div>
          <TInputGroup separate>
            <TInput />
            <TInput />
          </TInputGroup>
        </div>
        <div>
          <TInputGroup>
            <TInput />
            <TInput />
          </TInputGroup>
        </div>
        <div>
          <TInputGroup separate>
            <TInput style="width: 100px" defaultValue="0731" />
            <span style="line-height:32px">&nbsp;-&nbsp;</span>
            <TInput style="width: 100px" defaultValue="12345" />
            <TInput style="width: 100px" defaultValue="678901" />
            <TInput style="width: 100px" />
          </TInputGroup>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
