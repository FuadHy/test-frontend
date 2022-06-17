/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'

const center = keyframes`
    100% {
        transform: translateY(0px);
    }
`

const Container = styled.div`
    position: fixed;
    inset: 0;
    z-index: 99999;
    background-color: rgba(0,0,0,.4);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Box = styled.div`
    width: 30%;
    height: 25%;
    background-color: #fff;
    display: flex;
    transform: translateY(-150px);
    border-radius: 5px;
    flex-direction: column;
    animation: ${center} .5s ease-out forwards;
    align-items: center;
    padding-top: 10px;
`

const Actions = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`

const Button = styled.button`
    padding: 10px 35px;
    margin-top: 30px;
    cursor: pointer;
    background-color: blue;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #1b1b5f;
    }
`

const Title = styled.h3`
    font-weight: bold;
    color: #000;
    font-size: 25px;
    margin-bottom: 20px;
`

export {
    Container,
    Box,
    Actions,
    Button,
    Title
}