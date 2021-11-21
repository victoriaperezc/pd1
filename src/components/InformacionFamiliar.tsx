import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native';
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';
import { Styles } from '../styles/Styles';

export const InformacionFamiliar = () => {

    const [selectedValueAgregarFamiliar, setselectedValueAgregarFamiliar] = useState("");
    const [selectedValueParentescoPEP, setselectedValueParentescoPEP] = useState("");
    const [isSelected, setSelection] = useState(false);

    const renderAgregarFamiliar = () => {
        if (selectedValueAgregarFamiliar == 'si')
            return (
                <><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Apellidos:</Text>
                        <TextInput
                            placeholder="Ingrese sus apellidos"
                            style={{ backgroundColor: 'white', marginTop: '1%' }} />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Nombres:</Text>
                        <TextInput
                            placeholder="Ingrese sus nombres"
                            style={{ backgroundColor: 'white', marginTop: '1%' }} />
                    </View>
                </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Sexo:</Text>
                            <Picker>
                                <Picker.Item label="Seleccione una opción:" value="opcion" />
                                <Picker.Item label="Femenino" value="femenino" />
                                <Picker.Item label="Masculino" value="masculino" />
                            </Picker>
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text>Fecha de nacimiento:</Text>
                            <TextInput
                                placeholder="Seleccione año-mes-día"
                                style={{ backgroundColor: 'white', marginTop: '1%' }} />
                        </View>
                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Parentesco:</Text>
                            <Picker>
                                <Picker.Item label="Seleccione una opción:" value="opcion" />
                                <Picker.Item label="Esposa" value="Esposa" />
                                <Picker.Item label="Esposo" value="Esposo" />
                                <Picker.Item label="Hija" value="Hija" />
                                <Picker.Item label="Hijo" value="Hijo" />
                                <Picker.Item label="Madre" value="Madre" />
                                <Picker.Item label="Padre" value="Padre" />
                            </Picker>
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text>Trabaja en IBM:</Text>
                            <Picker>
                                <Picker.Item label="Seleccione una opción:" value="opcion" />
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="no" />
                            </Picker>
                        </View>
                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Tipo de identificación:</Text>
                            <Picker>
                                <Picker.Item label="Seleccione una opción:" value="opcion" />
                                <Picker.Item label="Cédula de ciudadanía" value="cc" />
                                <Picker.Item label="Cédula de extranjería" value="ce" />
                                <Picker.Item label="Pasaporte" value="Pasaporte" />
                            </Picker>
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text>Número de documento:</Text>
                            <TextInput
                                placeholder="Ingrese el número de documento"
                                style={{ backgroundColor: 'white', marginTop: '1%' }} />
                        </View>
                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Nivel de educación:</Text>
                            <Picker>
                                <Picker.Item label="Seleccione una opción:" value="opcion" />
                                <Picker.Item label="Primaria" value="Primaria" />
                                <Picker.Item label="Bachillerato" value="Bachillerato" />
                                <Picker.Item label="Universidad" value="Universidad" />
                                <Picker.Item label="Postgrado" value="Postgrado" />
                            </Picker>
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text>E-mail:</Text>
                            <TextInput
                                placeholder="Ingrese un E-mail"
                                style={{ backgroundColor: 'white', marginTop: '1%' }} />
                        </View>
                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Teléfono:</Text>
                            <TextInput
                                placeholder="Ingrese su número de teléfono"
                                style={{ backgroundColor: 'white', marginTop: '1%' }} />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text>¿Es PEP?:</Text>
                            <Picker style={{ marginTop: '1%' }} selectedValue={selectedValueParentescoPEP} onValueChange={(itemValue, itemIndex) => setselectedValueParentescoPEP(itemValue)}>
                                <Picker.Item label="Seleccione una opción:" value="opcion" />
                                <Picker.Item label="Sí" value="si" />
                                <Picker.Item label="No" value="no" />
                            </Picker>
                        </View>
                    </View><Text>{renderParentescoPEP()}</Text></>
            )
        else return null
    }

    const renderParentescoPEP = () => {
        if (selectedValueParentescoPEP == "si")
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Clase de Actividad PEP:</Text>
                            <Picker style={{ marginTop: '1%' }}>
                                <Picker.Item label="Seleccione una opción" value="java" />
                                <Picker.Item label="Farandula" value="Si" />
                                <Picker.Item label="FFMM/Policia" value="No" />
                                <Picker.Item label="Lideres Comunales" value="No" />
                                <Picker.Item label="Politica" value="No" />
                                <Picker.Item label="Prensa" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '100%'}}>
                            <Text>Observaciones:</Text>
                            <TextInput
                                style={{ height: hp('20%'), backgroundColor: 'white', justifyContent: 'flex-start', marginTop: '1%' }}
                                placeholder="Añadir Texto"
                            />
                        </View>
                    </View>
                </View>
            )
        else return null
    }

    const Function = () => {
        if (isSelected == true)
            return (
                <><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>¿Desea Agregar un familiar?:</Text>
                        <Picker style={{ marginTop: '1%' }} selectedValue={selectedValueAgregarFamiliar} onValueChange={(itemValue, itemIndex) => setselectedValueAgregarFamiliar(itemValue)}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Sí" value="si" />
                            <Picker.Item label="No" value="no" />

                        </Picker>
                    </View>
                </View><Text>{renderAgregarFamiliar()}</Text></>
            )

    }
    return (
        <Collapse style={{ alignItems: 'center' }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Información Familiar -
                        </Text>
                    </View>
                    <View style={{ marginRight: '5%' }}>
                        <Text style={[Styles.formFillFont, { color: '#f3462c' }]}>
                            En progreso
                        </Text>
                    </View>
                </View >
            </CollapseHeader>

            <CollapseBody style={{ alignItems: 'center' }}>

                <Checkbox
                    status={isSelected ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setSelection(!isSelected);
                    }}
                />
                <Text>
                    Confidencialidad de acuerdo a las políticas del FEIBM para el manejo de información. Con la firma de este documento usted autoriza al FEIBM el manejo de sus datos conforme a los principios y deberes definidos en la ley 1581 de 2012 - Protección de datos personales y demás normas que traten y regulen sobre esta.
                    De acuerdo al artículo 12° del Estatuto: "Se entenderá adquirida la calidad de asociado, cuando la solicitud de asociación sea aprobada por la gerencia o por quien ésta delegue dentro de los
                    30 días siguientes a la presentación y se verifique el pago de la primera cuota periódica."
                </Text>
                <Text>{Function()}</Text>


            </CollapseBody>
        </Collapse>
    )
}