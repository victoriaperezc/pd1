import React from 'react'
import { useState } from 'react';
import { ActivityIndicator, Modal, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native'
import { Styles } from '../styles/Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ProgressBar } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

interface Props {
    type: string;
}

export const ReviewContainer_Component: React.FC<Props> = ({ type }) => {

    const navigator = useNavigation();

    let text: String = "Documentos pendientes de verificación";
    let progress: number = 0.2;

    let destino: string = "";

    function Divider() {
        return <View style={styles.divider} />;
    }
    
    if (type == "verificacion") {
        text = "Documentos pendientes de verificación"
        progress = 0.2
    } if (type == "firma") {
        text = "Firma de documentos"
        progress = 0.5
    } if (type == "devolucion") {
        text = "Devolución"
        progress = 0.3
    } if (type == "deceval") {
        text = "Pagaré Deceval"
        progress = 0.6
    } if (type == "formulario") {
        text = "Formulario"
        progress = 0.4
        destino = "AffiliatonForm_Page"
    }
    
    
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isModalVisibleFirma, setModalVisibleFirma] = useState(false);
    const toggleModalFirma = () => {
        setModalVisibleFirma(!isModalVisibleFirma);
    };

    const [isModalVisibleDeceval, setModalVisibleDeceval] = useState(false);
    const toggleModalDeceval = () => {
        setModalVisibleDeceval(!isModalVisibleDeceval);
    };

    let image = require("../../assets/dummy-profile.png");


    const onIngress = () => {
        // Login success
        navigator.dispatch(CommonActions.navigate({ name: destino }));
        if (type == "verificacion"){
            toggleModal()
        }
        if (type == "firma"){
            toggleModalFirma()
        }
        if (type == "deceval"){
            toggleModalDeceval()
        }
    }
    

    return (

        <View style={Styles.processStateContainer}>
            <View style={Styles.containerColumn}>
                <Text style={Styles.profileCardText}>Vinculacion Fondo</Text>
            </View>
            <View style={[Styles.containerRow, { paddingBottom: '1%' }]}>
                <View style={[Styles.simpleContainer, { width: '35%' }]}>
                    <ProgressBar
                        style={Styles.progressBar}
                        progress={progress}
                        color='#000'
                    />
                </View>
                <View style={[Styles.simpleContainer, { width: '40%' }]}>
                    <Text style={[Styles.mediumText, { fontFamily: 'workSansExtraLight', color: '#fff' }]}>
                        {text}
                    </Text>
                </View>
                <View style={[Styles.simpleContainer, { width: '25%' }]}>

                    <TouchableOpacity onPress={onIngress}>
                        <View style={Styles.loginButton}>
                            <Text style={Styles.logginButtonText}>Ingresar</Text>
                        </View>
                    </TouchableOpacity>

                    
                    <Modal transparent={true}  visible={isModalVisible}>
                        <View style={styles.backgroundModal}>
                            <View style={styles.backModal}>
                                <TouchableOpacity
                                    style={styles.buttonHideModal}
                                    onPress={toggleModal}>
                                    <Text style={styles.textHideModal}>x</Text>
                                </TouchableOpacity>
                                <View style={styles.paso1}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso2}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso2}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso2}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso2}></View>
                                <View style={styles.containerprogreso}>
                                    <ActivityIndicator color="#1F3159" size={70} style={styles.item} />
                                    <Text style={styles.text}>En proceso de verificación</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Modal transparent={true}  visible={isModalVisibleFirma}>
                        <View style={styles.backgroundModal}>
                            <View style={styles.backModal}>
                                <TouchableOpacity
                                    style={styles.buttonHideModal}
                                    onPress={toggleModalFirma}>
                                    <Text style={styles.textHideModal}>x</Text>
                                </TouchableOpacity>
                                <View style={styles.paso1}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso3Firma}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso3Firma}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso2Firma}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso2Firma}></View>
                            </View>
                            <Divider />
                            <Text style={styles.textFeedBack}>Crea tu firma digital</Text>        
                            <View style={{
                                backgroundColor:'#DDE9F1', 
                                height: wp('18%'), 
                                width: wp('50%'),
                                marginLeft: wp('15%'),
                                marginTop: wp('1%'),
                            }}
                            >
                                <View style={styles.backModal}>
                                    <View style={styles.signOptions}>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={styles.signOptions1}></View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.signOptions1}></View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.buttonTextSend}>
                                    <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                    <Modal transparent={true} visible={isModalVisibleDeceval}>
                        <View style={styles.backgroundModal}>
                            <View style={styles.backModal}>
                                <TouchableOpacity
                                    style={styles.buttonHideModal}
                                    onPress={toggleModalDeceval}
                                >
                                    <Text style={styles.textHideModal}>X</Text>
                                </TouchableOpacity>
                                <View style={styles.paso1}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso3Firma}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso3Firma}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso3Firma}></View>
                                <View style={styles.linea}></View>
                                <View style={styles.paso2Firma}></View>
                            </View>
                            <Divider />
                            <Text style={styles.textFeedBack}>Firme el pagaré de DECEVAL</Text>
                            <View style={{
                                backgroundColor: '#DDE9F1',
                                height: wp('18%'),
                                width: wp('50%'),
                                marginLeft: wp('15%'),
                                marginTop: wp('1%'),
                            }}
                            >
                            </View>
                            <TouchableOpacity>
                                <View style={styles.buttonTextSend}>
                                    <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </View>
            </View>



        </View >
    )
}

