import styled from 'styled-components';
import { Typography } from 'antd';
import { PRIMARY_TEXT_DARK } from 'lib/utils/colors';
import media from 'lib/MediaQuery';

const { Text } = Typography;

const StyledText = styled(Text)`
  text-align: ${props => (props.align ? props.align : '')};
  font-size: ${props => (props.size ? props.size : '14')}px;
  font-weight: ${props => (props.weight ? props.weight : '300')};
  color: ${props => (props.color ? props.color : PRIMARY_TEXT_DARK)};
  margin: ${props => (props.margin ? props.margin : '')};
  font-family: 'Roboto', sans-serif;
  ${media.tablet`
    display: ${props => (props.tbl ? props.tbl : '')}
  `}

  ${media.phone`
    display: ${props => (props.mb ? props.mb : '')}
  `}
`;

export default StyledText;
