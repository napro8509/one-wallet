/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as reducers from './App/redux/reducers'
import rootSaga from './App/redux/sagas'
import React from 'react'
import { Provider } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import SampleNavigator from './App/navigation/SampleNavigator'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    timeout: 0,
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['sampleReducer'],
}

const App = () => {
    const middlewares = []
    // Initialize the reducers
    const reducer = combineReducers(reducers)
    // Initialize the saga middleware
    const sagaMiddleware = createSagaMiddleware()

    middlewares.push(sagaMiddleware)
    const store = createStore(
        persistReducer(persistConfig, reducer),
        applyMiddleware(...middlewares),
    )
    sagaMiddleware.run(rootSaga)
    const persistor = persistStore(store)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <SampleNavigator />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}

export default App
