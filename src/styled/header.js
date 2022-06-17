/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import styled from '@emotion/styled'

const Container = styled.div`
    width: 80%;
    height: 70px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 5px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Title = styled.h4`
    font-size: 18px;
    color: #000;
    font-weight: bold;
    display: flex;
    align-items: center;
`

const Search = styled.div`
    position: relative;
    width: 40%;
    height: 50%;
    border: 1px solid #000;
    display: flex;
    align-items: center;
`

const input = {
    'position': 'absolute',
    'inset': '0',
    'padding-left': '40px',
    'outline': 'none',
    'border': 'none',
}

const SearchIcon = styled.div`
    position: absolute;
    z-index: 9999;
    left: 10px;
`
const addButton = {
    'padding': '10px 25px',
    'outline': 'none',
    'border': 'none',
    'background-color': 'blue',
    'color': '#fff',
    'display': 'flex',
    'align-items': 'center',
    'cursor': 'pointer'
}

export {
    Container,
    Title,
    Search,
    input,
    SearchIcon,
    addButton
}