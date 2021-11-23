import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';
import CustomInput from './CustomInput'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    primerApellido: Yup.string().required('x'),
    segundoApellido: Yup.string().required('x') ,
    nombres: Yup.string().required('x'),
    paisNacimiento: Yup.string().required('x'),
    nacionalidad: Yup.string().required('x'),
    estratoSocioeconomico: Yup.string().required('x'),
    departamentoEstado: Yup.string().required('x'),
    ciudadNacimietno: Yup.string().required('x'),
    sexo: Yup.string().required('x'),
    fechaNacimiento: Yup.string().required('x'),
    tipoIdentificacion: Yup.string().required('x'),
    numeroIdentificacion: Yup.number().required('x'),
    lugarExpedicion: Yup.string().required('x'),
    fechaExpedicion: Yup.string().required('x'),
    estadoCivil: Yup.string().required('x'),
    grupoEtnico: Yup.string().required('x'),
    cabezaFamilia: Yup.string().required('x'),
    grupoSanguineo: Yup.string().required('x'),
    nivelEducacion: Yup.string().required('x'),
    profesion: Yup.string().required('x'),
    vehiculos: Yup.string().required('x'),
    tipoVivienda: Yup.string().required('x'),
    viviendaPropia: Yup.string().required('x'),
    personasACargo: Yup.number().required('x'),
    hijos: Yup.number().required('x'),
    direccion: Yup.string().required('x'),
    num1: Yup.string().required('x'),
    num2: Yup.string().required('x'),
    num3: Yup.string().required('x'),
    area: Yup.string().required('x'),
    departamento: Yup.string().required('x'),
    ciudad: Yup.string().required('x'),
    telefono: Yup.number().required('x'),
    email: Yup.string().email().required('x'),
    celular: Yup.number().required('x'),
    deportes: Yup.string().required('x'),
    mascotas: Yup.string().required('x'),
    hobbies: Yup.string().required('x')
});


