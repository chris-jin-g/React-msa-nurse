import styled from 'styled-components';

const FilterWrapper = styled.div`
  width: 7px;
  height: 7px;
  display: inline-box;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
`;

export default FilterWrapper;
