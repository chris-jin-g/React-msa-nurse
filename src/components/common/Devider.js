import styled from 'styled-components';
import { BORDER_GREY_LIGHT, PRIMARY_LIGHT } from 'lib/utils/colors';

const FilterWrapper = styled.div`
  width: ${props => (props.width ? props.width : 2)}px;
  height: ${props => (props.height ? props.height : 2)}px;
  ${props => (props.width ? `border-top: 1px solid ${PRIMARY_LIGHT}` : '0px')};
  ${props =>
    props.height ? `border-left: 1px solid ${PRIMARY_LIGHT}` : '0px'};
  border-color: ${BORDER_GREY_LIGHT};
`;

export default FilterWrapper;
