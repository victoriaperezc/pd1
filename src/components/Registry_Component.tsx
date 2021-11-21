import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Styles } from '../styles/Styles';
import { CommonActions } from '@react-navigation/native';

export const Registry_Component = () => {
    const navigator = useNavigation();

    const onRegistry = () => {
        // Create account
        navigator.dispatch(CommonActions.navigate({ name: 'Registro', }));
    }

    return (
        <View style={Styles.registryContainer}>
            <View style={Styles.registryComponents}>
                <Text style={Styles.hugeText}>
                    Crea una cuenta
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={Styles.loginButton}
                    onPress={onRegistry}>
                    <Text style={Styles.logginButtonText}>
                        Crea tu cuenta
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
