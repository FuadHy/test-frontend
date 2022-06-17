/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import React from "react";
import { 
    Container,
    Box,
    Title,
    Actions,
    Button
 } from "../../styled/confirm";
export default function Message(props){
    return (
        <Container>
            <Box>
                <Title style={{fontSize: 18}}>{props.title}</Title>
                <Actions>
                    <Button onClick={() => props.setPopped(null)}>Ok</Button>
                </Actions>
            </Box>
        </Container>

    )
}