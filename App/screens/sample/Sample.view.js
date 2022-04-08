import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './Sample.style'
import CommonStyles from '../../styles/CommonStyles'

const SampleView = ({ loading, employeeData }) => {
    useEffect(() => {
        console.log(employeeData)
    }, [employeeData])

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.employeeContainer}>
                <Image
                    style={styles.employeeImage}
                    source={{ uri: item.picture }}
                />
                <Text style={styles.employeeName}>
                    {item.firstName + ' ' + item.lastName}
                </Text>
            </View>
        )
    }

    return (
        <View style={[CommonStyles.container]}>
            {loading ? (
                <Text>Loading..</Text>
            ) : (
                <FlatList
                    style={{ width: '100%', height: '100%' }}
                    data={employeeData}
                    keyExtractor={(item, index) => {
                        return index
                    }}
                    renderItem={renderItem}
                />
            )}
        </View>
    )
}

export default SampleView
