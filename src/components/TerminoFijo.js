import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform, CheckBox, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import API_docs from '../../logic/API_docs';
import * as DocumentPicker from 'expo-document-picker';

const TerminoFijo = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const nextFocus = React.useRef(null);
  const focusNextField = () => {
    if (nextFocus.current != null) {
      nextFocus.current.focus();
    }
  };  

  const selectFile = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf'
    });
    console.log(res.uri);
    const fileToUpload = res;
    const data = new FormData();
    data.append('documento', fileToUpload);
  
    API_docs.uploadDocument(data);     
  };


  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
    API_docs.uploadDocument(result); 
  };


  const [singleFile, setSingleFile] = useState(null);

  const uploadFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.getDocumentAsync({type: 'application/pdf'});
      console.log('res : ' + JSON.stringify(res));
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
    }

    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('documento', fileToUpload);
      let res = await fetch(
        'http://localhost:3001/upload',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'application/pdf',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyling}>Registro</Text>
      <View style={styles.backProfileDocumentsSplit}>
        <View style={styles.backProfile}>
          <View style={styles.containerNombre}>
            <TextInput
              blurOnSubmit={true}
              onSubmitEditing={() => focusNextField()}
              placeholder="Nombre"
              style={styles.textinput}
            />
          </View>
          <View style={styles.containerApellido}>
            <TextInput
              blurOnSubmit={true}
              onSubmitEditing={() => focusNextField()}
              placeholder="Apellido"
              style={styles.textinput}
            />
          </View>
          <View style={styles.containerTipoDoc}>
            <Picker>
              <Picker.Item label="Tipo de documento" value="java" />
              <Picker.Item label="Cedula de ciudadania" value="js" />
            </Picker>
          </View>
          <View style={styles.containerDoc}>
            <TextInput
              blurOnSubmit={true}
              onSubmitEditing={() => focusNextField()}
              placeholder="Numero de documento"
              style={styles.textinput}
            />
          </View>
          <View style={styles.containerCorreo}>
            <TextInput
              blurOnSubmit={true}
              onSubmitEditing={() => focusNextField()}
              placeholder="Correo"
              style={styles.textinput}
            />
          </View>
          <TextInput />
        </View>
        <View style={styles.lineProfile} />
        <View style={styles.backProfile}>
          <View style={styles.backContrato}>
            <Text style={styles.textStyling}>Termino Fijo</Text>
            <View style={styles.containerIde} onPress={() => navigation.navigate('TerminoFijo')}>
              <Text style={styles.text}>Documento de indentificacion:</Text>
            </View>
            <View style={styles.containerIdeBox}>
              <TouchableOpacity onPress={() => uploadFile()}>
                <Text style={styles.textbutton}>Choose File</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerOfertaLaboral}>
              <Text style={styles.text}>Oferta laboral:</Text>
            </View>
            <View style={styles.containerOfertaLaboralBox}>
              <TouchableOpacity onPress={() => uploadFile()}>
                <Text style={styles.textbutton}>Choose File</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerCertificacionBancaria}>
              <Text style={styles.text}>Certficacion Bancaria:</Text>
            </View>
            <View style={styles.containerCertificacionBancariaBox}>
              <TouchableOpacity onPress={() => uploadFile()}>
                <Text style={styles.textbutton}>Choose File</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerPoliza}>
              <Text style={styles.text}>Formato de poliza exequial:</Text>
            </View>
            <View style={styles.containerPolizaBox}>
              <TouchableOpacity onPress={() => uploadFile()}>
                <Text style={styles.textbutton}>Choose File</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerContrato}>
              <Text style={styles.text}>Copia del contrato:</Text>
            </View>
            <View style={styles.containerContratoBox}>
              <TouchableOpacity onPress={() => uploadFile()}>
                <Text style={styles.textbutton}>Choose File</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerAceptacion}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.text}>
            Acepto vincularme al fondo de empleados
          </Text>
        </View>
      </View>
      <View style={styles.containerEnviar}>
        <Button
          color="#D0D3D4"
          onPress={() => navigation.navigate('PerfilAfiliado')}
          title="Enviar"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 22,
    marginTop: hp('4%'),
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: hp('1%'),
    fontSize: wp('0.8%'),
    margin: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  container: {
    height: hp('85%'), // 70% of height device screen
    width: wp('80%'), // 80% of width device screen
    marginTop: hp('0%'),
    marginLeft: wp('10%'),
    paddingLeft: wp('0%'),
  },
  containerNombre: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('17%'), // 80% of width device screen
    marginLeft: wp('-0.6%'),
    marginTop: wp('10%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerApellido: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('17%'), // 80% of width device screen
    marginLeft: wp('15%'),
    marginTop: wp('-3.05%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerTipoDoc: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('15.5%'), // 80% of width device screen
    marginLeft: wp('0%'),
    marginTop: wp('0%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
    justifyContent: 'center',
  },
  containerDoc: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('17%'), // 80% of width device screen
    marginLeft: wp('15%'),
    marginTop: wp('-3.05%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerCorreo: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('33%'), // 80% of width device screen
    marginLeft: wp('-0.9%'),
    marginTop: wp('0%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerIde: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('-1%'),
    marginTop: wp('1%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerIdeBox: {
    height: hp('3.8%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('12%'),
    marginTop: wp('-2.7%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerOfertaLaboral: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('-1%'),
    marginTop: wp('1%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerOfertaLaboralBox: {
    height: hp('3.8%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('12%'),
    marginTop: wp('-2.7%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerCertificacionBancaria: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('-1%'),
    marginTop: wp('1%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerCertificacionBancariaBox: {
    height: hp('3.8%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('12%'),
    marginTop: wp('-2.7%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerPoliza: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('-1%'),
    marginTop: wp('1%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerPolizaBox: {
    height: hp('3.8%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('12%'),
    marginTop: wp('-2.7%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerContrato: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('-1%'),
    marginTop: wp('1%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerContratoBox: {
    height: hp('3.8%'), // 70% of height device screen
    width: wp('13%'), // 80% of width device screen
    marginLeft: wp('12%'),
    marginTop: wp('-2.7%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerAceptacion: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('17%'), // 80% of width device screen
    marginLeft: wp('32%'),
    marginTop: wp('25%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  containerEnviar: {
    height: hp('6%'), // 70% of height device screen
    width: wp('7%'), // 80% of width device screen
    marginLeft: wp('69.5%'),
    marginTop: wp('-3.5%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  textinput: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    backgroundColor: '#FBFCFC',
    padding: 4,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  backProfileDocumentsSplit: {
    height: hp('20%'), // 70% of height device screen
    width: wp('70%'), // 80% of width device screen
    flexDirection: 'row',
    marginLeft: wp('0%'),
    justifyContent: 'space-between',
    left: hp('10%'),
  },
  backProfile: {
    height: hp('65%'), // 70% of height device screen
    width: wp('36%'), // 80% of width device screen
    marginTop: hp('5%'),
    marginLeft: wp('0%'),
    backgroundColor: '#fe462c',
    paddingLeft: wp('2%'),
  },
  backContrato: {
    height: hp('45%'), // 70% of height device screen
    width: wp('31%'), // 80% of width device screen
    marginTop: hp('10%'),
    marginLeft: wp('0%'),
    backgroundColor: '#0072c3',
    paddingLeft: wp('2%'),
  },
  lineProfile: {
    borderWidth: wp('0.05%'),
    height: hp('50%'),
    marginTop: hp('13%'),
  },
  divider: {
    height: hp('10%'),
  },
  backOrderButtonFijo: {
    ...Platform.select({
      android: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('-0.6%'),
        marginTop: wp('4%'),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  backOrderButtonIndefinido: {
    ...Platform.select({
      android: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp('6.7%'), // 70% of height device screen
        width: wp('13%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('15%'),
        marginTop: wp('-3%'),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  textbutton: {
    ...Platform.select({
      android: {
        color: '#808080',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#FBFCFC',
        borderColor: '#808080',
      },
      default: {
        color: '#808080',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#FBFCFC',
        borderColor: '#808080',
      },
    }),
  },
  textbuttonEnviar: {
    ...Platform.select({
      android: {
        color: '#fff',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#D0D3D4',
        borderColor: '#808080',
      },
      default: {
        color: '#fff',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#D0D3D4',
        borderColor: '#808080',
      },
    }),
  },
});

export default TerminoFijo;
