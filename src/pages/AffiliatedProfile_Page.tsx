import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { Header_Component } from '../components/Header_Component';
import { ProfileCard_Component } from '../components/ProfileCard_Component';
import { Styles } from '../styles/Styles';
import SwitchSelector from "react-native-switch-selector";
import { ReviewContainer_Component } from '../components/ReviewContainer_Component';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';

export const AffiliatedProfile_Page = () => {

    const navigator = useNavigation();

    const reviewComponent = [
        "firma", "devolucion", "deceval", "formulario", "verificacion"
    ];

    const [component, setComponent] = useState("verificacion");

    const onNext = (valor: string) => {
        // Login success
        //navigator.dispatch(CommonActions.navigate({ name: 'PerfilDevolucion', }));
        setComponent(valor);
    }

    const options = [
        { label: "Perfil", value: 'perfil' },
        { label: "Documentos", value: 'documentos' }
    ];

    return (
        <View style={Styles.containerColumn}>
            <Header_Component title="Perfil de Usuario" />
            <View style={Styles.containerRow}>
                <View style={Styles.containerColumn}>
                    <ProfileCard_Component />
                </View>
                <View style={Styles.verticalSeparator} />
                <View style={Styles.containerColumn}>
                    <View style={Styles.profileBodyRightContainer}>
                        <View style={Styles.profileOptionsButtonContainer}>
                            <SwitchSelector
                                options={options}
                                initial={0}
                                onPress={value => console.log(value)}
                                buttonColor='#fff'
                                selectedColor='#000'
                                selectedTextStyle={Styles.profileOptionsButtonText}
                            />
                        </View>
                        <View style={[Styles.containerColumn, { justifyContent: 'flex-start' }]}>
                            <ReviewContainer_Component type={component}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ margin: 10 }}
                            onPress={() => onNext("verificacion")}>
                            <Text>Verificación</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ margin: 10 }}
                            onPress={() => onNext("devolucion")}>
                            <Text>Devolución</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ margin: 10 }}
                            onPress={() => onNext("formulario")}>
                            <Text>Formulario</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ margin: 10 }}
                            onPress={() => onNext("firma")}>
                            <Text>Firma</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ margin: 10 }}
                            onPress={() => onNext("deceval")}>
                            <Text>Deceval</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </View>
    )
}
