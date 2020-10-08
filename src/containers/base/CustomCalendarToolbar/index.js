import React, { Fragment } from 'react';
import { Row, Col, Button, Typography } from 'antd';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import { PRIMARY_TEXT_DARK } from 'lib/utils/colors';

import CustomButton from 'components/common/CustomButton';

const { Text } = Typography;
export default class CustomToolbar extends Toolbar {
  componentDidMount() {
    const view = this.props.view;
    console.log(view);
  }

  render() {
    return (
      <Fragment>
        <Row align="middle" className="custom-toolbar">
          <Col span="24" style={{ display: 'flex', alignItems: 'center' }}>
            <Text
              level={4}
              style={{ marginRight: '5px' }}
              className="current-date"
            >
              {this.props.label}
            </Text>
            <CustomButton
              icon={
                <Icon
                  path={mdiChevronLeft}
                  size={1}
                  color={PRIMARY_TEXT_DARK}
                  onClick={() => this.navigate('PREV')}
                />
              }
              border={'none'}
              shape={'circle'}
            />
            <CustomButton
              icon={
                <Icon
                  path={mdiChevronRight}
                  size={1}
                  color={PRIMARY_TEXT_DARK}
                  onClick={() => this.navigate('NEXT')}
                />
              }
              border={'none'}
              shape={'circle'}
            />
            <Button size={'large'} onClick={() => this.navigate('TODAY')}>
              {'Today'}
            </Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
