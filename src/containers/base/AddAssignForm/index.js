import React, { Fragment } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Input,
  Select,
  Avatar,
  DatePicker,
  Typography,
  Layout
} from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

import { PRIMARY_LIGHT_GREEN, PRIMARY_LIGHT } from 'lib/utils/colors';

import CustomButton from 'components/common/CustomButton';
import messages from './messages';

const { Title, Text } = Typography;
const { Content } = Layout;

const clients = ['All clients', 'Alexa tenuiri', 'Saraf basarf'];
const claiments = [
  'All claiments',
  'Disabled',
  'Enabled',
  'Lock Status',
  'Normal'
];
const assignUsers = ['Robert C', 'Steven James', 'Dinial R', 'Antony Gen'];
const reports = ['All clients', 'Steven James', 'Art William'];

const AddAssignForm = props => {
  const { Option } = Select;

  const onChangeDatePicker = (date, dateString) => {
    console.log('date time changes');
  };
  return (
    <Fragment>
      <Row align="middle" style={{ minHeight: '70px' }}>
        <Col xs={24}>
          <Row center="xs" justify="center">
            <Title level={4}>{messages.headerTitle}</Title>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ borderTop: '1px solid #e0dcdc' }}></Col>
      </Row>
      <Content style={{ padding: '20px 50px' }}>
        <Row gutter={[16, 12]}>
          <Col span={24}>
            <Text level={4} type="secondary">
              {messages.note}
            </Text>
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Please enter"
              prefix={<SearchOutlined />}
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        <Row gutter={[16, 12]}>
          <Col span={12}>
            <Row gutter={[16, 12]}>
              <Col span={24}>
                <Text level={5} type="secondary">
                  {messages.client}
                </Text>
              </Col>
              <Col span={24}>
                <Select
                  showSearch
                  placeholder={messages.placeholder}
                  optionFilterProp="children"
                  style={{ width: '100%' }}
                >
                  {clients.map((client, id) => {
                    return (
                      <Option value="all" key={`client-${id}`}>
                        <Avatar size={24} icon={<UserOutlined />} />
                        <Text level={5} style={{ marginLeft: '5px' }}>
                          {client}
                        </Text>
                      </Option>
                    );
                  })}
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={[16, 12]}>
              <Col span={24}>
                <Text level={5} type="secondary">
                  {messages.claimants}
                </Text>
              </Col>
              <Col span={24}>
                <Select
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  style={{ width: '100%' }}
                >
                  {claiments.map((claiment, id) => {
                    return (
                      <Option value="all" key={`claiment-${id}`}>
                        {claiment}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[16, 12]}>
          <Col span={12}>
            <Row gutter={[12, 8]}>
              <Col span={24}>
                <Text level={5} type="secondary">
                  {messages.assignTo}
                </Text>
              </Col>
              <Col span={24}>
                <Select
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  style={{ width: '100%' }}
                >
                  {assignUsers.map((assignUser, id) => {
                    return (
                      <Option value="all" key={`assign-${id}`}>
                        {assignUser}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={[16, 12]}>
              <Col span={24}>
                <Text level={5} type="secondary">
                  {messages.report}
                </Text>
              </Col>
              <Col span={24}>
                <Select
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  style={{ width: '100%' }}
                >
                  {reports.map((report, id) => {
                    return (
                      <Option value="all" key={`report-${id}`}>
                        {report}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[16, 12]}>
          <Col span={12}>
            <Row gutter={[12, 8]}>
              <Col span={24}>
                <Text level={5} type="secondary">
                  {messages.startDate}
                </Text>
              </Col>
              <Col span={24}>
                <DatePicker
                  onChange={onChangeDatePicker}
                  defaultValue={moment(new Date())}
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={[16, 12]}>
              <Col span={24}>
                <Text level={5} type="secondary">
                  {messages.endDate}
                </Text>
              </Col>
              <Col span={24}>
                <DatePicker
                  onChange={onChangeDatePicker}
                  defaultValue={moment(new Date())}
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <CustomButton
            backgroundcolor={PRIMARY_LIGHT_GREEN}
            color={PRIMARY_LIGHT}
            size={'large'}
          >
            {messages.confirmLabel}
          </CustomButton>
        </Row>
      </Content>
    </Fragment>
  );
};

export default AddAssignForm;
