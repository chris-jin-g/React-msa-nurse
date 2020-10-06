import React, { Fragment } from 'react';
import { Button } from 'antd';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import { PRIMARY_TEXT_DARK } from 'lib/utils/colors';

import HeaderBody from 'components/HeaderBody';
import HeaderItem from 'components/common/HeaderItem';
import StyledText from 'components/common/StyledText';
import CustomButton from 'components/common/CustomButton';

export default class CustomToolbar extends Toolbar {
  componentDidMount() {
    const view = this.props.view;
    console.log(view);
  }

  render() {
    return (
      <Fragment>
        <HeaderBody className="custom-toolbar">
          <StyledText weight={500} tbl={'none'} mb={'none'}>
            {this.props.label}
          </StyledText>
          <HeaderItem>
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
          </HeaderItem>
          <HeaderItem>
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
          </HeaderItem>
          <HeaderItem>
            <Button size={'large'} onClick={() => this.navigate('TODAY')}>
              {'Today'}
            </Button>
          </HeaderItem>
        </HeaderBody>
      </Fragment>
    );
  }
}
