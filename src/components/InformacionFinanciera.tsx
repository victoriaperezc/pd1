import React, { useState } from 'react'
import { Text, View, TextInput, ImageBackground } from 'react-native';
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';


export const InformacionFinanciera = () => {

    const [selectedValuePEP, setSelectedValuePEP] = useState("");
    const [selectedValueFamiliaPEP, setSelectedValueFamiliaPEP] = useState("");
    const [selectedValueOperaciones, setSelectedValueOperaciones] = useState("");
    const [selectedValueCuentas, setSelectedValueCuentas] = useState("");

    const renderPEP = () => {
        if (selectedValuePEP == 'Si')
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

    const renderFamiliaPEP = () => {
        if (selectedValueFamiliaPEP == 'Si')
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Indicar Parentesco:</Text>
                            <TextInput
                                placeholder="Indicar Parentesco"
                                style={{ backgroundColor: 'white', marginTop: '1%' }}
                            />
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

    const renderOperaciones = () => {
        if (selectedValueOperaciones == 'Si')
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Cuales:</Text>
                        <TextInput
                            placeholder="Cuales"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
            )
        else return null
    }

    const renderCuentas = () => {
        if (selectedValueCuentas == 'Si')
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Banco:</Text>
                            <TextInput
                                placeholder="Banco"
                                style={{ backgroundColor: 'white', marginTop: '1%' }}
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text>Moneda:</Text>
                            <TextInput
                                placeholder="Moneda"
                                style={{ backgroundColor: 'white', marginTop: '1%' }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%'}}>
                            <Text>Pais:</Text>
                            <TextInput
                                placeholder="Pais"
                                style={{ backgroundColor: 'white', marginTop: '1%' }}
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%'}}>
                            <Text>Ciudad:</Text>
                            <TextInput
                                placeholder="Ciudad"
                                style={{ backgroundColor: 'white', marginTop: '1%' }}
                            />
                        </View>
                    </View>
                </View>
            )
        else return null
    }

    return (
        <Collapse style={{ alignItems: 'center' }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Información Financiera - 
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Para tener en cuenta:</Text>
                        <TextInput
                            style={{ height: hp('20%'), backgroundColor: 'rgb(230,230,230)', justifyContent: 'flex-start', marginTop: '1%' }}
                            placeholder="El codigo CIIU debe tomarlo de su RUT. Personas expuestas política y públicamente"
                            editable={false}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Declara Renta:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Administra o administró recursos públicos:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Es PEP:</Text>
                        <Picker style={{ marginTop: '1%' }} selectedValue={selectedValuePEP} onValueChange={(itemValue, itemIndex) => setSelectedValuePEP(itemValue)}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>

                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>¿Usted es familiar de algun PEP?:</Text>
                        <Picker style={{ marginTop: '1%' }} selectedValue={selectedValueFamiliaPEP} onValueChange={(itemValue, itemIndex) => setSelectedValueFamiliaPEP(itemValue)}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>
                </View>
                <Text>{renderPEP()}</Text>
                <Text>{renderFamiliaPEP()}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Otros Ingresos:</Text>
                        <TextInput
                            placeholder="Otros Ingresos"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Egresos Mensuales:</Text>
                        <TextInput
                            placeholder="Egresos Mensuales"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Total bienes activos:</Text>
                        <TextInput
                            placeholder="Total bienes activos"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Total deudas pasivos:</Text>
                        <TextInput
                            placeholder="Total deudas pasivos"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Realiza operaciones en moneda extranjera y/o criptomodena:</Text>
                        <Picker style={{ marginTop: '1%' }} selectedValue={selectedValueOperaciones} onValueChange={(itemValue, itemIndex) => setSelectedValueOperaciones(itemValue)}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>

                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Posee cuentas en moneda extranjera:</Text>
                        <Picker style={{ marginTop: '1%' }} selectedValue={selectedValueCuentas} onValueChange={(itemValue, itemIndex) => setSelectedValueCuentas(itemValue)}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>
                </View>
                <Text>{renderOperaciones()}</Text>
                <Text>{renderCuentas()}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Se acogio usted a un proceso de reinserción:</Text>
                        <Picker style={{ marginTop: '1%' }} >
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>

                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>¿Usted ha estado inmerso(a) en alguna situación con la justicia?:</Text>
                        <Picker style={{ marginTop: '1%' }} >
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="Si" />
                            <Picker.Item label="No" value="No" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Detalle:</Text>
                        <TextInput
                            style={{ height: hp('20%'), backgroundColor: 'white', justifyContent: 'flex-start', marginTop: '1%' }}
                            placeholder="Si ha estado inmerso(a) en alguna situación con la justicia indique el detalle, de lo contrario ponga N/A"
                        />
                    </View>
                </View>
            </CollapseBody>
        </Collapse>
    )
}
