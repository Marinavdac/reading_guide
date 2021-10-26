import styled from 'styled-components';


const StyledNavBar = styled.div`
display: flex;
align-items: center;
justify-content: right;

li {
    list-style: none;
}

a {
    border: 1px solid #fff;
    border-radius: 50%50%;
    color: black;
    display:inline-flex;
   justify-content: space-between;
    padding: 3.5rem;
    margin-right: 1rem;
    height: 4rem;
    width: 4rem;
    text-decoration: none;
    
}

`

export { StyledNavBar };