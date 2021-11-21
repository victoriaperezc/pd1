import React, {useState} from 'react';
import {
  //SafeAreaView,
  //ScrollView,
  //StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  CheckBox,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import CheckBox from '@react-native-community/checkbox';
//import DropDownPicker from 'react-native-dropdown-picker';

function PantallaRegistro({navigation}) {
  const [isSelected, setSelection] = useState(false);

  const nextFocus = React.useRef(null);

  const focusNextField = () => {
    if (nextFocus.current != null) {
      nextFocus.current.focus();
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
            <Text style={styles.textStyling}>Seleccione tipo de contrato</Text>
            <View style={styles.backOrderButtonFijo}>
              <Button
                color="#0072c3"
                onPress={() => navigation.navigate('TerminoFijo')}
                title="Termino Fijo"
              />
            </View>
            <View style={styles.backOrderButtonIndefinido}>
              <Button
                color="#0072c3"
                onPress={() => navigation.navigate('TerminoIndefinido')}
                title="Termino Indefinido"
              />
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
    </View>
  );
}

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 22,
    marginTop: hp('5%'),
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
  containerAceptacion: {
    height: hp('6.7%'), // 70% of height device screen
    width: wp('17%'), // 80% of width device screen
    marginLeft: wp('32%'),
    marginTop: wp('25%'),
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
    backgroundColor: '#ffffff',
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
});

export default PantallaRegistro;