const styles = StyleSheet.create({

    item: {
        paddingHorizontal: 10,
        marginTop: wp('5%'),
    },
    paso1: {
        height: hp('5%'), // 70% of height device screen
        width: wp('10%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('4.5%'),
        marginTop: wp('4%'),
        //justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: '#1F3159',
        backgroundColor: '#1F3159',
        borderWidth: wp('0.2%'),
    },
    paso1Firma: {
        height: hp('5%'), // 70% of height device screen
        width: wp('10%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('4.5%'),
        marginTop: wp('4%'),
        //justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: '#D0D3D4',
        backgroundColor: '#D0D3D4',
        borderWidth: wp('0.2%'),
      },
    linea: {
        height: hp('0.1%'), // 70% of height device screen
        width: wp('4.5%'), // 80% of width device screen
        marginLeft: wp('0%'),
        marginRight: wp('0%'),
        marginTop: wp('5%'),
        borderColor: '#808080',
        borderWidth: wp('0.1%'),
    },
    paso2: {
        height: hp('5%'), // 70% of height device screen
        width: wp('10%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('0%'),
        marginTop: wp('4%'),
        //justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: '#DDE9F1',
        backgroundColor: '#DDE9F1',
        borderWidth: wp('0.2%'),
    },
    paso2Firma: {
        height: hp('5%'), // 70% of height device screen
        width: wp('10%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('0%'),
        marginTop: wp('4%'),
        //justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: '#DDE9F1',
        backgroundColor: '#DDE9F1',
        borderWidth: wp('0.2%'),
      },
      paso3Firma: {
        height: hp('5%'), // 70% of height device screen
        width: wp('10%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('0%'),
        marginTop: wp('4%'),
        //justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: '#1F3159',
        backgroundColor: '#1F3159',
        borderWidth: wp('0.2%'),
      },
    containerprogreso: {
        height: hp('45%'), // 70% of height device screen
        width: wp('68%'), // 80% of width device screen
        marginLeft: wp('-68%'),
        marginTop: wp('12%'),
        borderColor: '#DDE9F1',
        backgroundColor: '#DDE9F1',
    },
    textFeedBack: {
        ...Platform.select({
          android: {
            color: '#808080',
            fontSize: wp('5%'),
            textAlign: 'center',
            fontWeight: 'bold',
          },
          default: {
            color: '#808080',
            fontSize: wp('2.0%'),
            textAlign: 'center',
            marginLeft: hp('3%'),
            marginTop: wp('2%'),
            fontWeight: 'bold',
          },
        }),
      },
      buttonTextSend: {
        width: wp('5%'),
        marginTop: hp('2%'),
        marginLeft: wp('72.4%'),
        backgroundColor: '#1F3159',
        borderColor: '#1F3159',
        borderWidth: wp('0.25%'),
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
      },
      textbuttonTaskValidar: {
        ...Platform.select({
          android: {
            color: '#fff',
            fontSize: wp('0.8%'),
            textAlign: 'center',
            backgroundColor: '#1F3159',
            borderColor: '#1F3159',
          },
          default: {
            color: '#fff',
            fontSize: wp('0.8%'),
            textAlign: 'center',
            backgroundColor: '#1F3159',
            borderColor: '#1F3159',
          }
        })
      },
    text: {
        textAlign: 'center',
        marginTop: hp('1%'),
    },
    backgroundModal: {
        backgroundColor: 'white',
        width: wp('80%'),
        height: hp('80%'),
        marginTop: wp('7%'),
        marginLeft: wp('10%')
    },
    buttonHideModal: {
        backgroundColor: 'white',
        width: wp('0%'),
        padding: 2,
        paddingLeft: wp('1%'),
        //justifyContent: 'left',
        alignItems: 'center',
        borderRadius: 4,
    },
    textHideModal: {
        fontSize: wp('2%'),
        color: '#808080',
    },
    signOptions: {
        backgroundColor:'white', 
        height: wp('12%'), 
        width: wp('12%'),
        marginLeft: wp('5.5%'),
        marginTop: wp('3%'),
        borderColor: '#eeeeee',
        borderWidth: wp ('0.1%'),
      },
      signOptions1: {
        backgroundColor:'white', 
        height: wp('12%'), 
        width: wp('12%'),
        marginLeft: wp('1.5%'),
        marginTop: wp('3%'),
        borderColor: '#eeeeee',
        borderWidth: wp ('0.1%'),
      },
    modalBack: {
        backgroundColor: '#eeeeee',
        width: wp('5%'),
        left: hp('5%'),
        top: hp('3%'),
        justifyContent: 'flex-start',
    },
    backModal: {
        ...Platform.select({
            android: {
                height: hp('5%'), // 70% of height device screen
                width: wp('80%'), // 80% of width device screen
                flexDirection: 'row',
                //justifyContent: 'center',
            },
            default: {
                height: hp('5%'), // 70% of height device screen
                width: wp('80%'), // 80% of width device screen
                flexDirection: 'row',
                //marginTop: wp('5%'),
                //marginLeft: wp('10%')
                //justifyContent: 'center',
            },
        }),
    },


    divider: {
        height: hp('10%'),
    },




});