/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import React from "react";

import {
    Container,
    Title,
    Search,
    SearchIcon,
    input,
    addButton
} from "../../styled/header";
import SearchI from '@material-ui/icons/SearchOutlined';

import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from "react-redux";
import actions from "../../store/actions";

export default function Header(props){
    const dispatch = useDispatch()
    return (
        <Container>
            <Title><PeopleIcon style={{fontSize: 20, color: '#000', marginRight: 5}}></PeopleIcon> {props.name}</Title>
            <Search>
                <SearchIcon><SearchI style={{fontSize: 20, color: '#000000'}}></SearchI></SearchIcon>
                <input onKeyUp={e => dispatch({type: actions.UPDATE_SEARCHQ, payload: e.target.value})} placeholder="Search employees..." style={input} />
            </Search>
            <button onClick={() => {
                dispatch({type: actions.SET_EMPLOYEE, payload: {}})
                props.setPopped("Add")}
            } style={addButton}><AddIcon style={{fontSize: 20, color: '#fff', marginRight: 5}}></AddIcon>Add Employee</button>
        </Container>
    )
}