export const InformacionGeneral = () => {

    return (
        <Collapse style={{ alignItems: 'center' }}>
            <CollapseHeader >
                <View style={Styles.windowDocuments}>
                    <View style={{ margin: '2%' }} >
                        <Text style={Styles.formFillFont}>
                            Información General 
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
                <Formik
                    initialValues={{
                        primerApellido: '',
                        segundoApellido: '',
                        nombres: '',
                        paisNacimiento: '',
                        nacionalidad: '',
                        estratoSocioeconomico:'',
                        departamentoEstado:'',
                        ciudadNacimietno:'',
                        sexo:'',
                        fechaNacimiento:'',
                        tipoIdentificacion:'',
                        numeroIdentificacion:'',
                        lugarExpedicion:'',
                        fechaExpedicion:'',
                        estadoCivil:'',
                        grupoEtnico:'',
                        cabezaFamilia:'',
                        grupoSanguineo:'',
                        nivelEducacion:'',
                        profesion:'',
                        vehiculos:'',
                        tipoVivienda:'',
                        viviendaPropia:'',
                        personasACargo:'',
                        hijos:'',
                        direccion:'',
                        num1:'',
                        num2:'',
                        num3:'',
                        area:'',
                        departamento:'',
                        ciudad:'',
                        telefono:'',
                        email:'',
                        celular:'',
                        deportes:'',
                        mascotas:'',
                        hobbies:''
                      }}
                      validationSchema={SignupSchema}
                      onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                      }}
                > 
                {({ handleSubmit, isValid, values, setFieldValue, errors, touched, handleChange, handleBlur }) => (
                <>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                    <View style={{ width: '48%', backgroundColor: '#DDE9F1' }}>
                        <Text>Primer apellido:</Text>
                        <Field
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="primerApellido"
                            placeholder="Primer apellido"
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Segundo apellido:</Text>
                        <Field
                            component={CustomInput}
                            placeholder="Segundo apellido"
                            name="segundoApellido"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Nombres:</Text>
                        <Field
                            component={CustomInput}
                            name="nombres"
                            placeholder="Nombre"
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Pais de Nacimiento</Text>
                            <View style={[(errors.paisNacimiento && touched.paisNacimiento) ? Styles.pickerError : Styles.picker]} >
                                <Picker 
                                    selectedValue={values.paisNacimiento}
                                    onValueChange={itemValue => setFieldValue('paisNacimiento', itemValue)}
                                    onBlur={handleBlur('paisNacimiento')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Cedula de ciudadania" value="js" />
                                </Picker>
                            </View>
                            {errors.paisNacimiento  && touched.paisNacimiento &&
                                <Text style={[Styles.errorText]}>{errors.paisNacimiento}</Text>
                            }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Nacionalidad:</Text>
                        <View style={[(errors.nacionalidad && touched.nacionalidad ) ? Styles.pickerError : Styles.picker]} >
                            <Picker
                                selectedValue={values.nacionalidad}
                                onValueChange={itemValue => setFieldValue('nacionalidad', itemValue)}
                                onBlur={handleBlur('nacionalidad')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Colombiano" value="Colombiano" />
                                <Picker.Item label="Extranjero" value="Extranjero" />
                            </Picker>
                        </View>
                        {errors.nacionalidad  && touched.nacionalidad &&
                            <Text style={[Styles.errorText]}>{errors.nacionalidad}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Estrato Socioeconómico</Text>
                        <View style={[(errors.estratoSocioeconomico && touched.estratoSocioeconomico ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.estratoSocioeconomico}
                                onValueChange={itemValue => setFieldValue('estratoSocioeconomico', itemValue)} 
                                onBlur={handleBlur('estratoSocioeconomico')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                            </Picker>
                        </View>
                        {errors.estratoSocioeconomico  && touched.estratoSocioeconomico &&
                            <Text style={[Styles.errorText]}>{errors.estratoSocioeconomico}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Departamento/Estado:</Text>
                        <View style={[(errors.departamentoEstado && touched.departamentoEstado ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.departamentoEstado}
                                onValueChange={itemValue => setFieldValue('departamentoEstado', itemValue)}
                                onBlur={handleBlur('departamentoEstado')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Tipo de documento" value="java" />
                                <Picker.Item label="Cedula de ciudadania" value="js" />
                            </Picker>
                        </View>
                        {errors.departamentoEstado  && touched.departamentoEstado &&
                            <Text style={[Styles.errorText]}>{errors.departamentoEstado}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%' }}>
                        <Text>Ciudad de Nacimiento</Text>
                        <View style={[(errors.ciudadNacimietno && touched.ciudadNacimietno) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.ciudadNacimietno}
                                onValueChange={itemValue => setFieldValue('ciudadNacimietno', itemValue)}
                                onBlur={handleBlur('ciudadNacimietno')}
                            >
                                <Picker.Item label="Seleccione una opción" value="java" />
                                <Picker.Item label="Tipo de documento" value="java" />
                                <Picker.Item label="Cedula de ciudadania" value="js" />
                            </Picker>
                        </View>
                        {errors.ciudadNacimietno  && touched.ciudadNacimietno  &&
                            <Text style={[Styles.errorText]}>{errors.ciudadNacimietno}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Sexo:</Text>
                        <View style={[(errors.sexo && touched.sexo ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.sexo}
                                onValueChange={itemValue => setFieldValue('sexo', itemValue)}
                                onBlur={handleBlur('sexo')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Masculino" value="Masculino" />
                                <Picker.Item label="Femenino" value="Femenino" />
                            </Picker>
                        </View>
                        {errors.sexo  && touched.sexo &&
                            <Text style={[Styles.errorText]}>{errors.sexo}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Fecha de Nacimiento</Text>
                        <Field
                            placeholder="Fecha de Nacimiento"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="fechaNacimiento"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Tipo de identificación:</Text>
                        <View style={[(errors.tipoIdentificacion  && touched.tipoIdentificacion) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.tipoIdentificacion}
                                onValueChange={itemValue => setFieldValue('tipoIdentificacion', itemValue)}
                                onBlur={handleBlur('tipoIdentificacion')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Cedula de Ciudadania" value="Cedula de Ciudadania" />
                                <Picker.Item label="Cedula de Extranjeria" value="Cedula de Extranjeria" />
                                <Picker.Item label="NIT" value="NIT" />
                                <Picker.Item label="Otro" value="Otro" />
                                <Picker.Item label="Pasaporte" value="Pasaporte" />
                                <Picker.Item label="Registro Civil" value="Registro Civil" />
                                <Picker.Item label="Tarjeta de Identidad" value="Tarjeta de Identidad" />
                            </Picker>
                        </View>
                        {errors.tipoIdentificacion  && touched.tipoIdentificacion &&
                            <Text style={[Styles.errorText]}>{errors.tipoIdentificacion}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Número de identificación:</Text>
                        <Field
                            placeholder="Número de identificación"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="numeroIdentificacion"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Lugar de expedicion:</Text>
                        <Field
                            placeholder="Lugar de expedicion"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="lugarExpedicion"
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Fecha de expedición:</Text>
                        <Field
                            placeholder="Fecha de expedición"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="fechaExpedicion"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Estado Civil:</Text>
                        <View style={[(errors.estadoCivil && touched.estadoCivil ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.estadoCivil}
                                onValueChange={itemValue => setFieldValue('estadoCivil', itemValue)}
                                onBlur={handleBlur('estadoCivil')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Casado" value="Casado" />
                                <Picker.Item label="Separado" value="Separado" />
                                <Picker.Item label="Soltero" value="Soltero" />
                                <Picker.Item label="Union Libre" value="Union Libre" />
                                <Picker.Item label="Viudo" value="Viudo" />
                            </Picker>
                        </View>
                        {errors.estadoCivil  && touched.estadoCivil &&
                            <Text style={[Styles.errorText]}>{errors.estadoCivil}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Grupo Étnico:</Text>
                        <View style={[(errors.grupoEtnico && touched.grupoEtnico ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.grupoEtnico}
                                onValueChange={itemValue => setFieldValue('grupoEtnico', itemValue)}
                                onBlur={handleBlur('grupoEtnico')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Afroamericano" value="Afroamericano" />
                                <Picker.Item label="Indigena" value="Indigena" />
                                <Picker.Item label="Ninguna" value="Ninguna" />
                                <Picker.Item label="Palenquero" value="Palenquero" />
                                <Picker.Item label="Raizal" value="Raizal" />
                                <Picker.Item label="ROM (Gitano)" value="ROM (Gitano)" />
                            </Picker>
                        </View>
                        {errors.grupoEtnico  && touched.grupoEtnico &&
                            <Text style={[Styles.errorText]}>{errors.grupoEtnico}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%', }}>
                        <Text>Cabeza de Familia:</Text>
                        <View style={[(errors.cabezaFamilia && touched.cabezaFamilia ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.cabezaFamilia}
                                onValueChange={itemValue => setFieldValue('cabezaFamilia', itemValue)}
                                onBlur={handleBlur('cabezaFamilia')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="Si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                        {errors.cabezaFamilia  && touched.cabezaFamilia  &&
                            <Text style={[Styles.errorText]}>{errors.cabezaFamilia}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Grupo Sanguineo:</Text>
                        <View style={[(errors.grupoSanguineo && touched.grupoSanguineo) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.grupoSanguineo}
                                onValueChange={itemValue => setFieldValue('grupoSanguineo', itemValue)}
                                onBlur={handleBlur('grupoSanguineo')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="O-" value="O-" />
                                <Picker.Item label="O+" value="O+" />
                                <Picker.Item label="A-" value="A-" />
                                <Picker.Item label="A+" value="A+" />
                                <Picker.Item label="B-" value="B-" />
                                <Picker.Item label="B+" value="B+" />
                                <Picker.Item label="AB-" value="AB-" />
                                <Picker.Item label="AB+" value="AB+" />
                            </Picker>
                        </View>
                        {errors.grupoSanguineo  && touched.grupoSanguineo  &&
                            <Text style={[Styles.errorText]}>{errors.grupoSanguineo}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Nivel de educación:</Text>
                        <View style={[(errors.nivelEducacion && touched.nivelEducacion ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.nivelEducacion}
                                onValueChange={itemValue => setFieldValue('nivelEducacion', itemValue)}
                                onBlur={handleBlur('nivelEducacion')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Guarderia" value="Guarderia" />
                                <Picker.Item label="Pre Escolar" value="Pre Escolar" />
                                <Picker.Item label="Primaria" value="Primaria" />
                                <Picker.Item label="Bachillerato" value="Bachillerato" />
                                <Picker.Item label="Tecnologo" value="Tecnologo" />
                                <Picker.Item label="Profesional" value="Profesional" />
                                <Picker.Item label="Profesional Maestria" value="Profesional Maestria" />
                                <Picker.Item label="Profesional Especializado" value="Profesional Especializado" />
                                <Picker.Item label="Profesional Doctorado" value="Profesional Doctorado" />
                                <Picker.Item label="Licenciado" value="Licenciado" />
                                <Picker.Item label="Universitario" value="Universitario" />
                            </Picker>
                        </View>
                        {errors.nivelEducacion  &&  touched.nivelEducacion &&
                            <Text style={[Styles.errorText]}>{errors.nivelEducacion}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Profesión:</Text>
                        <Field
                            placeholder="Profesión"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="profesion"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>¿Posee vehiculos?:</Text>
                        <View style={[(errors.vehiculos && touched.vehiculos ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.vehiculos}
                                onValueChange={itemValue => setFieldValue('vehiculos', itemValue)}
                                onBlur={handleBlur('vehiculos')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="Si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                        {errors.vehiculos  &&  touched.vehiculos &&
                            <Text style={[Styles.errorText]}>{errors.vehiculos}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Tipo de Vivienda:</Text>
                        <View style={[(errors.tipoVivienda && touched.tipoVivienda) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.tipoVivienda}
                                onValueChange={itemValue => setFieldValue('tipoVivienda', itemValue)}
                                onBlur={handleBlur('tipoVivienda')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Arrendada" value="Arrendada" />
                                <Picker.Item label="Familiar" value="Familiar" />
                                <Picker.Item label="Leasing" value="Leasing" />
                                <Picker.Item label="Propia" value="Propia" />
                            </Picker>
                        </View>
                        {errors.tipoVivienda  && touched.tipoVivienda &&
                            <Text style={[Styles.errorText]}>{errors.tipoVivienda}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>¿Posee vivienda propia?:</Text>
                        <View style={[(errors.viviendaPropia && touched.viviendaPropia) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.viviendaPropia}
                                onValueChange={itemValue => setFieldValue('viviendaPropia', itemValue)}
                                onBlur={handleBlur('viviendaPropia')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Si" value="Si" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                        {errors.viviendaPropia  && touched.viviendaPropia &&
                            <Text style={[Styles.errorText]}>{errors.viviendaPropia}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Personas a Cargo:</Text>
                        <Field
                            placeholder="Personas a Cargo"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="personasACargo"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>No. Hijos:</Text>
                        <Field
                            placeholder="No. Hijos"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="hijos"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Dirección de residencia:</Text>
                        <View style={[(errors.direccion && touched.direccion ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.direccion}
                                onValueChange={itemValue => setFieldValue('direccion', itemValue)}
                                onBlur={handleBlur('direccion')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Calle" value="Calle" />
                                <Picker.Item label="Carrera" value="Carrera" />
                                <Picker.Item label="Avenida" value="Avenida" />
                                <Picker.Item label="Diagonal" value="Diagonal" />
                                <Picker.Item label="Transversal" value="Transversal" />
                                <Picker.Item label="Avenida Calle" value="Avenida Calle" />
                                <Picker.Item label="Avenida Carrera" value="Avenida Carrera" />
                                <Picker.Item label="Otro" value="Otro" />
                            </Picker>
                        </View>
                        {errors.direccion  && touched.direccion &&
                            <Text style={[Styles.errorText]}>{errors.direccion}</Text>
                        }
                    </View>
                    <View style={{ width: '48%', flexDirection: 'row', marginTop: wp('1.5%')}}>
                        <TextInput
                            style={[(errors.num1 && touched.num1) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
                            placeholder=""
                            //name='num1'
                            onChangeText={handleChange('num1')}
                            onBlur={handleBlur('num1')}
                            value={values.num1}
                        />
                        {errors.num1  &&  touched.num1 &&
                            <Text style={[Styles.errorText]}>{errors.num1}</Text>
                        }
                        <Text style={{ marginTop: '0.5%' }}>#</Text>
                        <TextInput
                            style={[(errors.num1 && touched.num2) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
                            placeholder=""
                            //name='num1'
                            onChangeText={handleChange('num2')}
                            onBlur={handleBlur('num2')}
                            value={values.num2}
                        />
                        {errors.num2  &&  touched.num2 &&
                            <Text style={[Styles.errorText]}>{errors.num2}</Text>
                        }
                        <Text style={{ marginTop: '0.4%' }}>-</Text>
                        <TextInput
                            style={[(errors.num3 && touched.num3) ? Styles.errorInputDireccion : Styles.textInputDireccion]}
                            placeholder=""
                            //name='num1'
                            onChangeText={handleChange('num3')}
                            onBlur={handleBlur('num3')}
                            value={values.num3}
                        />
                        {errors.num3  &&  touched.num3 &&
                            <Text style={[Styles.errorText]}>{errors.num3}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>Area:</Text>
                        <View style={[(errors.area && touched.area) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.area}
                                onValueChange={itemValue => setFieldValue('area', itemValue)}
                                onBlur={handleBlur('area')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Urbana" value="Urbana" />
                                <Picker.Item label="Rural" value="Rural" />
                            </Picker>
                        </View>
                        {errors.area  && touched.area &&
                            <Text style={[Styles.errorText]}>{errors.area}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Departamento:</Text>
                        <View style={[(errors.departamento && touched.departamento ) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.departamento}
                                onValueChange={itemValue => setFieldValue('departamento', itemValue)}
                                onBlur={handleBlur('departamento')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Cedula de ciudadania" value="js" />
                            </Picker>
                        </View>
                        {errors.departamento  && touched.departamento &&
                            <Text style={[Styles.errorText]}>{errors.departamento}</Text>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Ciudad:</Text>
                        <View style={[(errors.ciudad && touched.ciudad) ? Styles.pickerError : Styles.picker]} >
                            <Picker 
                                selectedValue={values.ciudad}
                                onValueChange={itemValue => setFieldValue('ciudad', itemValue)} 
                                onBlur={handleBlur('ciudad')}
                            >
                                <Picker.Item label="Seleccione una opción" value="" />
                                <Picker.Item label="Cedula de ciudadania" value="js" />
                            </Picker>
                        </View>
                        {errors.ciudad  && touched.ciudad && 
                            <Text style={[Styles.errorText]}>{errors.ciudad}</Text>
                        }
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Telefono:</Text>
                        <Field
                            placeholder="Telefono"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="telefono"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%'}}>
                        <Text>E-mail:</Text>
                        <Field
                            placeholder="E-mail"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="email"
                        />
                    </View>
                    <View style={{ marginLeft: '4%', width: '48%'}}>
                        <Text>Celular:</Text>
                        <Field
                            placeholder="Celular"
                            component={CustomInput} //style=backgroundColor:'white',marginTop'1%'
                            name="celular"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Deportes:</Text>
                        <TextInput
                            placeholder="Añadir Texto"
                            style={[(errors.deportes && touched.deportes) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                            onChangeText={handleChange('deportes')}
                            onBlur={handleBlur('deportes')}
                            value={values.deportes}
                        />
                    </View>
                    {errors.deportes  &&  touched.deportes &&
                        <Text style={[Styles.errorText]}>{errors.deportes}</Text>
                    }
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Mascotas:</Text>
                        <TextInput
                            placeholder="Añadir Texto"
                            style={[(errors.mascotas && touched.mascotas) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                            onChangeText={handleChange('mascotas')}
                            onBlur={handleBlur('mascotas')}
                            value={values.mascotas}
                        />
                    </View>
                    {errors.mascotas  &&  touched.mascotas &&
                        <Text style={[Styles.errorText]}>{errors.mascotas}</Text>
                    }
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '100%'}}>
                        <Text>Hobbies:</Text>
                        <TextInput
                            placeholder="Añadir Texto"
                            style={[(errors.hobbies && touched.hobbies) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                            onChangeText={handleChange('hobbies')}
                            onBlur={handleBlur('hobbies')}
                            value={values.hobbies}
                        />
                    </View>
                    {errors.hobbies  &&  touched.hobbies &&
                        <Text style={[Styles.errorText]}>{errors.hobbies}</Text>
                    }
                </View>
                <View style={{marginTop: '2%'}}>
                    <Button
                        onPress={handleSubmit}
                        title="Enviar"
                        disabled={!isValid}
                        color='#5099D2'
                    />
                </View>
                </>
                )}
                </Formik>
            </CollapseBody>
        </Collapse>
    )
}



