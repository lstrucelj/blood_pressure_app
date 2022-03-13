import React from 'react'
import waves from '../../assets/waves.png'
import logo from '../../assets/logo.png'
import UserForm from './UserForm/UserForm.js'
import {
    WavesImg,
    Screen,
    RightSide,
    LeftSide,
    Logo,
    Content,
    Footer,
    FooterText
} from './Login.elements'



const Login = () => {
    return (
        <Screen>
            <LeftSide>
                <WavesImg src={waves} alt="SVG as an image"></WavesImg>
            </LeftSide>
            <RightSide>
                <Content>
                    <Logo src={logo}></Logo>
                    <UserForm />
                </Content>
                <Footer>
                    <FooterText>Copyright © 2022 LCSB</FooterText>
                </Footer>
            </RightSide>
        </Screen>
    )
}

export default Login