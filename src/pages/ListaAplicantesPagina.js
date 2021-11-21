import React from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import * as Progress from 'react-native-progress';
import { Searchbar } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DATA = [
  {
    id: "1",
    name: "Alejandra Rincon",
    progress: 50,
    state: "Falta Validación",
  },
  {
    id: "2",
    name: "Nicolas Sarmiento",
    progress: 60,
    state: "Falta Validación",
  },
  {
    id: "3",
    name: "Karen Helena Roa",
    progress: 30,
    state: "Falta Validación",
  },
];


const ListaAplicantesPagina = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.backButtonProfileDocuments}>
        <TouchableOpacity>
          <View style={styles.buttonProfileDocuments}>
            <Text style={styles.textbuttonUpdates}>
              Actualizaciones Recientes
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("New Screen")}>
          <View style={styles.buttonProfileDocuments}>
            <Text style={styles.textbuttonUpdates}>
              Procesos Finalizados
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("New Screen")}>
          <View style={styles.buttonProfileDocuments}>
            <Text style={styles.textbuttonUpdates}>
              Nuevos Ingresos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.progressContainer}>
                <Text>{item.progress}%</Text>
                <Progress.Bar
                  progress={item.progress / 100}
                  width={200}
                  height={15}
                  color="#001d6c"
                />
              </View>
              <Text style={{ flex: 3, alignItems: "center" }}>{item.state}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonApplicantsView}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("PerfilEmpleado", item)}>
                  <Text style={styles.textButtonProfileDocuments}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonApplicantsView}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("DocumentosEmpleado")}>
                  <Text style={styles.textButtonProfileDocuments}>Documentos</Text>
                </TouchableOpacity>
              </View>
            </View>

          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    padding: 15,
    margin: 20,
  },
  progress: {
    height: 20,
    width: 170,
    borderRadius: 4,
  },
  progressContainer: {
    flexDirection: "column",
    flex: 3,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  name: {
    fontWeight: "bold",
    flex: 3,
    alignItems: "center",
  },
  backButtonProfileDocuments: {
    height: hp("8%"), 
    width: wp("95%"), 
    flexDirection: "row",
    marginTop: wp("2%"),
    justifyContent: "space-between",
  },
  buttonProfileDocuments: {
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("3%"),
  },
  textbuttonUpdates: {
    color: "black",
    fontSize: wp("1.5%"),
    textAlign: "center",
  },
  textButtonProfileDocuments: {
    fontSize: wp('1.2%'),
    color: '#ffffff',
    textAlign: "center",
  },
  buttonApplicantsView: {
    display: 'flex',
    backgroundColor: '#0072c3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '35%',
  }
});

export default ListaAplicantesPagina;
