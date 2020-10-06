import React, { Fragment } from 'react';
import moment from 'moment';
import { Row, Col, Input, Select, Avatar, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
  PRIMARY_TEXT_DARK,
  PRIMARY_LIGHT_BLUE,
  SECONDARY_GREY
} from 'lib/utils/colors';

import StyledText from 'components/common/StyledText';
import HeaderBody from 'components/HeaderBody';
import HeaderItem from 'components/common/HeaderItem';
import SettingWrapper from 'components/common/SettingWrapper';
import CustomButton from 'components/common/CustomButton';
import TextButton from 'components/common/TextButton';
import messages from './messages';

const FilterSetting = props => {
  const { Option } = Select;

  const onChangeDatePicker = (date, dateString) => {
    console.log('date time changes');
  };
  return (
    <Fragment>
      <SettingWrapper>
        <Row gutter={[16, 0]}>
          <Col span={24}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '15px 10px'
              }}
            >
              <HeaderBody>
                <HeaderItem>
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
                    <StyledText
                      align={'center'}
                      size={15}
                      weight={500}
                      color={PRIMARY_LIGHT_BLUE}
                    >
                      {messages.reset}
                    </StyledText>
                  </TextButton>
                </HeaderItem>
              </HeaderBody>

              <HeaderBody>
                <HeaderItem direction={'column'}>
                  <StyledText align={'center'} size={18} weight={700}>
                    {messages.filterSettingHeaderTitle}
                  </StyledText>
                </HeaderItem>
              </HeaderBody>
              <HeaderBody>
                <TextButton
                  color={PRIMARY_TEXT_DARK}
                  onClick={() => props.closeSetting()}
                >
                  <StyledText
                    align={'center'}
                    size={20}
                    weight={700}
                    color={PRIMARY_TEXT_DARK}
                    style={{
                      transform: 'scale(1.0, 0.9)',
                      marginRight: '20px'
                    }}
                  >
                    x
                  </StyledText>
                </TextButton>
              </HeaderBody>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ borderTop: '1px solid #e0dcdc' }}></Col>
        </Row>
        <div style={{ padding: '20px 30px' }}>
          <Row gutter={[16, 12]}>
            <Col span={24}>
              <StyledText color={SECONDARY_GREY}>
                {messages.searchLabel}
              </StyledText>
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
                    {messages.assigneeLabel}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    <Option value="all">
                      <Avatar
                        size={24}
                        src={
                          'http://www.cetaceanstechlab.com/theme/flingo/tf-demo/assets/images/user/250/01.jpg'
                        }
                      />
                      <StyledText color={PRIMARY_TEXT_DARK} margin={'10px'}>
                        All Nurses
                      </StyledText>
                    </Option>
                    <Option value="lucy">
                      <Avatar
                        size={24}
                        src={
                          'http://www.cetaceanstechlab.com/theme/flingo/tf-demo/assets/images/user/250/02.jpg'
                        }
                      />
                      <StyledText color={PRIMARY_TEXT_DARK} margin={'10px'}>
                        Alexa Tenorio
                      </StyledText>
                    </Option>
                    <Option value="tom">
                      <Avatar
                        size={24}
                        src={
                          'http://www.cetaceanstechlab.com/theme/flingo/tf-demo/assets/images/user/500/07.jpg'
                        }
                      />
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
                    {messages.assignmentLabel}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    <Option value="all">All Statuses</Option>
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
                    {messages.clientLabel}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    <Option value="all">All Clients</Option>
                    <Option value="steven">Steven James</Option>
                    <Option value="william">Art William</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row gutter={[12, 8]}>
                <Col span={24}>
                  <StyledText color={SECONDARY_GREY}>
                    {messages.climantLabel}
                  </StyledText>
                </Col>
                <Col span={24}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    style={{ width: '100%' }}
                    defaultValue="all"
                  >
                    <Option value="all">All Claimants</Option>
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
                    {messages.dateFrom}
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
                    {messages.dateTo}
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
                  backgroundcolor={'#6f66fd'}
                  color={'#ffffff'}
                  size={'large'}
                >
                  APPLY
                </CustomButton>
              </div>
            </Col>
          </Row>
        </div>
      </SettingWrapper>
    </Fragment>
  );
};

export default FilterSetting;
