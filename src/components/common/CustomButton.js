import styled from 'styled-components';
import { Button } from 'antd';

const NavbarHeader = styled(Button)`
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : ''};
  color: ${props => (props.color ? props.color : '')};
  ${props => `border: ${props.border}`};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:active,
  &: focus {
    background-color: ${props =>
      props.backgroundcolor ? props.backgroundcolor : ''};
    color: ${props => (props.color ? props.color : '')};
  }
  &: hover {
    ${props => (props.border === 'none' ? 'transform:scale(1.2)' : '')};
  }
`;

export default NavbarHeader;
