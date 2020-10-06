import React, { Fragment } from 'react';
import { Avatar } from 'antd';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { SECONDARY_GREY } from 'lib/utils/colors';

import StatusIcon from 'components/common/StatusIcon';
import StyledText from 'components/common/StyledText';
import { tableData, columns } from './data.js';

const statusColor = {
  'In progress': '#72ccff',
  Pending: '#f8c56d',
  Declined: '#ff7272  '
};

const DataTable = () => {
  return (
    <Fragment>
      <Table className="assign-tbl">
        <Thead>
          <Tr>
            {columns.map((column, id) => {
              return (
                <Th>
                  <StyledText weight={'500'} color={SECONDARY_GREY}>
                    {column.title}
                  </StyledText>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data, id) => {
            return (
              <Tr>
                {columns.map((column, id) => {
                  if (column.dataIndex === 'assignee') {
                    return (
                      <Td>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItem: 'center'
                          }}
                        >
                          <div
                            style={{
                              marginRight: '10px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <Avatar src={data['avatar']} />
                          </div>
                          <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <div>
                              <StyledText size={15}>
                                {data['assignee']}
                              </StyledText>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                              }}
                            >
                              <StatusIcon
                                bgColor={statusColor[data['status']]}
                              />
                              <div>{data['status']}</div>
                            </div>
                          </div>
                        </div>
                      </Td>
                    );
                  } else {
                    return <Td>{data[column.dataIndex]}</Td>;
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
