import styled from 'styled-components';
import { BORDER_GREY_LIGHT, PRIMARY_DARK } from 'lib/utils/colors';

const SettingWrapper = styled.div`
  position: fixed;
  top: 67px;
  left: 0px;
  background-color: white;
  height: calc(100vh - 73px);
  z-index: 6;
  border: 1px solid ${BORDER_GREY_LIGHT};
  box-shadow: 0 3px 7px 0px ${PRIMARY_DARK};
  min-width: 350px;
`;

export default SettingWrapper;
