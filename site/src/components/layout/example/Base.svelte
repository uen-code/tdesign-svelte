<script>
  import { TLayout, THeader, TContent, TFooter, TAside } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--layout-base tdesign-demo-item--layout">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <div style="display: flex;flex-direction: column;gap:16px">
        <div>
          <TLayout>
            <THeader>Header</THeader>
            <TContent>Content</TContent>
            <TFooter>Footer</TFooter>
          </TLayout>
        </div>

        <div>
          <TLayout>
            <THeader>Header</THeader>
            <TLayout>
              <TAside>Aside</TAside>
              <TContent>Content</TContent>
            </TLayout>
            <TFooter>Footer</TFooter>
          </TLayout>
        </div>

        <div>
          <TLayout>
            <THeader>Header</THeader>
            <TLayout>
              <TContent>Content</TContent>
              <TAside>Aside</TAside>
            </TLayout>
            <TFooter>Footer</TFooter>
          </TLayout>
        </div>

        <div>
          <TLayout>
            <TAside>Aside</TAside>
            <TLayout>
              <THeader>Header</THeader>
              <TContent>Content</TContent>
              <TFooter>Footer</TFooter>
            </TLayout>
          </TLayout>
        </div>
      </div>
    </div>
  </td-doc-demo>
</div>
