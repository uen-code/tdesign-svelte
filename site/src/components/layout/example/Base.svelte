<script>
  import {TLayout, THeader, TContent, TFooter, TSpace, TAside} from 'tdesign-svelte'
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--layout-base tdesign-demo-item--layout">
  <td-doc-demo mode="auto" language="markup">
    <div class="tdesign-demo-item__body">
      <TSpace direction="vertical">
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
      </TSpace>
    </div>
  </td-doc-demo>
</div>