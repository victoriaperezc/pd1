import React from 'react'
import { Text, View, TextInput } from 'react-native'
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';


export const InformacionGeneral = () => {

    return (
        <Collapse style={{ alignItems: 'center' }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Información General -
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
                    <View style={{ width: '48%', backgroundColor: '#DDE9F1' }}>
                        <Text>Primer apellido:</Text>
                        <TextInput
                            placeholder="Primer apellido"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Segundo apellido:</Text>
                        <TextInput
                            placeholder="Segundo apellido"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Nombres:</Text>
                        <TextInput
                            placeholder="Nombre"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Pais de Nacimiento</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Cedula de ciudadania" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Nacionalidad:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Colombiano" value="java" />
                            <Picker.Item label="Extranjero" value="js" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Estrato Socioeconómico</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Tipo de documento" value="java" />
                            <Picker.Item label="Cedula de ciudadania" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Departamento/Estado:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Tipo de documento" value="java" />
                            <Picker.Item label="Cedula de ciudadania" value="js" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Ciudad de Nacimiento</Text>
                        <TextInput
                            placeholder="Ciudad de Nacimiento"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Sexo:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Masculino" value="java" />
                            <Picker.Item label="Femenino" value="js" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Fecha de Nacimiento</Text>
                        <TextInput
                            placeholder="Fecha de Nacimiento"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Tipo de identificación:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Cedula de Ciudadania" value="js" />
                            <Picker.Item label="Cedula de Extranjeria" value="js" />
                            <Picker.Item label="NIT" value="js" />
                            <Picker.Item label="Otro" value="js" />
                            <Picker.Item label="Pasaporte" value="js" />
                            <Picker.Item label="Registro Civil" value="js" />
                            <Picker.Item label="Tarjeta de Identidad" value="js" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Número de identificación:</Text>
                        <TextInput
                            placeholder="Número de identificación"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Lugar de expedicion:</Text>
                        <TextInput
                            placeholder="Lugar de expedicion"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Fecha de expedición:</Text>
                        <TextInput
                            placeholder="Fecha de expedición"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Estado Civil:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Casado" value="js" />
                            <Picker.Item label="Separado" value="java" />
                            <Picker.Item label="Soltero" value="java" />
                            <Picker.Item label="Union Libre" value="java" />
                            <Picker.Item label="Viudo" value="java" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Grupo Étnico:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Afroamericano" value="js" />
                            <Picker.Item label="Indigena" value="java" />
                            <Picker.Item label="Ninguna" value="java" />
                            <Picker.Item label="Palenquero" value="java" />
                            <Picker.Item label="Raizal" value="java" />
                            <Picker.Item label="ROM (Gitano)" value="java" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%', }}>
                        <Text>Cabeza de Familia:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="js" />
                            <Picker.Item label="No" value="java" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Grupo Sanguineo:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Cedula de ciudadania" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Nivel de educación:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Guarderia" value="js" />
                            <Picker.Item label="Pre Escolar" value="java" />
                            <Picker.Item label="Primaria" value="java" />
                            <Picker.Item label="Bachillerato" value="java" />
                            <Picker.Item label="Tecnologo" value="java" />
                            <Picker.Item label="Profesional" value="java" />
                            <Picker.Item label="Profesional Maestria" value="java" />
                            <Picker.Item label="Profesional Especializado" value="java" />
                            <Picker.Item label="Profesional Doctorado" value="java" />
                            <Picker.Item label="Licenciado" value="java" />
                            <Picker.Item label="Universitario" value="java" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Profesión:</Text>
                        <TextInput
                            placeholder="Profesión"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>¿Posee vehiculos?:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="js" />
                            <Picker.Item label="No" value="java" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Tipo de Vivienda:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Arrendada" value="js" />
                            <Picker.Item label="Familiar" value="java" />
                            <Picker.Item label="Leasing" value="java" />
                            <Picker.Item label="Propia" value="java" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>¿Posee vivienda propia?:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Si" value="js" />
                            <Picker.Item label="No" value="java" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Personas a Cargo:</Text>
                        <TextInput
                            placeholder="Personas a Cargo"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>No. Hijos:</Text>
                        <TextInput
                            placeholder="No. Hijos"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Dirección de residencia:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Calle" value="js" />
                            <Picker.Item label="Carrera" value="java" />
                            <Picker.Item label="Avenida" value="java" />
                            <Picker.Item label="Diagonal" value="java" />
                            <Picker.Item label="Transversal" value="java" />
                            <Picker.Item label="Avenida Calle" value="java" />
                            <Picker.Item label="Avenida Carrera" value="java" />
                            <Picker.Item label="Otro" value="java" />
                        </Picker>
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', marginTop: wp('1.5%')}}>
                        <TextInput
                            placeholder=""
                            style={{ backgroundColor: 'white', marginTop: '1%', height: '70%', marginRight: '1%', width: '32%' }}
                        />
                        <Text style={{ marginTop: '0.5%' }}>#</Text>
                        <TextInput
                            placeholder=""
                            style={{ backgroundColor: 'white', marginTop: '1%', height: '70%', marginLeft: '1%', marginRight: '1%', width: '32%' }}
                        />
                        <Text style={{ marginTop: '0.4%' }}>-</Text>
                        <TextInput
                            placeholder=""
                            style={{ backgroundColor: 'white', marginTop: '1%', height: '70%', marginLeft: '1%', width: '32%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Area:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Seleccione una opción" value="java" />
                            <Picker.Item label="Urbana" value="js" />
                            <Picker.Item label="Rural" value="java" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Departamento:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Tipo de documento" value="java" />
                            <Picker.Item label="Cedula de ciudadania" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Ciudad:</Text>
                        <Picker style={{ marginTop: '1%' }}>
                            <Picker.Item label="Tipo de documento" value="java" />
                            <Picker.Item label="Cedula de ciudadania" value="js" />
                        </Picker>
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Telefono:</Text>
                        <TextInput
                            placeholder="Telefono"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>E-mail:</Text>
                        <TextInput
                            placeholder="E-mail"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Celular:</Text>
                        <TextInput
                            placeholder="Celular"
                            style={{ backgroundColor: 'white', marginTop: '1%' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Deportes:</Text>
                        <TextInput
                            style={{ height: hp('20%'), backgroundColor: 'white', justifyContent: 'flex-start', marginTop: '1%' }}
                            placeholder="Añadir Texto"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Mascotas:</Text>
                        <TextInput
                            style={{ height: hp('20%'), backgroundColor: 'white', justifyContent: 'flex-start', marginTop: '1%' }}
                            placeholder="Añadir Texto"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Hobbies:</Text>
                        <TextInput
                            style={{ height: hp('20%'), backgroundColor: 'white', justifyContent: 'flex-start', marginTop: '1%' }}
                            placeholder="Añadir Texto"
                        />
                    </View>
                </View>
            </CollapseBody>
        </Collapse>
    )
}
