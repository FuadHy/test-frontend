/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import styled from '@emotion/styled'

const Container = styled.div`
    width: 70%;
    height: 40px;
    box-shadow: rgba(100, 100, 111, 0.2) 1px 1px 2px 2px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NContainer = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Name = styled.h4`
    margin-left: 10px;
    font-wegiht: bold;
    color: #000;
`

const Actions = styled.div`
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .2s ease-in;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 1px;
    &:hover {
        transform: scale(1.3);
    }
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Info = styled.p`
    font-size: 13px;
    font-family: sans-serif;
    color: rgba(0,0,0,.7);
    margin-right: 10px;
`

export {
    Container,
    NContainer,
    Name,
    Actions,
    Button,
    InfoContainer,
    Info
}   