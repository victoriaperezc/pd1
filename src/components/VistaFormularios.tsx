import React from 'react'
import { Text, View } from 'react-native'
import { CampoFormulario } from './CampoFormularioComponent'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { StepBar_Component } from './StepBar_Component'
import { Styles } from '../styles/Styles';

export const VistaFormularios = () => {
    return (
        <View style={Styles.formViewBody}>
            <View style={Styles.formViewUpperBody}>
                <StepBar_Component />
            </View>
            <View style={[{ width: '100%', marginBottom: '2%' }]}>
                <Text style={[Styles.bigText, { color: '#001D6C', fontFamily: 'workSans' }]}>
                    Ingrese los datos
                </Text>
            </View>
            <CampoFormulario />
        </View >


    )
}
