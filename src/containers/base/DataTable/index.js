import React, { Fragment } from 'react';
import { Row, Col, Avatar, Typography } from 'antd';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import StatusIcon from 'components/common/StatusIcon';
import { tableData, columns } from './data.js';

const statusColor = {
  'In progress': '#72ccff',
  Pending: '#f8c56d',
  Declined: '#ff7272  '
};

const { Text } = Typography;

const DataTable = () => {
  return (
    <Fragment>
      <Table className="assign-tbl">
        <Thead>
          <Tr>
            {columns.map((column, id) => {
              return (
                <Th key={`head-${id}`}>
                  <Text level={5} type="secondary">
                    {column.title}
                  </Text>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data, rid) => {
            return (
              <Tr key={`row-${rid}`}>
                {columns.map((column, cid) => {
                  if (column.dataIndex === 'assignee') {
                    return (
                      <Td key={`cell-${rid}-${cid}`}>
                        <Row align="middle">
                          <Avatar
                            src={data['avatar']}
                            style={{ marginRight: '10px' }}
                          />
                          <Row>
                            <Col span={24}>{data['assignee']}</Col>
                            <Col span={24}>
                              <Row align="middle">
                                <StatusIcon
                                  bgColor={statusColor[data['status']]}
                                />
                                {data['status']}
                              </Row>
                            </Col>
                          </Row>
                        </Row>
                      </Td>
                    );
                  } else {
                    return (
                      <Td key={`cell-${rid}-${cid}`}>
                        {data[column.dataIndex]}
                      </Td>
                    );
                  }
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Fragment>
  );
};

export default DataTable;
