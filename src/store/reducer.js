/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/

import actions from './actions'
 
const intialState = {
    employees: [],
    searchQ: '',
    employee: {},
    loading: {
        fetching: 1,
        adding: 0,
        deleteing: 0,
    }
}

export default function reducer(currentState=intialState, action){
    switch(action.type){
        case actions.SET_EMPLOYEES:
            return {
                ...currentState,
                employees: action.data
            }
        case actions.SET_ADDED_EMPLOYEE:
            return {
                ...currentState,
                employees: [
                    ...currentState.employees,
                    action.data
                ]
            }
        case actions.SET_LOADER:
            return {
                ...currentState,
                loading: {
                    ...currentState.loading,
                    ...action.data
                }
            }
        case actions.SET_EMPLOYEE:
            return {
                ...currentState,
                employee: action.payload
            }
        case actions.REMOVE_EMPLOYEE_DONE:
            return {
                ...currentState,
                employees: currentState.employees.filter(e => e._id !== action.data)
            }
        case actions.UPDATE_EMPLOYEE_DONE:
            return {
                ...currentState,
                employees: currentState.employees.map(e => {
                    if(e._id === action.data._id){
                        return action.data
                    } return e
                })
            }
        case actions.UPDATE_SEARCHQ:
            return {
                ...currentState,
                searchQ: action.payload
            }
        default:
            return currentState
    }
}