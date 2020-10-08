/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Layout, Modal, Typography } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Icon from '@mdi/react';
import { mdiFilterVariant, mdiViewList, mdiViewModule, mdiPlus } from '@mdi/js';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
  PRIMARY_TEXT_DARK,
  PRIMARY_LIGHT_GREEN,
  PRIMARY_LIGHT
} from 'lib/utils/colors';

import AddAssignForm from 'containers/base/AddAssignForm';
import DataTable from 'containers/base/DataTable';
import FilterSetting from 'containers/base/FilterSetting';
import CustomToolbar from 'containers/base/CustomCalendarToolbar';
import NavbarHeader from 'components/Header';
import FilterWrapper from 'components/FilterWrapper';
import Devider from 'components/common/Devider';
import StatusIcon from 'components/common/StatusIcon';
import HideFullScreen from 'components/common/HideFullScreen';
import CustomButton from 'components/common/CustomButton';
import { initEvents } from './data.js';
import messages from './messages';

const { Content } = Layout;
const { Title, Text } = Typography;
const localizer = momentLocalizer(moment);

const Assignmet = () => {
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState('calendar');
  const [showFilterSetting, setShowFilterSetting] = useState(false);
  const [showNewAssignForm, setShowNewAssignForm] = useState(false);

  useEffect(() => {
    setEvents([...events, ...initEvents]);
  }, []);

  const handleSetViewMode = mode => {
    setViewMode(mode);
    if (mode === messages.table) {
      handleShowFilterSetting(false);
      handleShowAddAssignForm(false);
    }
  };

  const handleShowFilterSetting = e => {
    if (viewMode !== messages.calendar) return false;
    setShowFilterSetting(e);
  };

  const handleShowAddAssignForm = e => {
    if (viewMode !== messages.calendar) return false;
    setShowNewAssignForm(e);
  };

  return (
    <Fragment>
      <Layout>
        <NavbarHeader>
          <Col lg={9} md={9} sm={12} xs={12}>
            <Row justify="start" align="middle">
              <FilterWrapper>
                <Icon
                  path={mdiFilterVariant}
                  size={1}
                  onClick={() => handleShowFilterSetting(true)}
                />
              </FilterWrapper>
              <Devider height={67}></Devider>
              <Title
                level={5}
                style={{ margin: '0 0 0 15px' }}
                className="view-mode"
              >
                {messages.viewMode}
              </Title>
              <Icon
                path={mdiViewList}
                size={1}
                color={
                  viewMode === messages.table
                    ? PRIMARY_LIGHT_GREEN
                    : PRIMARY_TEXT_DARK
                }
                style={{ cursor: 'pointer', marginLeft: '10px' }}
                onClick={() => handleSetViewMode(messages.table)}
              />
              <Icon
                path={mdiViewModule}
                size={1}
                color={
                  viewMode === messages.calendar
                    ? PRIMARY_LIGHT_GREEN
                    : PRIMARY_TEXT_DARK
                }
                style={{ cursor: 'pointer', marginLeft: '10px' }}
                onClick={() => handleSetViewMode(messages.calendar)}
              />
            </Row>
          </Col>

          <Col
            lg={6}
            md={6}
            sm={0}
            xs={0}
            style={{ lineHeight: '1.4', flexDirection: 'column' }}
          >
            <Title level={4} style={{ margin: '0', textAlign: 'center' }}>
              {messages.headerTitle}
            </Title>
            <Text
              type="secondary"
              strong
              style={{ textAlign: 'center', display: 'block' }}
            >
              {messages.headerSubTitle}
            </Text>
          </Col>

          <Col span={8}>
            <Row justify="end">
              <CustomButton
                size={'large'}
                style={{ marginRight: '15px' }}
                icon={<Icon path={mdiPlus} size={1} color={PRIMARY_LIGHT} />}
                backgroundcolor={PRIMARY_LIGHT_GREEN}
                onClick={() => handleShowAddAssignForm(true)}
              />
            </Row>
          </Col>
        </NavbarHeader>

        <Content className="site-layout" style={{ marginTop: 67 }}>
          {showFilterSetting ? (
            <Fragment>
              <FilterSetting
                closeSetting={() => handleShowFilterSetting(false)}
              />
              <HideFullScreen
                zIndex={5}
                onClick={() => handleShowFilterSetting(false)}
              />
            </Fragment>
          ) : (
            ''
          )}

          <Modal
            bodyStyle={{ padding: '0px', minWidth: '350px' }}
            visible={showNewAssignForm}
            onOk={() => handleShowAddAssignForm(true)}
            onCancel={() => handleShowAddAssignForm(false)}
            footer=""
          >
            <AddAssignForm />
          </Modal>

          {viewMode === messages.calendar ? (
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView={'month'}
              events={events}
              style={{ height: 'calc( 100vh - 67px )' }}
              popup={true}
              components={{
                toolbar: CustomToolbar,
                month: {
                  dateHeader: props => (
                    <Fragment>
                      <a href="#">{Number(props.label)}</a>
                    </Fragment>
                  )
                },
                event: e => EventComponent(e)
              }}
            />
          ) : (
            <DataTable />
          )}
        </Content>
      </Layout>
    </Fragment>
  );
};

const EventComponent = event => {
  return (
    <Fragment>
      <StatusIcon bgColor={PRIMARY_LIGHT_GREEN} />
      {event.title}
    </Fragment>
  );
};

export default Assignmet;
