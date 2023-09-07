import { Table, TableProps } from 'antd';
import React from 'react';
import uniqid from 'uniqid';

const CustomTable: React.FC<TableProps<any>> = (_props) => (
  <Table {..._props} rowKey={() => uniqid()} scroll={{ x: 'auto' }} bordered />
);

export { CustomTable };
