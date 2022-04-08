/* eslint-disable max-len */
import deepEqual from 'lodash'
import React, { forwardRef, memo, useEffect, useRef, useState } from 'react'

export const memoDeepEqual = (component) =>
    memo(component, (prevProps, nextProps) => deepEqual(prevProps, nextProps))

export const memoWithRef = (component) =>
    memo(forwardRef(component), (prevProps, nextProps) =>
        deepEqual(prevProps, nextProps),
    )

export function usePrevious(value) {
    const ref = React.useRef()
    React.useEffect(() => {
        ref.current = value
    })
    return ref.current
}

export const useStateCallback = (initialState) => {
    const [state, setState] = useState(initialState)
    const cbRef = useRef(null)

    const setStateCallback = (val, cb) => {
        cbRef.current = cb // store passed callback to ref
        setState(val)
    }

    useEffect(() => {
        // cb.current is `null` on initial render, so we only execute cb on state *updates*
        if (cbRef.current) {
            cbRef.current(state)
            cbRef.current = null // reset callback after execution
        }
    }, [state])

    return [state, setStateCallback]
}
