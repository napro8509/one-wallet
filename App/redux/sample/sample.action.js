import * as types from '../actionTypes'
import { createAction } from 'redux-actions'

export const getEmployee = createAction(
    types.GET_EMPLOYEE.REQUEST,
    (payload) => payload,
)

export const getEmployeeSuccess = createAction(
    types.GET_EMPLOYEE.SUCCESS,
    (payload) => payload,
)

export const getEmployeeFail = createAction(
    types.GET_EMPLOYEE.FAILED,
    (payload) => payload,
)
