import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';

export const InformacionLaboral = () => {

    const [selectedValueDepto, setSelectedValueDepto] = useState("");
    const [selectedValueFondoYaHabiaEstado, setselectedValueFondoYaHabiaEstado] = useState("");

    const renderDepto = () => {
        if (selectedValueDepto == 'Cundinamarca')
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('0%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Municipio:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Bogotá" value="java" />
                            <Picker.Item label="Soacha" value="js" />
                            <Picker.Item label="Fusagasugá" value="js" />
                            <Picker.Item label="Facatativa" value="js" />
                            <Picker.Item label="Zipaquirá" value="js" />
                            <Picker.Item label="Chía" value="js" />
                            <Picker.Item label="Girardot" value="js" />
                            <Picker.Item label="Mosquera" value="js" />
                            <Picker.Item label="Madrid" value="js" />
                            <Picker.Item label="Funza" value="js" />
                            <Picker.Item label="Cajicá" value="js" />
                            <Picker.Item label="Ubaté" value="js" />
                            <Picker.Item label="Guaduas" value="js" />
                            <Picker.Item label="Sibaté" value="js" />
                            <Picker.Item label="La Mesa" value="js" />
                            <Picker.Item label="Pacho" value="js" />
                            <Picker.Item label="Tocancipá" value="js" />

                        </Picker>
                    </View>
                </View>
            )
        else return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('0%'), width: wp('70%') }}>
                <View style={{ width: '48%' }}>
                    <Text>Municipio:</Text>
                    <Picker>
                        <Picker.Item label="Seleccione una opción:" value="opcion" />
                    </Picker>
                </View>
            </View>
        )
    }
    const renderFondoYaHabiaEstado = () => {
        if (selectedValueFondoYaHabiaEstado == "si")
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Fecha de ingreso anterior:</Text>
                        <TextInput
                            placeholder="Seleccione año-mes-día"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Fecha de retiro:</Text>
                        <TextInput
                            placeholder="Seleccione año-mes-día"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
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
                            Información Laboral -
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Nómina a la que pertenece:</Text>
                        <Picker style={{ marginTop: wp('1%') }}>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="FEIBM" value="FEIBM" />
                            <Picker.Item label="TREK" value="TREK" />
                            <Picker.Item label="IBM" value="IBM" />
                            <Picker.Item label="Kyndryl" value="Kyndryl" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Sucursal:</Text>
                        <Picker style={{ marginTop: wp('1%') }}>
                            <Picker.Item label="Bogotá" value="FEIBM" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Dirección del trabajo:</Text>
                        <TextInput
                            placeholder="Ingresa la dirección del trabajo"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Departamento:</Text>
                        <Picker style={{ marginTop: '1%' }} selectedValue={selectedValueDepto} onValueChange={(itemValue, itemIndex) => setSelectedValueDepto(itemValue)}>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Amazonas" value="Amazonas" />
                            <Picker.Item label="Antioquia" value="Antioquia" />
                            <Picker.Item label="Arauca" value="Arauca" />
                            <Picker.Item label="Atlántico" value="Atlántico" />
                            <Picker.Item label="Bolívar" value="Bolívar" />
                            <Picker.Item label="Boyacá" value="Boyacá" />
                            <Picker.Item label="Caldas" value="Caldas" />
                            <Picker.Item label="Caquetá" value="Caquetá" />
                            <Picker.Item label="Casanare" value="Casanare" />
                            <Picker.Item label="Cauca" value="Cauca" />
                            <Picker.Item label="Cesar" value="Cesar" />
                            <Picker.Item label="Chocó" value="Chocó" />
                            <Picker.Item label="Córdoba" value="Córdoba" />
                            <Picker.Item label="Cundinamarca" value="Cundinamarca" />
                            <Picker.Item label="Guainía" value="Guainía" />
                            <Picker.Item label="Guaviare" value="Guaviare" />
                            <Picker.Item label="Huila" value="Huila" />
                            <Picker.Item label="La Guajira" value="La Guajira" />
                            <Picker.Item label="Magdalena" value="Magdalena" />
                            <Picker.Item label="Meta" value="Meta" />
                            <Picker.Item label="Nariño" value="Nariño" />
                            <Picker.Item label="Norte de Santander" value="Norte de Santander" />
                            <Picker.Item label="Putumayo" value="Putumayo" />
                            <Picker.Item label="Quindío" value="Quindío" />
                            <Picker.Item label="Risaralda" value="Risaralda" />
                            <Picker.Item label="San Andrés y Providencia" value="San Andrés y Providencia" />
                            <Picker.Item label="Santander" value="Santander" />
                            <Picker.Item label="Sucre" value="Sucre" />
                            <Picker.Item label="Tolima" value="Tolima" />
                            <Picker.Item label="Valle del Cauca" value="Valle del Cauca" />
                            <Picker.Item label="Vaupés" value="Vaupés" />
                            <Picker.Item label="Vichada" value="Vichada" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>{renderDepto()}</Text>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Código de empleado:</Text>
                        <TextInput
                            placeholder="Ingrese su código de empleado"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Cargo:</Text>
                        <TextInput
                            placeholder="Ingrese el cargo que desempeñe"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Tipo de sueldo:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Normal" value="Normal" />
                            <Picker.Item label="Integral" value="Integral" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Sueldo</Text>
                        <TextInput
                            placeholder="$0"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Teléfono/celular corporativo</Text>
                        <TextInput
                            placeholder="Ingrese teléfono-ext o celular corporativo"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Correo corporativo:</Text>
                        <TextInput
                            placeholder="Ingrese su dirección de correo electrónico corporativo"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Fecha de ingreso a IBM:</Text>
                        <TextInput
                            placeholder="Seleccione año-mes-día"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Tipo de contrato:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Fijo" value="Fijo" />
                            <Picker.Item label="Indefinido" value="Indefinido" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Fecha fin del contrato:</Text>
                        <TextInput
                            placeholder="Seleccione año-mes-día"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>¿Ya había pertenecido al fondo?:</Text>
                        <Picker style={{ marginTop: '1%' }} selectedValue={selectedValueFondoYaHabiaEstado} onValueChange={(itemValue, itemIndex) => setselectedValueFondoYaHabiaEstado(itemValue)}>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Sí" value="si" />
                            <Picker.Item label="No" value="no" />
                        </Picker>
                    </View>
                </View>
                <Text>{renderFondoYaHabiaEstado()}</Text>
                <View style={Styles.windowDocuments}>
                    <Text style={{ marginLeft: '40%', color: 'white', textAlign: 'center' }}>
                        Información Bancaria
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '31%'}}>
                        <Text>Número de cuenta 1:</Text>
                        <TextInput
                            placeholder="Ingrese su número de cuenta bancaria"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '31%'}}>
                        <Text>Tipo de cuenta:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Ahorro" value="Ahorro" />
                            <Picker.Item label="Corriente" value="Corriente" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '30%'}}>
                        <Text>Banco:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Sí" value="si" />
                            <Picker.Item label="No" value="no" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '31%'}}>
                        <Text>Número de cuenta 2:</Text>
                        <TextInput
                            placeholder="Ingrese su número de cuenta bancaria"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '31%'}}>
                        <Text>Tipo de cuenta:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Ahorro" value="Ahorro" />
                            <Picker.Item label="Corriente" value="Corriente" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '30%'}}>
                        <Text>Banco:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="Sí" value="si" />
                            <Picker.Item label="No" value="no" />
                        </Picker>
                    </View>
                </View>
                <View style={Styles.windowDocuments}>
                    <Text style={{ marginLeft: '41%', color: 'white', textAlign: 'center' }}>
                        Aportes y Ahorros
                    </Text>

                </View>
                <Text>31A - Cuota de inscripción</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '22%'}}>
                        <Text>Número de cuotas:</Text>
                        <Picker>
                            <Picker.Item label="Seleccione una opción:" value="opcion" />
                            <Picker.Item label="1" value="si" />
                            <Picker.Item label="2" value="no" />
                            <Picker.Item label="3" value="no" />
                            <Picker.Item label="4" value="no" />
                            <Picker.Item label="5" value="no" />
                            <Picker.Item label="6" value="no" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '22%'}}>
                        <Text>Porcentaje:</Text>
                        <TextInput
                            placeholder="Entre el 5% y el 10%"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '22%'}}>
                        <Text>Valor de inscripción:</Text>
                        <TextInput
                            placeholder="Ingrese Valor de inscripción"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '22%'}}>
                        <Text>Valor de cada cuota</Text>
                        <TextInput
                            placeholder="Cuota"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <Text>31H - Ahorro voluntario</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Valor mínimo de ahorro:</Text>
                        <Text
                            style={{ backgroundColor: 'white', marginTop: '1%', borderColor: 'black' }}
                        >$50000</Text>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Valor del ahorro:</Text>
                        <TextInput
                            placeholder="$0"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <Text>31I - Ahorro vacaciones</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>

                    <View style={{ width: '48%'}}>
                        <Text>Valor mínimo de ahorro:</Text>
                        <Text
                            style={{ backgroundColor: 'white', marginTop: '1%', borderColor: 'black' }}
                        >$50000</Text>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Valor del ahorro:</Text>
                        <TextInput
                            placeholder="$0"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <Text>31I - Ahorro educativo</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>

                    <View style={{ width: '48%'}}>
                        <Text>Valor mínimo de ahorro:</Text>
                        <Text
                            style={{ backgroundColor: 'white', marginTop: '1%', borderColor: 'black' }}
                        >$100000</Text>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Valor del ahorro:</Text>
                        <TextInput
                            placeholder="$0"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
            </CollapseBody>
        </Collapse>
    )
}