import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
flex: none;
top: 0;
position: sticky;
height: 100vh;
width: 75px;
background-color: #7F0411;
`;

export const SidebarHeader = styled.div`
    border-bottom: 1px solid rgba(173, 173, 173, 0.2);
`;

export const Menu = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`;

export const MenuItem = styled.span`
    background-color: ${({ transparent }) => transparent ? 'transparent' : '#e8747466'};
    width: 45px;
    min-width: 45px;
    height: 45px;
    line-height: 35px;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    transition: transform, 0.1s;

    :hover {       
        transform: translateX(0px) rotate(30deg); 
    }

`;

export const Item = styled.span`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    
`;

export const HeaderIcon = styled(FontAwesomeIcon)`
    font-size: 28px;
    color: #E7E7E7;
`
export const SidebarFooter = styled.div`
    bottom: 10px;
    position: fixed;
    width: inherit;
`;

export const FooterIcon = styled(FontAwesomeIcon)`
    color: #E7E7E7;
`
export const SidebarLink = styled(Link)`
    text-decoration: none;
    display: inline-flex;
    vertical-align: middle;

`;

export const FooterItem = styled.span`
    width: 35px;
    min-width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    transition: transform, 0.1s;

    :hover {       
        transform: translateX(0px) rotate(30deg); 
        background-color: ${({ transparent }) => transparent ? 'transparent' : '#e8747466'};

    }

`;
