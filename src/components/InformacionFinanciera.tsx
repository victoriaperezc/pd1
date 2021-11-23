import React, { useState } from 'react'
import { Text, View, TextInput, ImageBackground, Button } from 'react-native';
// @ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import { Styles } from '../styles/Styles';
import CustomInput from './CustomInput'
import { Formik, Form, Field, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';



const SignupSchema = Yup.object().shape({
    declaraRenta: Yup.string().required('x'),
    recursosPublicos: Yup.string().required('x'),
    selectedValuePEP: Yup.string().required('x'),
    selectedValueFamiliaPEP: Yup.string().required('x'),
    actividadEconomica: Yup.string().required('x'),
    codigoCIIU: Yup.string().required('x'),
    ciudadOtrasActividades: Yup.string().required('x'),
    ingresosMensuales: Yup.string().required('x'),
    otrosIngresos: Yup.string().required('x'),
    egresosMensuales: Yup.string().required('x'),
    activos: Yup.string().required('x'),
    pasivos: Yup.number().required('x'),
    selectedValueOperaciones: Yup.string().required('x'),
    selectedValueCuentas: Yup.string().required('x'),
    procesoReinsercion: Yup.string().required('x'),
    justicia: Yup.string().required('x'),
    detalles: Yup.string().required('x'),

    claseActividadPEP: Yup.string().when('selectedValuePEP',{
        is: 'Si', 
        then: Yup.string().required('x'), 
        //otherwise: Yup.string()
    }),
    observacionPEP: Yup.string().when('selectedValuePEP',{
        is: 'Si', 
        then: Yup.string().required('x')
    }),
    parentesco:Yup.string().when('selectedValueFamiliaPEP', {
        is: 'Si',
        then: Yup.string().required('x')
    }),
    observacionFamiliaPEP:Yup.string().when('selectedValueFamiliaPEP', {
        is: 'Si',
        then: Yup.string().required('x')
    }),
    cualesOperaciones: Yup.string().when('selectedValueOperaciones',{
        is: 'Si',
        then: Yup.string().required('x')
    }),
    bancoCuentas: Yup.string().when('selectedValueCuentas',{
        is: 'Si',
        then: Yup.string().required('x')
    }),
    monedaCuentas: Yup.string().when('selectedValueCuentas',{
        is: 'Si',
        then: Yup.string().required('x')
    }),
    paisCuentas: Yup.string().when('selectedValueCuentas',{
        is: 'Si',
        then: Yup.string().required('x')
    }),
    ciudadCuentas: Yup.string().when('selectedValueCuentas',{
        is: 'Si',
        then: Yup.string().required('x')
    }),
    
});

export const InformacionFinanciera = () => {

    const [selectedValuePEP, setSelectedValuePEP] = useState("");
    const [selectedValueFamiliaPEP, setSelectedValueFamiliaPEP] = useState("");
    const [selectedValueOperaciones, setSelectedValueOperaciones] = useState("");
    const [selectedValueCuentas, setSelectedValueCuentas] = useState("");

    

    const renderPEP = (errors: FormikErrors<{claseActividadPEP: string; observacionPEP: string; }>, touched: FormikTouched<{claseActividadPEP: string; observacionPEP: string; }>, values: {claseActividadPEP: any; observacionPEP: any; }, setFieldValue: { (field: string, value: any, shouldValidate?: boolean | undefined): void; (arg0: string, arg1: any): void; }, handleBlur: any, handleChange: any) => {
        if (selectedValuePEP == 'Si')
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%' }}>
                            <Text>Clase de Actividad PEP:</Text>
                            <View style={[(errors.claseActividadPEP && touched.claseActividadPEP) ? Styles.pickerError : Styles.picker]} >
                                <Picker
                                    selectedValue={values.claseActividadPEP}
                                    onValueChange={itemValue => setFieldValue('claseActividadPEP', itemValue)}
                                    onBlur={handleBlur('claseActividadPEP')}
                                >
                                    <Picker.Item label="Seleccione una opción" value="" />
                                    <Picker.Item label="Farandula" value="Farandula" />
                                    <Picker.Item label="FFMM/Policia" value="FFMM/Policia" />
                                    <Picker.Item label="Lideres Comunales" value="Lideres Comunales" />
                                    <Picker.Item label="Politica" value="Politica" />
                                    <Picker.Item label="Prensa" value="Prensa" />
                                </Picker>
                            </View>
                            {errors.claseActividadPEP && touched.claseActividadPEP &&
                                <Text style={[Styles.errorText]}>{errors.claseActividadPEP}</Text>
                            }
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '100%' }}>
                            <Text>Observaciones:</Text>
                            <TextInput
                                style={[(errors.observacionPEP && touched.observacionPEP) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                                placeholder="Añadir Texto"
                                onChangeText={handleChange('observacionPEP')}
                                onBlur={handleBlur('observacionPEP')}
                                value={values.observacionPEP}
                            />
                        </View>
                        {errors.observacionPEP && touched.observacionPEP &&
                            <Text style={[Styles.errorText]}>{errors.observacionPEP}</Text>
                        }
                    </View>
                </View>
            )
        else return null
    }

    const renderFamiliaPEP = (errors: FormikErrors<{parentesco: string; observacionFamiliaPEP: string; }>, touched: FormikTouched<{parentesco: string; observacionFamiliaPEP: string; }>, values: {parentesco: any; observacionFamiliaPEP: any; },  handleBlur:any , handleChange: any) => {
        if (selectedValueFamiliaPEP == 'Si')
            return (
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%' }}>
                            <Text>Indicar Parentesco:</Text>
                            <Field
                                placeholder="Indicar Parentesco"
                                component={CustomInput}
                                name="parentesco"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '100%' }}>
                            <Text>Observaciones:</Text>
                            <TextInput
                                style={[(errors.observacionFamiliaPEP && touched.observacionFamiliaPEP) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                                placeholder="Añadir Texto"
                                onChangeText={handleChange('observacionFamiliaPEP')}
                                onBlur={handleBlur('observacionFamiliaPEP')}
                                value={values.observacionFamiliaPEP}
                            />
                        </View>
                        {errors.observacionFamiliaPEP && touched.observacionFamiliaPEP &&
                            <Text style={[Styles.errorText]}>{errors.observacionFamiliaPEP}</Text>
                        }
                    </View>
                </View>
            )
        else return null
    }

    const renderOperaciones = () => {
        if (selectedValueOperaciones == 'Si')
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                    <View style={{ width: '48%' }}>
                        <Text>Cuales:</Text>
                        <Field
                            placeholder="Cuales"
                            component={CustomInput}
                            name="cualesOperaciones"
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
                        <View style={{ width: '48%' }}>
                            <Text>Banco:</Text>
                            <Field
                                placeholder="Banco"
                                component={CustomInput}
                                name="bancoCuentas"
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text>Moneda:</Text>
                            <Field
                                placeholder="Moneda"
                                component={CustomInput}
                                name="monedaCuentas"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                        <View style={{ width: '48%' }}>
                            <Text>Pais:</Text>
                            <Field
                                placeholder="Pais"
                                component={CustomInput}
                                name="paisCuentas"
                            />
                        </View>
                        <View style={{ marginLeft: '4%', width: '48%' }}>
                            <Text>Ciudad:</Text>
                            <Field
                                placeholder="Ciudad"
                                component={CustomInput}
                                name="ciudadCuentas"
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
                            Información Financiera
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
                        declaraRenta: '',
                        recursosPublicos: '',
                        selectedValuePEP: '',
                        selectedValueFamiliaPEP: '',
                        actividadEconomica: '',
                        codigoCIIU: '',
                        ciudadOtrasActividades: '',
                        ingresosMensuales: '',
                        otrosIngresos: '',
                        egresosMensuales: '',
                        activos: '',
                        pasivos: '',
                        selectedValueOperaciones: '',
                        selectedValueCuentas: '',
                        procesoReinsercion: '',
                        justicia: '',
                        detalles: '',
                        claseActividadPEP: '',
                        observacionPEP: '',
                        parentesco:'',
                        observacionFamiliaPEP:'',
                        cualesOperaciones:'',
                        bancoCuentas:'',
                        monedaCuentas:'',
                        paisCuentas:'',
                        ciudadCuentas:''                     
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ handleSubmit, isValid, values, setFieldValue, errors, touched, handleChange, handleBlur }) => (
                        <>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '100%' }}>
                                    <Text>Para tener en cuenta:</Text>
                                    <TextInput
                                        style={{ height: hp('20%'), backgroundColor: 'rgb(230,230,230)', justifyContent: 'flex-start', marginTop: '1%' }}
                                        placeholder="El codigo CIIU debe tomarlo de su RUT. Personas expuestas política y públicamente"
                                        editable={false}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('2%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Declara Renta:</Text>
                                    <View style={[(errors.declaraRenta && touched.declaraRenta) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.declaraRenta}
                                            onValueChange={itemValue => setFieldValue('declaraRenta', itemValue)}
                                            onBlur={handleBlur('declaraRenta')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View>
                                    {errors.declaraRenta  && touched.declaraRenta &&
                                        <Text style={[Styles.errorText]}>{errors.declaraRenta}</Text>
                                    }
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>Administra o administró recursos públicos:</Text>
                                    <View style={[(errors.recursosPublicos && touched.recursosPublicos) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.recursosPublicos}
                                            onValueChange={itemValue => setFieldValue('recursosPublicos', itemValue)}
                                            onBlur={handleBlur('recursosPublicos')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View>
                                    {errors.recursosPublicos  && touched.recursosPublicos &&
                                        <Text style={[Styles.errorText]}>{errors.recursosPublicos}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Es PEP:</Text>
                                    <View style={[(errors.selectedValuePEP && touched.selectedValuePEP) ? Styles.pickerError : Styles.picker]} >
                                        <Picker  
                                            selectedValue={values.selectedValuePEP} 
                                            onValueChange={itemValue => {setSelectedValuePEP(itemValue); setFieldValue('selectedValuePEP', itemValue)}}
                                            onBlur={handleBlur('selectedValuePEP')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View>
                                    {errors.selectedValuePEP  && touched.selectedValuePEP &&
                                        <Text style={[Styles.errorText]}>{errors.selectedValuePEP}</Text>
                                    }
                                </View>

                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>¿Usted es familiar de algun PEP?:</Text>
                                    <View style={[(errors.selectedValueFamiliaPEP && touched.selectedValueFamiliaPEP) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.selectedValueFamiliaPEP} 
                                            onValueChange={itemValue => {setSelectedValueFamiliaPEP(itemValue);setFieldValue('selectedValueFamiliaPEP', itemValue)}}
                                            onBlur={handleBlur('selectedValueFamiliaPEP')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View>
                                    {errors.selectedValueFamiliaPEP  && touched.selectedValueFamiliaPEP &&
                                        <Text style={[Styles.errorText]}>{errors.selectedValueFamiliaPEP}</Text>
                                    }
                                </View>
                            </View>
                            <Text>{renderPEP(errors, touched, values, setFieldValue, handleBlur, handleChange)}</Text>
                            <Text>{renderFamiliaPEP(errors, touched, values, handleBlur, handleChange)}</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Actividad económica otros ingresos:</Text>
                                    <Field
                                        placeholder="Actividad económica otros ingresos"
                                        component={CustomInput}
                                        name="actividadEconomica"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>Código CIIU otros ingresos:</Text>
                                    <Field
                                        placeholder="Código CIIU otros ingresos"
                                        component={CustomInput}
                                        name="codigoCIIU"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Ciudad - otras actividades económicas:</Text>
                                    <View style={[(errors.ciudadOtrasActividades && touched.ciudadOtrasActividades) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.ciudadOtrasActividades} 
                                            onValueChange={itemValue => setFieldValue('ciudadOtrasActividades', itemValue)}
                                            onBlur={handleBlur('ciudadOtrasActividades')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View> 
                                    {errors.ciudadOtrasActividades  && touched.ciudadOtrasActividades &&
                                        <Text style={[Styles.errorText]}>{errors.ciudadOtrasActividades}</Text>
                                    }   
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>Ingresos Mensuales:</Text>
                                    <Field
                                        placeholder="Ingresos Mensuales"
                                        component={CustomInput}
                                        name="ingresosMensuales"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Otros Ingresos:</Text>
                                    <Field
                                        placeholder="Otros Ingresos"
                                        component={CustomInput}
                                        name="otrosIngresos"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>Egresos Mensuales:</Text>
                                    <Field
                                        placeholder="Egresos Mensuales"
                                        component={CustomInput}
                                        name="egresosMensuales"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Total bienes activos:</Text>
                                    <Field
                                        placeholder="Total bienes activos"
                                        component={CustomInput}
                                        name="activos"
                                    />
                                </View>
                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>Total deudas pasivos:</Text>
                                    <Field
                                        placeholder="Total deudas pasivos"
                                        component={CustomInput}
                                        name="pasivos"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Realiza operaciones en moneda extranjera y/o criptomodena:</Text>
                                    <View style={[(errors.selectedValueOperaciones && touched.selectedValueOperaciones) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.selectedValueOperaciones} 
                                            onValueChange={itemValue => {setSelectedValueOperaciones(itemValue);setFieldValue('selectedValueOperaciones', itemValue)}}
                                            onBlur={handleBlur('selectedValueOperaciones')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View> 
                                    {errors.selectedValueOperaciones  && touched.selectedValueOperaciones &&
                                        <Text style={[Styles.errorText]}>{errors.selectedValueOperaciones}</Text>
                                    }   
                                </View>

                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>Posee cuentas en moneda extranjera:</Text>
                                    <View style={[(errors.selectedValueCuentas && touched.selectedValueCuentas) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.selectedValueCuentas} 
                                            onValueChange={itemValue => {setSelectedValueCuentas(itemValue); setFieldValue('selectedValueCuentas', itemValue)}}
                                            onBlur={handleBlur('selectedValueCuentas')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View>
                                    {errors.selectedValueCuentas  && touched.selectedValueCuentas &&
                                        <Text style={[Styles.errorText]}>{errors.selectedValueCuentas}</Text>
                                    }
                                </View>
                            </View>
                            <Text>{renderOperaciones()}</Text>
                            <Text>{renderCuentas()}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '48%' }}>
                                    <Text>Se acogio usted a un proceso de reinserción:</Text>
                                    <View style={[(errors.procesoReinsercion && touched.procesoReinsercion) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.procesoReinsercion}
                                            onValueChange={itemValue => setFieldValue('procesoReinsercion', itemValue)}
                                            onBlur={handleBlur('procesoReinsercion')} 
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View> 
                                    {errors.procesoReinsercion  && touched.procesoReinsercion &&
                                        <Text style={[Styles.errorText]}>{errors.procesoReinsercion}</Text>
                                    }   
                                </View>

                                <View style={{ marginLeft: '4%', width: '48%' }}>
                                    <Text>¿Usted ha estado inmerso(a) en alguna situación con la justicia?:</Text>
                                    <View style={[(errors.justicia && touched.justicia) ? Styles.pickerError : Styles.picker]} >
                                        <Picker 
                                            selectedValue={values.justicia}
                                            onValueChange={itemValue => setFieldValue('justicia', itemValue)}
                                            onBlur={handleBlur('justicia')}
                                        >
                                            <Picker.Item label="Seleccione una opción" value="" />
                                            <Picker.Item label="Si" value="Si" />
                                            <Picker.Item label="No" value="No" />
                                        </Picker>
                                    </View>
                                    {errors.justicia  && touched.justicia &&
                                        <Text style={[Styles.errorText]}>{errors.justicia}</Text>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wp('1%'), width: wp('70%') }}>
                                <View style={{ width: '100%' }}>
                                    <Text>Detalle:</Text>
                                    <TextInput
                                        style={[(errors.detalles && touched.detalles) ? Styles.errorInputGrandeInformacionGeneral : Styles.textInputGrandeInformacionGeneral]}
                                        onChangeText={handleChange('detalles')}
                                        onBlur={handleBlur('detalles')}
                                        value={values.detalles}
                                        placeholder="Si ha estado inmerso(a) en alguna situación con la justicia indique el detalle, de lo contrario ponga N/A"
                                        multiline={true}
                                    />
                                </View>
                                {errors.detalles  &&  touched.detalles &&
                                    <Text style={[Styles.errorText]}>{errors.detalles}</Text>
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
