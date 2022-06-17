/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import React, { useEffect, useState } from "react";
import { 
    Container,
    Form,
    Title,
    Input,
    Button
 } from "../../styled/form";
import { Oval } from  'react-loader-spinner'
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";


export default function EmployeeForm(props){
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [data, setData] = useState(state.employee._id ? state.employee : {})
    const _setData = d => setData({ ...data, [d.key]: d.value })

    const addEmployee = e => { e.preventDefault();
         props.type =="Add" ? dispatch({type: actions.ADD_EMPLOYEE, payload: data}) : dispatch({type: actions.UPDATE_EMPLOYEE, payload: data})
    }

    const removeOverlay = e => {
        if(e.target.tagName == "DIV"){
            dispatch({type: actions.SET_EMPLOYEE, payload: {}})
            props.setPopped(null)
        }
    }

    useEffect(() => {
        if(state.loading.adding == 2){
            props.setPopped(false)
            dispatch({type: actions.SET_LOADER, data: {adding: 0}})
            props.type =="Add" ? props.setPopped("Employee successfully added!") : props.setPopped("Employee successfully updated!");
            dispatch({type: actions.SET_EMPLOYEE, payload: {}})
        }
    }, [state.loading.adding])

    return (
        <Container onClick={removeOverlay}>
            <Form onSubmit={addEmployee}>
                <Title>{props.type + ' Employee'}</Title>
                <Input placeholder='First Name'
                    onChange={e => _setData({ key: 'first_name', value: e.target.value })}
                    type='text'
                    required
                    value={data.first_name != null ? data.first_name : state.employee?.first_name}
                />
                <Input placeholder='Last Name'
                    onChange={e => _setData({ key: 'last_name', value: e.target.value })}
                    type='text'
                    required
                    value={data.last_name != null  ? data.last_name : state.employee?.last_name}
                />
                <Input placeholder='Age'
                    onChange={e => _setData({ key: 'age', value: e.target.value })}
                    type='number' 
                    required
                    value={data.age != null ? data.age : state.employee?.age}
                />
                <Input placeholder='Height'
                    onChange={e => _setData({ key: 'height', value: e.target.value })}
                    type='number'
                    value={data.height != null ? data.height : state.employee?.height}
                    required
                />
                <Input placeholder='Gender'
                    onChange={e => _setData({ key: 'gender', value: e.target.value })}
                    type='text'
                    value={data.gender != null ? data.gender : state.employee?.gender}
                    required
                />
                <Button type="submit">
                    {state.loading.adding == 1 ? <Oval
                        height="20"
                        width="20"
                        color='white'
                    /> : props.type }
                </Button>
            </Form>
        </Container>

    )
}