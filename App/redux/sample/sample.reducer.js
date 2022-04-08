import * as actionTypes from '../actionTypes'

const initialState = {
    isLoading: false,
    msg: '',
    data: {},
}

export default (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case actionTypes.GET_EMPLOYEE.REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case actionTypes.GET_EMPLOYEE.SUCCESS:
            return {
                ...state,
                isLoading: false,
                msg: 'Success',
                data: action.payload,
            }
        case actionTypes.GET_EMPLOYEE.FAILED:
            return {
                ...state,
                isLoading: false,
                msg: action.payload,
            }
        default:
            return state
    }
}
