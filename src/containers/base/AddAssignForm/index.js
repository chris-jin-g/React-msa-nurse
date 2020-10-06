import React, { Fragment } from 'react';
import moment from 'moment';
import { Row, Col, Input, Select, Avatar, DatePicker, Button } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

import {
  PRIMARY_TEXT_DARK,
  SECONDARY_GREY,
  PRIMARY_LIGHT_GREEN,
  PRIMARY_LIGHT
} from 'lib/utils/colors';

import StyledText from 'components/common/StyledText';
import HeaderBody from 'components/HeaderBody';
import HeaderItem from 'components/common/HeaderItem';
import ModalWrapper from 'components/common/ModalWrapper';
import CustomButton from 'components/common/CustomButton';
import messages from './messages';

const AddAssignForm = props => {
  const { Option } = Select;

  const onChangeDatePicker = (date, dateString) => {
    console.log('date time changes');
  };
  return (
    <Fragment>
      <ModalWrapper>
        <Row gutter={[16, 0]}>
          <Col span={24}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 10px'
              }}
            >
              <HeaderBody>
                <HeaderItem></HeaderItem>
              </HeaderBody>

              <HeaderBody>
                <HeaderItem direction={'column'}>
                  <StyledText align={'center'} size={18} weight={700}>
                    {messages.headerTitle}
                  </StyledText>
                </HeaderItem>
              </HeaderBody>
              <HeaderBody>
                <Button type="text" onClick={() => props.closeSetting()}>
                  <StyledText
                    align={'center'}
                    size={18}
                    weight={700}
                    color={PRIMARY_TEXT_DARK}
                  >
                    x
                  </StyledText>
                </Button>
              </HeaderBody>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ borderTop: '1px solid #e0dcdc' }}></Col>
        </Row>
        <div style={{ padding: '20px 50px' }}>
          <Row gutter={[16, 12]} style={{ marginBottom: '20px' }}>
            <Col span={24}>
              <StyledText color={SECONDARY_GREY}>{messages.note}</StyledText>
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
                  <StyledText color={SECONDARY_GREY}>
                    {messages.client}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder={messages.placeholder}
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                  >
                    <Option value="all">
                      <Avatar size={24} icon={<UserOutlined />} />
                      <StyledText color={PRIMARY_TEXT_DARK} margin={'10px'}>
                        All Clients
                      </StyledText>
                    </Option>
                    <Option value="lucy">
                      <Avatar size={24} icon={<UserOutlined />} />
                      <StyledText color={PRIMARY_TEXT_DARK} margin={'10px'}>
                        Alexa Tenorio
                      </StyledText>
                    </Option>
                    <Option value="tom">
                      <Avatar size={24} icon={<UserOutlined />} />
                      <StyledText color={PRIMARY_TEXT_DARK} margin={'10px'}>
                        Sarah Vasquez
                      </StyledText>
                    </Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <StyledText color={SECONDARY_GREY}>
                    {messages.claimants}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                  >
                    <Option value="all">All Claimants</Option>
                    <Option value="Disabled">Disabled</Option>
                    <Option value="Enabled">Enabled</Option>
                    <Option value="Lock Status">Lock Status</Option>
                    <Option value="Normal">Normal</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[12, 24]}>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <StyledText color={SECONDARY_GREY}>
                    {messages.assignTo}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                  >
                    <Option value="all">Robert C</Option>
                    <Option value="steven">Steven James</Option>
                    <Option value="william">Art William</Option>
                    <Option value="rokas">Rokas Santos</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <StyledText color={SECONDARY_GREY}>
                    {messages.report}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                  >
                    <Option value="all">All clients</Option>
                    <Option value="lucy">Steven James</Option>
                    <Option value="tom">Art William</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[12, 28]}>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <StyledText color={SECONDARY_GREY}>
                    {messages.startDate}
                  </StyledText>
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
                  <StyledText color={SECONDARY_GREY}>
                    {messages.endDate}
                  </StyledText>
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
          <Row>
            <Col span={24}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CustomButton
                  backgroundcolor={PRIMARY_LIGHT_GREEN}
                  color={PRIMARY_LIGHT}
                  size={'large'}
                >
                  {messages.confirmLabel}
                </CustomButton>
              </div>
            </Col>
          </Row>
        </div>
      </ModalWrapper>
    </Fragment>
  );
};

export default AddAssignForm;
