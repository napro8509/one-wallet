import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getEmployee } from '../../redux/sample/sample.action'
import { connect } from 'react-redux'
import SampleView from './Sample.view'

const SampleContainer = ({
    navigation,
    props,
    fetchEmployee,
    loading,
    employeeData,
}) => {
    useEffect(() => {
        fetchEmployee()
    }, [])

    useEffect(() => {
        console.log('loading: ' + loading)
    }, [loading])

    return <SampleView employeeData={employeeData} loading={loading} />
}

const mapStateToProps = (state) => ({
    loading: state.sampleReducer.isLoading,
    employeeData: state.sampleReducer.data,
})

const mapDispatchToProps = (dispatch) => ({
    fetchEmployee: () => {
        return dispatch(getEmployee())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer)
