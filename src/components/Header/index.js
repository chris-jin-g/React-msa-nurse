import styled from 'styled-components';
import { Layout } from 'antd';
import { BORDER_GREY_LIGHT, PRIMARY_LIGHT } from 'lib/utils/colors';

const { Header } = Layout;

const NavbarHeader = styled(Header)`
  position: fixed;
  zindex: 1 !important;
  width: 100%;
  padding: 0;
  height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${BORDER_GREY_LIGHT};
  background-color: ${PRIMARY_LIGHT};
  z-index: 5;
`;

export default NavbarHeader;
