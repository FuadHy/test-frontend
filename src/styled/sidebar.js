/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import styled from '@emotion/styled'

const Container = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-items: center;
    background-color: #e8e8e8;
`

const Logo = styled.h3`
    color: #000;
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 20px;
`

const Note = styled.p`
    color: rgba(0,0,0,.6);
    font-size: 13px;
    width: 70%;
    margin: 5px;  
`

const List = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    align-items: center;
`

const Item = {
    'text-align': 'center',
    'font-size': '15px',
    'width': '70%',
    'font-weight': 'bold',
    'text-decoration': "none",
    'display': 'flex',
    'margin-top': '10px',
    'align-items': 'center',
    'color': '#000'
}

export {
    Container,
    Logo,
    Note,
    List,
    Item
}