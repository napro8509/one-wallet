import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SampleContainer from '../screens/sample/Sample.container'
import Screens from '../config/Screens'

const Stack = createNativeStackNavigator()

const SampleNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Screens.Sample.name}>
            <Stack.Screen
                name={Screens.Sample.name}
                options={{ title: Screens.Sample.title }}
                component={SampleContainer}
            />
        </Stack.Navigator>
    )
}

export default SampleNavigator
