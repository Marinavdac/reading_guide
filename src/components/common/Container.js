import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 100%;
padding: 0;
margin: 0;
margin-bottom: ${props => props.footer? '0' : '10px'};
display: flex;
justify-content: space-around;
position: relative;

`;
