import React from 'react'
import { View } from 'react-native'
import { Styles } from '../styles/Styles';
import { Login_Component } from '../components/Login_Component';
import { Registry_Component } from '../components/Registry_Component';

export const LoginPagina = () => {
    return (
        <View style={Styles.containerRow}>
            <Login_Component />
            <Registry_Component />
        </View>
    )
}
