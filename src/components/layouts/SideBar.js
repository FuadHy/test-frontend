/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import React from "react"
import { 
    Container,
    Logo,
    Note,
    List,
    Item
 } from "../../styled/sidebar"
 import EmailIcon from '@material-ui/icons/Email';
 import GithubIcon from '@material-ui/icons/GitHub';
 import LaunchIcon from '@material-ui/icons/Launch';

export default function SideBar(props){
    return (
        <Container>
            <Logo>Test Project</Logo>
            <Note>👋 Hello, Addis Softwares! This test project is built from scratch using:</Note>
            <Note>⚙️🗄️ Backend: Node.js Express</Note>
            <Note>📙 Database: Sqlite, with sequelize.js</Note>
            <Note>💻 Frontend: React, Redux, Redux Saga, React Emotions, React Router, Vanilla CSS</Note>
            <List>
                <a href={'mail:fuadmail3@gmail.com'} style={Item}><EmailIcon style={{marginRight: 5, color: '#000'}}></EmailIcon> Contact Me <LaunchIcon style={{marginLeft: 10, color: '#000'}}></LaunchIcon></a>
                <a href={'https://github.com/FuadHy/test-frontend'} rel="noreferrer" target="_blank" style={Item}><GithubIcon style={{marginRight: 5, color: '#000'}}></GithubIcon>Source <LaunchIcon style={{marginLeft: 10, color: '#000'}}></LaunchIcon></a>
            </List>
        </Container>        
    )
}