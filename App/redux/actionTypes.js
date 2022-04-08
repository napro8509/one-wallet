export const asyncTypes = (action) => ({
    REQUEST: `${action}_REQUEST`,
    SUCCESS: `${action}_SUCCESS`,
    FAILED: `${action}_FAILED`,
})

export const GET_EMPLOYEE = asyncTypes('GET_EMPLOYEE')
