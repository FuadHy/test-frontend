import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import {
    Container,
    EContainer,
} from '../../styled/main'

 import PeopleIcon from '@material-ui/icons/People';
 import GithubIcon from '@material-ui/icons/GitHub';
 import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

 import Header from '../components/Header'
 import Employee from '../components/Employee'
import EmployeeForm from "../components/EmployeeForm";
import Confirm from "../components/Confirm";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { Oval } from  'react-loader-spinner'

export default function Employees(props){
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [popped, setPopped] = useState(null)

    const confirmDelete = () => {
        dispatch({type: actions.REMOVE_EMPLOYEE, payload: state.employee._id})
    }

    useEffect(() => {
        dispatch({ type: actions.FETCH_EMPLOYEES })
    }, [])

    return (
        <Container>
            <Header name="Employees" setPopped={setPopped} />
            <EContainer>
                {state.loading.fetching == 1 && (<Oval  
                    height="50"
                    width="50"
                    color='#000'
                />)}
                {state.loading.fetching != 1 && !state.employees.length && <p style={{textAlign: 'center', width: '100%', color: 'rgba(0,0,0,.7)'}}>No employees to display!</p>}
                {state.employees.filter(e => (new RegExp(state.searchQ)).test(e.first_name) || (new RegExp(state.searchQ)).test(e.last_name)).map(emp => <Employee data={emp} setPopped={setPopped}/> )}
            </EContainer>
            { ["Add", "Update"].includes(popped)  && <EmployeeForm type={popped} setPopped={setPopped} /> }
            { popped === "confirm" && <Confirm title='Are you sure?' setPopped={setPopped} onYes={confirmDelete} /> }
            {popped && !["Add", "Update", "confirm"].includes(popped) && <Message title={popped} setPopped={setPopped} /> }
        </Container>
          
    )
}