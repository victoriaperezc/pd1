import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Styles } from '../styles/Styles';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../../hooks/UseForm';
import { useNavigation } from '@react-navigation/core';

export const Login_Component = () => {

    const navigator = useNavigation();

    const { email, password, form, onChange } = useForm({
        email: '',
        password: ''
    });
    
    const onLogin = () => {
        // Login success
        navigator.dispatch(CommonActions.navigate({ name: 'PerfilAfiliado', }));
    }

    const onAdminLogin = () => {
        // Login success
        navigator.dispatch(CommonActions.navigate({ name: 'ListaSolicitantes', }));
    }

    const onResetPassword = () => {
        // Recover password
    }

    return (
        <View style={Styles.loginContainer}>
            <View style={Styles.loginComponents} >
                <View style={Styles.containerColumn}>
                    <TextInput
                        style={Styles.loginTextField}
                        placeholder="Usuario"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onLogin}
                    />
                    <TextInput
                        style={Styles.loginTextField}
                        secureTextEntry={true}
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onLogin}
                    />
                </View>
                <View style={[Styles.containerRow, { flexWrap: 'wrap' }]}>
                    <View style={{ width: '40%' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ marginHorizontal: '2%' }}>
                            <Text style={[Styles.mediumText,{color:'#001D6C'}]}>
                                ¿Olvidaste tu contraseña?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '20%' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={Styles.loginButton}
                            onPress={onLogin}>
                            <Text style={Styles.logginButtonText}>
                                Ingresar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '40%' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={Styles.loginButton}
                            onPress={onAdminLogin}>
                            <Text style={Styles.logginButtonText}>
                                Ingreso Administrativos
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}