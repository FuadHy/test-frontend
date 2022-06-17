/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import React from "react";

import {
    Container,
    NContainer,
    Name,
    Actions,
    Button,
    InfoContainer,
    Info
} from "../../styled/employee";

import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create';
import { useDispatch } from "react-redux";
import actions from "../../store/actions";

export default function Employee({data, setPopped}){
    const dispatch = useDispatch()

    return (
        <Container>
            <NContainer>
                <PersonIcon style={{fontSize: 20, color: '#000', marginRight: 5}}></PersonIcon>
                <Name>{data?.first_name + ' ' + data?.last_name}</Name>
            </NContainer>
            <InfoContainer>
                <Info>Age: {data?.age}</Info>
                <Info>Height: {data?.height}</Info>
                <Info>Gender: {data?.gender}</Info>
            </InfoContainer>
            <Actions>
                <Button onClick={() => {
                    dispatch({type: actions.SET_EMPLOYEE, payload: data})
                    setPopped("Update")
                }}>
                    <EditIcon style={{fontSize: 25, color: '#000', marginRight: 5}}></EditIcon>
                </Button>
                <Button onClick={() => {
                    dispatch({type: actions.SET_EMPLOYEE, payload: data})
                    setPopped("confirm")
                }}>
                    <DeleteIcon style={{fontSize: 25, color: 'red', marginRight: 5}}></DeleteIcon>
                </Button>
            </Actions>
        </Container>
    )
}