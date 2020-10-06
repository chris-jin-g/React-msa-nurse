import styled from 'styled-components';
import media from 'lib/MediaQuery';

const HeaderItem = styled.div`
  display: flex;
  margin-left: 15px;
  flex-direction: ${props => (props.direction ? props.direction : '')};
  line-height: 22px;

  ${media.tablet`
    display: ${props => (props.tbl ? props.tbl : '')};
    margin-left: 5px;
  `}

  ${media.phone`
    display: ${props => (props.mb ? props.mb : '')};
  `}
`;

export default HeaderItem;
