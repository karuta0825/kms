import * as React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import { Link } from 'react-router-dom';
import type { KidType } from '../../types';
import 'react-table/react-table.css';
import { searchByWord } from '../../utils';

// const CheckAbleTable = checkboxHOC(ReactTable);
const ReactTableFixedColumns = withFixedColumns(ReactTable);

type PropsType = {
  data: Array<KidType>
};
const columns = [
  {
    Header: 'KID',
    accessor: 'kid',
    fixed: true,
    Cell: (row): React.Node => {
      const url = `/kids/detail/${row.original.id}`;
      return <Link to={url}>{row.value}</Link>;
    },
  },
  {
    Header: '顧客名',
    accessor: 'user_name',
    fixed: true,
    width: 300,
  },
  {
    Header: 'サーバ',
    accessor: 'server',
  },
  {
    Header: 'ユーザーキー',
    accessor: 'userkey',
    width: 145,
  },
  {
    Header: 'DBパスワード',
    accessor: 'db_password',
    width: 145,
  },
  {
    Header: 'Fenicsキー',
    accessor: 'fenics_key',
  },
  {
    Header: 'ユーザ数(CitrixID数)',
    accessor: 'client_number',
    width: 175,
  },
  {
    Header: 'クライアント数(FENICSID数)',
    accessor: 'number_pc',
    width: 235,
  },
  {
    Header: 'ライセンス',
    accessor: 'license',
    width: 300,
  },
  {
    Header: '端末id範囲',
    accessor: 'range_id',
  },
  {
    Header: '更新日',
    accessor: 'update_on',
    width: 120,
  },
  {
    Header: 'SA販社名',
    accessor: 'sa_company',
  },
  {
    Header: 'SA担当者',
    accessor: 'sa_name',
  },
  {
    Header: 'SE販社名',
    accessor: 'se_company',
  },
];

function KidTable(props: PropsType): React.Node {
  const { data } = props;
  if (data.length === 0) { return null; }
  return (
    <ReactTableFixedColumns
      data={data}
      columns={columns}
      filterable
      defaultFilterMethod={(filter, row) => (
        row[filter.id] && row[filter.id].indexOf(filter.value) !== -1
      )}
      defaultPageSize={30}
      style={{
        height: '100%',
      }}
      className="-striped -highlight"
      previousText="前へ"
      nextText="次へ"
      pageText="ページ"
      ofText="/"
      showPageSizeOptions={false}
    />
  );
}

const mapStateToProps = state => ({
  data: searchByWord(state.data.kids, state.userListPage.filter.keyword),
});

export default connect(
  mapStateToProps,
)(KidTable);
