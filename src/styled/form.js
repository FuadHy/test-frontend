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
    background-color: rgba(0,0,0,.4);
    display: flex;
    align-items: center;
    z-index: 99999;
    justify-content: center;
`

const Form = styled.form`
    width: 40%;
    height: 80%;
    background-color: #fff;
    display: flex;
    transform: translateY(-150px);
    border-radius: 5px;
    flex-direction: column;
    animation: ${center} .5s ease-out forwards;
    align-items: center;
    padding-top: 20px;
`

const Input = styled.input`
    outline: none;
    border: none;
    background: none;
    width: 70%;
    margin-top: 20px;
    border-bottom: 2px solid #000;
    padding-left: 20px;
    padding-bottom: 10px;
    color: #000;
    trnasition: all .2s ease-out;
    &:focus {
        border-bottom: 2px solid blue;
    }
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
    Input,
    Form,
    Button,
    Title
}