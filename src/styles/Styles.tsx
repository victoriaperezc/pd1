import React from "react";
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Styles = StyleSheet.create({

    simpleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerColumn: {
        display: 'flex',
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerRow: {
        display: 'flex',
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        display: "flex",
        height: '100%',
        width: '60%',
        flexDirection: 'column',
        backgroundColor: '#fe4626',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registryContainer: {
        display: "flex",
        height: '100%',
        width: '40%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginComponents: {
        display: 'flex',
        height: '30%',
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    registryComponents: {
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-around',
    },
    loginTextField: {
        marginTop: '4%',
        display: 'flex',
        width: '100%',
        height: '100%',
        fontSize: hp('2%'),
        placeholderTextColor: "#ffffff",
        outlineWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: '3%',
    },
    loginButton: {
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: '#0072C3',
        textAlign: 'center',
        width: 'fit-content',
        marginHorizontal: '2%'
    },
    logginButtonText: {
        fontSize: hp('2%'),
        color: '#ffffff',
        paddingHorizontal: 25,
        paddingVertical: 5,
    },
    hugeText: {
        color: '#001D6C',
        fontFamily: 'MontserratLight',
        textAlign: 'center',
        fontSize: hp('5%'),
    },
    mediumText: {
        textAlign: 'center',
        fontSize: hp('2%'),
    },
    smallText: {
        textAlign: 'center',
        fontSize: hp('1.5%'),
    },
    bigText: {
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    headerBar: {
        display: 'flex',
        height: wp('6%'),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FE462C',
    },
    headerBarLeft: {
        width: '90%',
        height: '100%',
        justifyContent: 'center'
    },
    headerText: {
        color: '#ffffff',
        fontFamily: 'MontserratExtraLight',
        textAlign: 'center',
        fontSize: hp('5%'),
    },
    headerBarRight: {
        display: 'flex',
        width: wp('8%'),
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        flex: 1,
        width: '60%',
        height: '60%',
        resizeMode: 'center',
    },
    profileImageButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginRight: wp('3%'),
        width: wp('8%'),
    },
    profileCard: {
        display: 'flex',
        flexDirection: 'column',
        height: '80%',
        width: '65%',
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: '#33B1FF',
    },
    profileCardImage: {
        width: '60%',
        height: '60%',
        resizeMode: 'center',
    },
    profileCardText: {
        fontFamily: 'WorkSansExtraLight',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: hp('1%'),
        marginBottom: hp('2%'),
        fontSize: hp('3%'),
    },
    verticalSeparator: {
        borderWidth: 1,
        borderColor: '#b3b3b3',
        height: hp('70%'),
        marginTop: hp('5%'),
        marginBottom: hp('5%')
    },
    profileBodyRightContainer: {
        display: "flex",
        height: '80%',
        width: '80%',
        alignItems: 'center',
    },
    profileOptionsButtonContainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: hp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileOptionsButton: {
        marginHorizontal: wp('1%'),
    },
    profileOptionsButtonText: {
        marginHorizontal: wp('1%'),
        fontFamily: 'workSans',
        fontSize: hp('2%'),
        borderBottomColor: 'gray',
        paddingBottom: hp('1%'),
        borderBottomWidth: 3,
    },
    processStateContainer: {
        flexDirection: 'column',
        display: "flex",
        height: hp('15%'),
        width: wp('40%'),
        marginBottom: hp('2%'),
        backgroundColor: '#33B1FF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        borderRadius: 10,
        height: hp("2%"),
        width: wp("10%"),
    },
    formViewBody: {
        display: "flex",
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    formViewUpperBody: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: wp('10%'),
    },
    stepBar: {
        display: "flex",
        flexDirection: 'row',
        height: '30%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    stepBox: {
        borderRadius: 10,
        height: '80%',
        width: '18%',
        backgroundColor: 'gray',
        borderWidth: 1,
    },

    stepLine: {
        height: 1,
        backgroundColor: '#000',
        borderWidth: 1,
        width: '2%',
    },

    container1: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container3: {
        height: '70%',
        width: '60%',
        backgroundColor: '#ffffff',
    },
    container4: {
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container5: {
        height: '50%',
    },
    textProfile: {
        textAlign: 'center',
        fontSize: hp('3%')
    },
    DocumentsPannelStyle: {
        height: '70%',
        width: '80%',
    },
    DocummentsPannelMenuStyle: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    DocummentsPannelStepsStyle: {
        marginVertical: '4%',
        borderWidth: 2,
        borderColor: 'rgb(220,220,220)',
        borderRadius: 40,
        height: '30%',
        alignItems: 'center',
    },
    backProfileFormulario: {
        height: '20%',
        width: '80%',
        flexDirection: 'row',
    },
    paso1Formulario: {
        height: hp('5%'), // 70% of height device screen
        width: wp('10%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('15%'),
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
    paso2Formulario: {
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
        borderColor: '#808080',
        backgroundColor: '#808080',
        borderWidth: wp('0.2%'),
    },
    paso3Formulario: {
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
        borderColor: '#D0D3D4',
        backgroundColor: '#D0D3D4',
        borderWidth: wp('0.2%'),
    },
    DocumentsFieldStyle: {
        height: '90%',

    },
    formContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        paddingTop: '4%',
        backgroundColor: '#DDE9F1',
        height: '60%',
        width: '80%',
        alignSelf: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    formFieldsContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '80%'
    },
    windowDocuments: {
        marginTop: wp('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        height: hp ('5%'),
        width: wp('70%'),
        backgroundColor: '#33B1FF',
    },
    formFillFont: {
        color: '#fff',
        fontFamily: 'workSans',
        textAlign: 'center',
    }
});

