import React from 'react'
import { View } from 'react-native'
import { Styles } from '../styles/Styles'
import { InformacionFamiliar } from './InformacionFamiliar'
import { InformacionFinanciera } from './InformacionFinanciera'
import { InformacionGeneral } from './InformacionGeneral'
import { InformacionLaboral } from './InformacionLaboral';

export const CampoFormulario = () => {
    return (
        <View style={[Styles.formContainer]}>
            <View style={Styles.formFieldsContainer} >
                <InformacionGeneral />
                <InformacionLaboral />
                <InformacionFinanciera />
                <InformacionFamiliar />
            </View>
        </View >
    )
}
