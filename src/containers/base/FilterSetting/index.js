import React, { Fragment } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Button,
  Input,
  Select,
  Avatar,
  DatePicker,
  Typography
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { PRIMARY_LIGHT_BLUE } from 'lib/utils/colors';

import SettingWrapper from 'components/common/SettingWrapper';
import CustomButton from 'components/common/CustomButton';
import TextButton from 'components/common/TextButton';
import messages from './messages';

const { Title, Text } = Typography;

const clients = ['All clients', 'Alexa tenuiri', 'Saraf basarf'];
const claiments = [
  'All claiments',
  'Disabled',
  'Enabled',
  'Lock Status',
  'Normal'
];
const statuses = ['All statuses', 'disabled', 'Enabled', 'Lock'];
const Assignees = [
  {
    name: 'Robert C',
    avatar:
      'http://www.cetaceanstechlab.com/theme/flingo/tf-demo/assets/images/user/250/01.jpg'
  },
  {
    name: 'Steven James',
    avatar:
      'http://www.cetaceanstechlab.com/theme/flingo/tf-demo/assets/images/user/250/01.jpg'
  },
  {
    name: 'Dinial R',
    avatar:
      'http://www.cetaceanstechlab.com/theme/flingo/tf-demo/assets/images/user/250/02.jpg'
  },
  {
    name: 'Antony Gen',
    avatar:
      'http://www.cetaceanstechlab.com/theme/flingo/tf-demo/assets/images/user/500/07.jpg'
  }
];

const FilterSetting = props => {
  const { Option } = Select;

  const onChangeDatePicker = (date, dateString) => {
    console.log('date time changes');
  };
  return (
    <Fragment>
      <SettingWrapper>
        <Row align="middle" style={{ minHeight: '70px' }}>
          <Col span={5} offset={1}>
            <Row start="xs" justify="start">
              <TextButton color={PRIMARY_LIGHT_BLUE}>
                <img
                  src={require('assets/icon/reset.png')}
                  alt="reset-icon"
                  style={{
                    width: '20px',
                    marginRight: '6px',
                    transform: 'scaleX(-1)'
                  }}
                />
                <Text level={4} style={{ color: PRIMARY_LIGHT_BLUE }}>
                  {messages.reset}
                </Text>
              </TextButton>
            </Row>
          </Col>

          <Col span={12}>
            <Row center="xs" justify="center">
              <Title level={4}>{messages.filterSettingHeaderTitle}</Title>
            </Row>
          </Col>

          <Col span={5}>
            <Row end="xs" justify="end">
              <Button type="text" onClick={() => props.closeSetting()}>
                <Title level={4}>x</Title>
              </Button>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ borderTop: '1px solid #e0dcdc' }}></Col>
        </Row>
        <div style={{ padding: '20px 30px' }}>
          <Row gutter={[16, 12]}>
            <Col span={24}>
              <Text level={4} type="secondary">
                {messages.searchLabel}
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
          <Row gutter={[12, 24]}>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <Text level={4} type="secondary">
                    {messages.assigneeLabel}
                  </Text>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    {Assignees.map((assignee, id) => {
                      return (
                        <Option value="all" key={`assignee-${id}`}>
                          <Avatar size={24} src={assignee.avatar} />
                          <Text
                            level={5}
                            type="secondary"
                            style={{ marginLeft: '6px' }}
                          >
                            {assignee.name}
                          </Text>
                        </Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <Text level={4} type="secondary">
                    {messages.assignmentLabel}
                  </Text>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    {statuses.map((status, id) => {
                      return (
                        <Option value="all" key={`status-${id}`}>
                          {status}
                        </Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={[12, 24]}>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <Text level={4} type="secondary">
                    {messages.clientLabel}
                  </Text>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    {clients.map((client, id) => {
                      return (
                        <Option value="all" key={`client-${id}`}>
                          {client}
                        </Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <Text level={4} type="secondary">
                    {messages.climantLabel}
                  </Text>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    {claiments.map((claiment, id) => {
                      return (
                        <Option value="all" key={`claiments-${id}`}>
                          {claiment}
                        </Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={[12, 28]}>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <Text level={4} type="secondary">
                    {messages.dateFrom}
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
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <Text level={4} type="secondary">
                    {messages.dateTo}
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
              backgroundcolor={'#6f66fd'}
              color={'#ffffff'}
              size={'large'}
            >
              APPLY
            </CustomButton>
          </Row>
        </div>
      </SettingWrapper>
    </Fragment>
  );
};

export default FilterSetting;
