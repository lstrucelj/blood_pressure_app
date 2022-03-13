import React from 'react'
import { FooterIcon, FooterItem, HeaderIcon, Item, Menu, MenuItem, SidebarContainer, SidebarFooter, SidebarHeader, SidebarLink } from './Sidebar.elements'
import { faHeartPulse, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <Menu>
                    <MenuItem>
                        <Item>
                            <HeaderIcon icon={faHeartPulse} />
                        </Item>
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarFooter>
                <Menu>
                    <FooterItem>
                        <SidebarLink onClick={() => localStorage.removeItem('TOKEN')} to='/login'>
                            <FooterIcon icon={faArrowRightFromBracket} />
                        </SidebarLink>
                    </FooterItem>
                </Menu>
            </SidebarFooter>
        </SidebarContainer >)
}

export default Sidebar