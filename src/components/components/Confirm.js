/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    Container,
    Box,
    Title,
    Actions,
    Button
 } from "../../styled/confirm";

import { Oval } from  'react-loader-spinner'
import actions from "../../store/actions";
export default function Confirm(props){
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if(state.loading.deleting === 2){
            props.setPopped(null)
            dispatch({type: actions.SET_LOADER, data: {deleting: 0}})
            props.setPopped("Successfully deleted!");
        }
    }, [state.loading.deleting])

    return (
        <Container>
            <Box>
                <Title>{props.title}</Title>
                <Actions>
                    <Button onClick={props.onYes}>
                    {state.loading.deleting === 1 ? <Oval
                        height="20"
                        width="20"
                        color='white'
                    /> : 'Yes' }
                    </Button>
                    <Button onClick={() => props.setPopped(null)}>No</Button>
                </Actions>
            </Box>
        </Container>

    )
}