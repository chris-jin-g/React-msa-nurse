import styled from 'styled-components';

const HideFullScreen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${props => (props.zIndex ? props.zIndex : 1)};
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  top: ${props => (props.top ? props.top : '')};
`;

export default HideFullScreen;
