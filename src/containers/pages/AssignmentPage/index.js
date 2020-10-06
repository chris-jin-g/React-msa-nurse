/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Icon from '@mdi/react';
import { mdiFilterVariant, mdiViewList, mdiViewModule, mdiPlus } from '@mdi/js';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
  PRIMARY_TEXT_DARK,
  PRIMARY_LIGHT_GREEN,
  PRIMARY_LIGHT,
  SECONDARY_GREY
} from 'lib/utils/colors';

import AddAssignForm from 'containers/base/AddAssignForm';
import DataTable from 'containers/base/DataTable';
import FilterSetting from 'containers/base/FilterSetting';
import CustomToolbar from 'containers/base/CustomCalendarToolbar';
import NavbarHeader from 'components/Header';
import FilterWrapper from 'components/FilterWrapper';
import HeaderBody from 'components/HeaderBody';
import Devider from 'components/common/Devider';
import HeaderItem from 'components/common/HeaderItem';
import StyledText from 'components/common/StyledText';
import StatusIcon from 'components/common/StatusIcon';
import HideFullScreen from 'components/common/HideFullScreen';
import CustomButton from 'components/common/CustomButton';
import { initEvents } from './data.js';
import messages from './messages';

const { Content } = Layout;
const localizer = momentLocalizer(moment);

const Assignmet = () => {
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState('calendar');
  const [showFilterSetting, setShowFilterSetting] = useState(false);
  const [showNewAssignForm, setShowNewAssignForm] = useState(false);

  useEffect(() => {
    setEvents([...events, ...initEvents]);
  }, []);

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
          <HeaderBody>
            <FilterWrapper>
              <Icon
                path={mdiFilterVariant}
                size={1}
                onClick={() => handleShowFilterSetting(true)}
              />
            </FilterWrapper>
            <Devider height={67}></Devider>

            <HeaderItem tbl={'none'} mb={'none'}>
              <StyledText weight={500}>{messages.viewMode}</StyledText>
            </HeaderItem>

            <HeaderItem>
              <Icon
                path={mdiViewList}
                size={1}
                color={
                  viewMode === messages.table
                    ? PRIMARY_LIGHT_GREEN
                    : PRIMARY_TEXT_DARK
                }
                style={{ cursor: 'pointer' }}
                onClick={() => setViewMode(messages.table)}
              />
            </HeaderItem>

            <HeaderItem>
              <Icon
                path={mdiViewModule}
                size={1}
                color={
                  viewMode === messages.calendar
                    ? PRIMARY_LIGHT_GREEN
                    : PRIMARY_TEXT_DARK
                }
                style={{ cursor: 'pointer' }}
                onClick={() => setViewMode(messages.calendar)}
              />
            </HeaderItem>
          </HeaderBody>

          <HeaderBody>
            <HeaderItem direction={'column'} tbl={'none'} mb={'none'}>
              <StyledText align={'center'} size={18} weight={700}>
                {messages.headerTitle}
              </StyledText>
              <StyledText align={'center'} weight={400} color={SECONDARY_GREY}>
                {messages.headerSubTitle}
              </StyledText>
            </HeaderItem>
          </HeaderBody>
          <HeaderBody>
            <div style={{ display: 'inline-box', width: '100px' }} />
            <HeaderItem style={{ marginRight: '20px' }}>
              <CustomButton
                size={'large'}
                icon={<Icon path={mdiPlus} size={1} color={PRIMARY_LIGHT} />}
                backgroundcolor={PRIMARY_LIGHT_GREEN}
                onClick={() => handleShowAddAssignForm(true)}
              />
            </HeaderItem>
          </HeaderBody>
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

          {showNewAssignForm ? (
            <Fragment>
              <AddAssignForm
                closeSetting={() => handleShowAddAssignForm(false)}
              />
              <HideFullScreen
                zIndex={5}
                top={'0px'}
                onClick={() => handleShowAddAssignForm(false)}
              />
            </Fragment>
          ) : (
            ''
          )}

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
