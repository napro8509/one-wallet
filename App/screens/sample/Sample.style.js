import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    employeeList: {
        width: '100%',
        height: '100%',
    },
    employeeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        width: '100%',
        padding: 10,
        height: 120,
    },
    employeeImage: {
        width: 100,
        height: 100,
    },
    employeeName: {
        marginStart: 10,
    },
})

export default styles
