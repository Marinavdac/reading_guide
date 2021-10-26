import styled from 'styled-components';

export const StyledFooter = styled.footer`
background: linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
padding: 100px 0 60px;

ul {
    list-style-type:none;
}

ul li {
    margin-bottom: 20px;
}

p {
    text-align: right;
}

@media(max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
        padding: 0;
    }
    
    p {
        text-align: center;
    }
}

`