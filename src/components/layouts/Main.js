/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
import React from "react"
import constants from '../../constants'
import Employees from '../pages/Employees'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import EmployeeDetail from '../pages/EmployeeDetail'

export default function Main(props){
    return (
       <Employees /> 
    )
}