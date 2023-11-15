<script>
  import { TTable, TTableColumn, TTag, TIcon } from 'tdesign-svelte';
  import codeTemplate from '../config/code.json';

  const demoCode = codeTemplate.base;

  const statusNameListMap = {
    0: { label: '审批通过', theme: 'success', icon: 'checkCircleFilled' },
    1: { label: '审批失败', theme: 'danger', icon: 'closeCircleFilled' },
    2: { label: '审批过期', theme: 'warning', icon: 'errorCircleFilled' },
  };

  let data = [];
  const total = 4;
  for (let i = 0; i < total; i++) {
    data.push({
      applicant: ['贾明', '张三', '王芳'][i % 3],
      status: i % 3,
      channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
      detail: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
      time: [2, 3, 1, 4][i % 4],
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    });
  }

  const columns = [
    { colKey: 'applicant', title: '申请人', width: '100' },
    { colKey: 'status', title: '申请状态' },
    { colKey: 'channel', title: '签署方式' },
    { colKey: 'detail', title: '邮箱地址', ellipsis: true },
    { colKey: 'createTime', title: '申请时间' },
  ];
</script>

<div class="tdesign-demo-wrapper tdesign-demo-item--table-base tdesign-demo-item--table">
  <td-doc-demo mode="auto" language="markup" code={demoCode}>
    <div class="tdesign-demo-item__body">
      <TTable {data} {columns} bordered>
        <TTableColumn prop="status" let:row>
          <TTag shape="round" theme={statusNameListMap[row.status].theme} variant="light-outline">
            <TIcon name={statusNameListMap[row.status].icon} slot="icon" />
            {statusNameListMap[row.status].label}
          </TTag>
        </TTableColumn>
      </TTable>
    </div>
  </td-doc-demo>
</div>
