import styled from 'styled-components';


const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  
  
`;

const Flex = styled.div`
display: flex;
align-items: center;

& > div,
& ul > {
  flex: 1;
}
`

export {StyledFlex, Flex}