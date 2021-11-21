import React , { useState } from "react";
import { FlatList,  StyleSheet, CheckBox, View, TextInput, Platform, Image, TouchableOpacity, Text, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DATA = [
    {
      id: "1",
      docName: "Documento de Identificación",
      weigth: 50,
      date: "10/29/2021",
    },
    {
      id: "2",
      docName: "Oferta Laboral",
      weigth: 72,
      date: "10/29/2021",
    },
    {
      id: "3",
      docName: "Certificación Bancaria",
      weigth: 80,
      date: "10/29/2021",
    },
    {
      id: "4",
      docName: "Póliza Excequial",
      weigth: 90,
      date: "10/29/2021",
    }
  ];

const DocumentosEmpleadoPagina = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyleInputSearch}>
        <Image
          source={{
            uri: "https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png",
          }}
          style={styles.imageStyleInputSearch}
        />

        <TextInput
          style={styles.inputSearch}
          onChangeText={onChangeText}
          placeholder="Search"
          value={text}
          underlineColorAndroid="transparent"
          borderColor="none"
        />
      </View>
      <View style={styles.backButtonProfileDocuments}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.buttonProfileDocuments}>
              <Text style={styles.textbuttonProfileDocuments}>Perfil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DocumentosEmpleado")}>
            <View style={styles.buttonProfileDocuments}>
              <Text style={styles.textbuttonProfileDocuments}>Documentos</Text>
            </View>
          </TouchableOpacity>
        </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.infoContainer}>
            <Text style={{ flex: 5 }}>{item.docName}</Text>
            <Text style={{ flex: 1 }}>{item.weigth}KB</Text>
            <Text style={{ flex: 3 }}>{item.date}</Text>
            <TouchableOpacity
              style={styles.buttonApplicantsView}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={styles.textButtonProfileDocuments}>Descargar</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonProfileDocuments: {
    ...Platform.select({
      android: {
        height: hp("5%"),
        width: wp("80%"),
        flexDirection: "row",
        justifyContent: "center",
      },
      default: {
        height: hp("5%"),
        width: wp("80%"),
        flexDirection: "row",
        marginTop: wp("0%"),
        justifyContent: "center",
      },
    }),
  },

  buttonProfileDocuments: {
    paddingVertical: hp("0%"),
    paddingHorizontal: wp("1%"),
    backgroundColor: "#ffffff",
  },

  textbuttonProfileDocuments: {
    ...Platform.select({
      android: {
        color: "#000",
        fontSize: wp("3%"),
        textAlign: "center",
      },
      default: {
        color: "#000",
        fontSize: wp("1.5%"),
        textAlign: "center",
        fontFamily: 'Montserrat',
        fontWeight: "bold",
      },
    }),
  },
  container: {
    flex: 1,
    padding: 15,
    margin:20
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: 'flex-start',
    backgroundColor: "#33b1ff",
    padding: 20,
    marginVertical: 8,
    borderRadius:10
  },
  buttonApplicantsView: {
    backgroundColor: '#0072c3',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: hp('5%'),
    width: '10%'
  },
  textButtonProfileDocuments: {
    fontSize: wp('1.2%'),
    color: '#ffffff',
    textAlign: "center",
    fontFamily: 'Montserrat'
  },
  inputSearch: {
    ...Platform.select({
      android: {
        height: hp("5%"),
        width: wp("80%"),
        marginTop: hp("3%"),
        marginLeft: wp("10%"),
        borderWidth: wp("0.2%"),
        borderColor: "#9b9b9b",
        paddingLeft: wp("5%"),
        fontSize: wp("5%"),
      },
      default: {
        flex: 1,
        height: hp("6.3%"),
        borderColor: "transparent",
        borderWidth: 1,
        borderRadius: 10,
      },
    }),
  },

  sectionStyleInputSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    height: hp("5%"),
    borderRadius: 10,
    marginTop: hp("0%"),
    marginBottom: hp("2%"),
    marginHorizontal: hp("30%"),
    borderStyle: "solid",
  },

  imageStyleInputSearch: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
    borderColor: "#000",
  },
});

export default DocumentosEmpleadoPagina;