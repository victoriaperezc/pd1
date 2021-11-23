import React, { useState } from 'react';
import { StyleSheet, CheckBox, View, TextInput, Platform, Image, TouchableOpacity, Text, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProgressBar from 'react-animated-progress-bar';
import Modal from "react-native-modal";
import { Icon } from 'react-native-elements'

const PerfilEmpleado = ({ route, navigation }) => {
  const item = route.params;
  const [text, onChangeText] = React.useState("");


  //#region ApprovadeVisible 
  const [isVisibleApprovade, setVisibleApprovade] = useState(false);

  const toggleApprovade = () => {
    setVisibleApprovade(!isVisibleApprovade);
  };

  const [isVisibleApprovade1, setVisibleApprovade1] = useState(false);

  const toggleApprovade1 = () => {
    setVisibleApprovade1(!isVisibleApprovade1);
  };

  const [isVisibleApprovade2, setVisibleApprovade2] = useState(false);

  const toggleApprovade2 = () => {
    setVisibleApprovade2(!isVisibleApprovade2);
  };

  const [isVisibleApprovade3, setVisibleApprovade3] = useState(false);

  const toggleApprovade3 = () => {
    setVisibleApprovade3(!isVisibleApprovade3);
  };

  const [isVisibleApprovade4, setVisibleApprovade4] = useState(false);

  const toggleApprovade4 = () => {
    setVisibleApprovade4(!isVisibleApprovade4);
  };

  const [isVisibleApprovade5, setVisibleApprovade5] = useState(false);

  const toggleApprovade5 = () => {
    setVisibleApprovade5(!isVisibleApprovade5);
  };

  const [isVisibleApprovade6, setVisibleApprovade6] = useState(false);

  const toggleApprovade6 = () => {
    setVisibleApprovade6(!isVisibleApprovade6);
  };

  const [isVisibleApprovade7, setVisibleApprovade7] = useState(false);

  const toggleApprovade7 = () => {
    setVisibleApprovade7(!isVisibleApprovade7);
  };

  const [isVisibleApprovade8, setVisibleApprovade8] = useState(false);

  const toggleApprovade8 = () => {
    setVisibleApprovade8(!isVisibleApprovade8);
  };

  const [isVisibleApprovade9, setVisibleApprovade9] = useState(false);

  const toggleApprovade9 = () => {
    setVisibleApprovade9(!isVisibleApprovade9);
  };

  //#endregion

  //#region UndoVisible 
  const [isVisibleUndo, setVisibleUndo] = useState(false);

  const toggleUndo = () => {
    setVisibleUndo(!isVisibleUndo);
  };

  const [isVisibleUndo1, setVisibleUndo1] = useState(false);

  const toggleUndo1 = () => {
    setVisibleUndo1(!isVisibleUndo1);
  };

  const [isVisibleUndo2, setVisibleUndo2] = useState(false);

  const toggleUndo2 = () => {
    setVisibleUndo2(!isVisibleUndo2);
  };

  const [isVisibleUndo3, setVisibleUndo3] = useState(false);

  const toggleUndo3 = () => {
    setVisibleUndo3(!isVisibleUndo3);
  };

  const [isVisibleUndo4, setVisibleUndo4] = useState(false);

  const toggleUndo4 = () => {
    setVisibleUndo4(!isVisibleUndo4);
  };

  const [isVisibleUndo5, setVisibleUndo5] = useState(false);

  const toggleUndo5 = () => {
    setVisibleUndo5(!isVisibleUndo5);
  };

  const [isVisibleUndo6, setVisibleUndo6] = useState(false);

  const toggleUndo6 = () => {
    setVisibleUndo6(!isVisibleUndo6);
  };

  const [isVisibleUndo7, setVisibleUndo7] = useState(false);

  const toggleUndo7 = () => {
    setVisibleUndo7(!isVisibleUndo7);
  };

  const [isVisibleUndo8, setVisibleUndo8] = useState(false);

  const toggleUndo8 = () => {
    setVisibleUndo8(!isVisibleUndo8);
  };

  const [isVisibleUndo9, setVisibleUndo9] = useState(false);

  const toggleUndo9 = () => {
    setVisibleUndo9(!isVisibleUndo9);
  };

  const [isVisibleUndoTask2, setVisibleUndoTask2] = useState(false);

  const toggleUndoTask2 = () => {
    setVisibleUndoTask2(!isVisibleUndoTask2);
  };

  //#endregion

  //#region ModalVisible
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModalVisible1, setModalVisible1] = useState(false);

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const [isModalVisible3, setModalVisible3] = useState(false);

  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };

  const [isModalVisible4, setModalVisible4] = useState(false);

  const toggleModal4 = () => {
    setModalVisible4(!isModalVisible4);
  };

  const [isModalVisible5, setModalVisible5] = useState(false);

  const toggleModal5 = () => {
    setModalVisible5(!isModalVisible5);
  };

  const [isModalVisible6, setModalVisible6] = useState(false);

  const toggleModal6 = () => {
    setModalVisible6(!isModalVisible6);
  };

  const [isModalVisible7, setModalVisible7] = useState(false);

  const toggleModal7 = () => {
    setModalVisible7(!isModalVisible7);
  };

  const [isModalVisible8, setModalVisible8] = useState(false);

  const toggleModal8 = () => {
    setModalVisible8(!isModalVisible8);
  };

  const [isModalVisible9, setModalVisible9] = useState(false);

  const toggleModal9 = () => {
    setModalVisible9(!isModalVisible9);
  };

  const [isModalVisibleTask2, setModalVisibleTask2] = useState(false);

  const toggleModalTask2 = () => {
    setModalVisibleTask2(!isModalVisibleTask2);
  };

  //#endregion  

  //#region functionCombined
  const functionCombined = () => {
    toggleUndo();
    toggleModal();
  }

  const functionCombined1 = () => {
    toggleModal1();
    toggleUndo1();
  }

  const functionCombined2 = () => {
    toggleModal2();
    toggleUndo2();
  }

  const functionCombined3 = () => {
    toggleModal3();
    toggleUndo3();
  }

  const functionCombined4 = () => {
    toggleModal4();
    toggleUndo4();
  }

  const functionCombined5 = () => {
    toggleModal5();
    toggleUndo5();
  }

  const functionCombined6 = () => {
    toggleModal6();
    toggleUndo6();
  }

  const functionCombined7 = () => {
    toggleModal7();
    toggleUndo7();
  }

  const functionCombined8 = () => {
    toggleModal8();
    toggleUndo8();
  }

  const functionCombined9 = () => {
    toggleModal9();
    toggleUndo9();
  }

  const functionCombinedTask2 = () => {
    toggleModalTask2();
    toggleUndoTask2();
  }
  //#endregion

  //#region isVisibleCompleteTask
  const [isVisibleCompleteTask2, setVisibleCompleteTask2] = useState(false);

  const toggleCompleteTask2 = () => {
    setVisibleCompleteTask2(!isVisibleCompleteTask2);
  };

  const [isVisibleCompleteTask3, setVisibleCompleteTask3] = useState(false);

  const toggleCompleteTask3 = () => {
    setVisibleCompleteTask3(!isVisibleCompleteTask3);
  };

  const [isVisibleEndTask2, setVisibleEndTask2] = useState(false);

  const toggleEndTask2 = () => {
    setVisibleEndTask2(!isVisibleEndTask2);
  };

  const [isVisibleEndTask4, setVisibleEndTask4] = useState(false);

  const toggleEndTask4 = () => {
    setVisibleEndTask4(!isVisibleEndTask4);
  };

  const [isVisibleEndTask5, setVisibleEndTask5] = useState(false);

  const toggleEndTask5 = () => {
    setVisibleEndTask5(!isVisibleEndTask5);
  };



  const [isVisibleCompleteTask6, setVisibleCompleteTask6] = useState(false);

  const toggleCompleteTask6 = () => {
    setVisibleCompleteTask6(!isVisibleCompleteTask6);
  };

  const [isVisibleEndTask6, setVisibleEndTask6] = useState(false);

  const toggleEndTask6 = () => {
    setVisibleEndTask6(!isVisibleEndTask6);
  };

  const [isVisibleNextTask1, setVisibleNextTask1] = useState(false);

  const toggleNextTask1 = () => {
    setVisibleNextTask1(!isVisibleNextTask1);
  };

  const [isVisibleNextTask3, setVisibleNextTask3] = useState(false);

  const toggleNextTask3 = () => {
    setVisibleNextTask3(!isVisibleNextTask3);
  };

  const [isVisibleNextTask4, setVisibleNextTask4] = useState(false);

  const toggleNextTask4 = () => {
    setVisibleNextTask4(!isVisibleNextTask4);
  };

  const [isVisibleNextTask5, setVisibleNextTask5] = useState(false);

  const toggleNextTask5 = () => {
    setVisibleNextTask5(!isVisibleNextTask5);
  };

  const [isVisibleNextTask6, setVisibleNextTask6] = useState(false);

  const toggleNextTask6 = () => {
    setVisibleNextTask6(!isVisibleNextTask6);
  };

  //#endregion 

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

      <View style={styles.backProfileDocuments}>
        <View style={styles.backButtonProfileDocuments}>

          <TouchableOpacity>
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

        <View style={styles.backProfileDocumentsSplit}>

          <View style={styles.backProfile}>
            <TouchableHighlight
              style={[
                styles.imgProfileUser,
                { borderColor: "black", borderWidth: 0 },
              ]}
            >
              <Image
                source={{
                  uri: "https://image0.flaticon.com/icons/png/512/3135/3135768.png",
                }}
                style={styles.imgProfile}
              />
            </TouchableHighlight>
            <Text style={styles.textNameUserProfile}>{item.name}</Text>
            <Text style={styles.textDocumentUserProfile}>Documento</Text>
            <View style={styles.backProfileEmailSlackSplit}>
              <Text style={styles.textEmailUserProfile}>Correo</Text>
              <Text style={styles.textSlackUserProfile}>Slack</Text>
            </View>
            <Text style={styles.textIBMUserProfile}>IBM</Text>
            <View style={styles.circles}>
              <ProgressBar
                width={JSON.stringify(wp('10%'))}
                trackWidth="13"
                percentage={JSON.stringify(item.progress)}
                fontColor="white"
                trackPathColor="grey"
                trackBorderColor="black"
                hollowBackgroundColor="#333333"
                defColor={{
                  fair: 'orangered',
                  good: 'yellow',
                  excellent: 'green',
                  poor: 'red',
                }}
              />
            </View>
          </View>

          <View style={styles.lineProfile} />
          <View style={styles.backTasks}>

            <Text style={styles.taskTitle}>Tareas</Text>

            <SafeAreaView style={styles.container}>
              <ScrollView >

                {isVisibleNextTask1 ? (<View style={styles.infoContainerAproved}>
                  <Text style={styles.taskTitle1}>Tarea 1</Text>
                  <Icon
                    name='check-circle'
                    color='#828282'
                    setModalVisible='false' />
                  <TouchableOpacity style={styles.widthButtonUndo} onPress={toggleNextTask1}>
                    <View style={styles.buttonsBack}>
                      <Text style={styles.textViewPDF}>Deshacer</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.widthButtonBack} onPress={toggleNextTask1}>
                    <View style={styles.buttonsApproved}>
                      <Text style={styles.textApprovade}>Revisar</Text>
                    </View>
                  </TouchableOpacity>

                </View>) : (
                  <View style={styles.infoContainerAproved}>
                    <Text style={styles.taskTitle1}>Tarea 1</Text>

                    <View style={styles.infoContainerTask}>

                      <View style={styles.infoTask}>
                        <Text style={styles.textHeadersTasks}>Nombre</Text>
                        <Text style={styles.textHeadersTasks}>Archivo</Text>
                        <Text style={styles.textHeadersTasks}>Verificación</Text>
                      </View>
                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Documento de {"\n"}Identificación</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Formulario.pdf</Text>
                          </View>
                        </TouchableOpacity>


                        {isVisibleApprovade ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo ? null : isVisibleApprovade ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo ? null : isVisibleApprovade ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo ? (<Text>Pendiente</Text>) : null}

                        </View>

                      </View>

                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Oferta Laboral</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Carta de Declaración.pdf</Text>
                          </View>
                        </TouchableOpacity>

                        {isVisibleApprovade1 ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo1 ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo1 ? null : isVisibleApprovade1 ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal1}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo1 ? null : isVisibleApprovade1 ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade1}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade1}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}

                          {isVisibleUndo1 ? (<Text>Pendiente</Text>) : null}

                        </View>
                      </View>
                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Certificación Bancaria</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Carta 1.pdf</Text>
                          </View>
                        </TouchableOpacity>

                        {isVisibleApprovade2 ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo2 ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo2 ? null : isVisibleApprovade2 ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal2}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo2 ? null : isVisibleApprovade2 ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade2}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade2}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo2 ? (<Text>Pendiente</Text>) : null}

                        </View>
                      </View>


                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Póliza Exequial</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Carta 2.pdf</Text>
                          </View>
                        </TouchableOpacity>
                        {isVisibleApprovade3 ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo3 ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo3 ? null : isVisibleApprovade3 ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal3}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo3 ? null : isVisibleApprovade3 ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade3}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade3}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}

                          {isVisibleUndo3 ? (<Text>Pendiente</Text>) : null}

                        </View>
                      </View>
                    </View>
                  </View>
                )}


                <Modal style={styles.modalBack} isVisible={isModalVisible}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                <Modal style={styles.modalBack} isVisible={isModalVisible1}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal1}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined1}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                <Modal style={styles.modalBack} isVisible={isModalVisible2}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal2}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined2}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                <Modal style={styles.modalBack} isVisible={isModalVisible3}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal3}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined3}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                {isVisibleNextTask1 ? null : isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? (<TouchableOpacity style={styles.widthTasks} onPress={toggleNextTask1}>
                  <View style={styles.nextButtonTasks}>
                    <Text style={styles.textApprovade}>Siguiente</Text>
                  </View>
                </TouchableOpacity>) : null : null : null : null}

                {isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask1 ? isVisibleCompleteTask2 ? (<View style={styles.infoContainerAproved}>
                  <Text style={styles.taskTitle1}>Tarea 2</Text>

                  <Icon
                      name='check-circle'
                      color='#828282'
                      setModalVisible='false' />

                 <TouchableOpacity style={styles.widthButtonUndo} onPress={toggleCompleteTask2}>
                    <View style={styles.buttonsBack}>
                      <Text style={styles.textViewPDF}>Deshacer</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.widthButtonBack} onPress={toggleCompleteTask2}>
                    <View style={styles.buttonsApproved}>
                      <Text style={styles.textApprovade}>Revisar</Text>
                    </View>
                  </TouchableOpacity>

                </View>) : isVisibleUndoTask2? <View style={styles.infoContainerTaskApprovedTask2}>
                <Text style={styles.taskTitle1}>Tarea 2 </Text>
                <Icon 
                style={styles.iconTask2}
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />
                <Text>Pendiente</Text>


                </View> : (<View style={styles.infoContainer}>
                  <Text style={styles.taskTitle1}>Tarea 2 </Text>
                  {isVisibleCompleteTask2 ? null : isVisibleUndoTask2? null: (<Text style={styles.taskText}> Verificación de información de formulario FEL </Text>)}

                  <View style={styles.infoContainerButtonsTask2}>
                      {isVisibleCompleteTask2 ? null : (
                        <TouchableOpacity style={styles.widthTasks} onPress={toggleModalTask2}>
                          <View style={styles.buttonsBack}>
                            <Text style={styles.textViewPDF}>Devolver</Text>
                          </View>
                        </TouchableOpacity>)}

                      {isVisibleCompleteTask2 ? null : (<TouchableOpacity style={styles.widthTasksUndo} onPress={toggleCompleteTask2} >
                        <View style={styles.buttonsApprovedUndo}>
                          <Text style={styles.textApprovade}>Completado</Text>
                        </View>
                      </TouchableOpacity>)}

                    </View>

                </View>) : null : null : null : null : null}

                <Modal style={styles.modalBack} isVisible={isModalVisibleTask2}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModalTask2}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombinedTask2}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                {isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask1 ? isVisibleCompleteTask2? isVisibleEndTask4? 
                (<View style={styles.infoContainerAproved}>
                  <Text style={styles.taskTitle1}>Tarea 3</Text>

                  <Icon
                      name='check-circle'
                      color='#828282'
                      setModalVisible='false' />

                 <TouchableOpacity style={styles.widthButtonUndo} onPress={toggleEndTask4}>
                    <View style={styles.buttonsBack}>
                      <Text style={styles.textViewPDF}>Deshacer</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.widthButtonBack} onPress={toggleEndTask4}>
                    <View style={styles.buttonsApproved}>
                      <Text style={styles.textApprovade}>Revisar</Text>
                    </View>
                  </TouchableOpacity>

                </View>) : (<View style={styles.infoContainer}>
                  <Text style={styles.taskTitle1}>Tarea 3</Text>
                  <Text> Envío de cartas de vinculación</Text>
                  {isVisibleNextTask3 ? null : (<View style={styles.infoContainerAproved}>
                    <TouchableOpacity style={styles.widthTasks} onPress={toggleNextTask3}>
                      <View style={styles.buttonsApproved}>
                        <Text style={styles.textApprovade}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>)}

                </View>) : null : null : null : null : null : null }

                {isVisibleEndTask4 ? null : isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask3 ? (<TouchableOpacity style={styles.widthTasks} onPress={toggleEndTask4}>
                  <View style={styles.nextButtonTasks}>
                    <Text style={styles.textApprovade}>Siguiente</Text>
                  </View>
                </TouchableOpacity>) : null : null : null : null : null}

                {isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask1 ? isVisibleCompleteTask2? isVisibleEndTask4? isVisibleNextTask4 ? (
                <View style={styles.infoContainerAprovedTask4}>
                  <Text style={styles.taskTitle4}>Tarea 4</Text>
                  <Icon
                    name='check-circle'
                    color='#828282'
                    setModalVisible='false' />
                  <TouchableOpacity style={styles.widthButtonUndo} onPress={toggleNextTask4}>
                    <View style={styles.buttonsBack}>
                      <Text style={styles.textViewPDF}>Deshacer</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.widthButtonBack} onPress={toggleNextTask4}>
                    <View style={styles.buttonsApproved}>
                      <Text style={styles.textApprovade}>Revisar</Text>
                    </View>
                  </TouchableOpacity>

                </View>) : (
                  <View style={styles.infoContainerAprovedTask4}>
                    <Text style={styles.taskTitle4}>Tarea 4</Text>

                    <View style={styles.infoContainerTask}>

                      <View style={styles.infoTask}>
                        <Text style={styles.textHeadersTasks}>Nombre</Text>
                        <Text style={styles.textHeadersTasks}>Archivo</Text>
                        <Text style={styles.textHeadersTasks}>Verificación</Text>
                      </View>
                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Formulario de {"\n"}Conocimiento</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Formulario.pdf</Text>
                          </View>
                        </TouchableOpacity>


                        {isVisibleApprovade4 ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo4 ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo4 ? null : isVisibleApprovade4 ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal4}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo4 ? null : isVisibleApprovade4 ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade4}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade4}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo4 ? (<Text>Pendiente</Text>) : null}

                        </View>

                      </View>

                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Carta de Declaración de Voluntad</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Carta de Declaración.pdf</Text>
                          </View>
                        </TouchableOpacity>

                        {isVisibleApprovade5 ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo5 ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo5 ? null : isVisibleApprovade5 ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal5}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo5 ? null : isVisibleApprovade5 ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade5}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade5}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}

                          {isVisibleUndo5 ? (<Text>Pendiente</Text>) : null}

                        </View>
                      </View>
                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Carta de Autorización 1</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Carta 1.pdf</Text>
                          </View>
                        </TouchableOpacity>

                        {isVisibleApprovade6 ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo6 ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo6 ? null : isVisibleApprovade6 ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal6}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo6 ? null : isVisibleApprovade6 ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade6}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade6}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo6 ? (<Text>Pendiente</Text>) : null}

                        </View>
                      </View>


                      <View style={styles.infoTask}>

                        <Text style={styles.widthTasks}>Carta de Autorización 2</Text>

                        <TouchableOpacity style={styles.widthTasks} onPress={() => window.open('http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf', '_blank')}>
                          <View style={styles.butonsPDFTask}>
                            <Text style={styles.textViewPDF}>Carta 2.pdf</Text>
                          </View>
                        </TouchableOpacity>
                        {isVisibleApprovade7 ? (<Icon
                          name='check-circle'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        {isVisibleUndo7 ? (<Icon
                          name='undo'
                          color='#828282'
                          setModalVisible='false' />) : null}

                        <View style={styles.infoTask}>
                          {isVisibleUndo7 ? null : isVisibleApprovade7 ? null : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleModal7}>
                              <View style={styles.buttonsBack}>
                                <Text style={styles.textViewPDF}>Devolver</Text>
                              </View>
                            </TouchableOpacity>
                          )}
                          {isVisibleUndo7 ? null : isVisibleApprovade7 ? (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade7}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Deshacer</Text>
                              </View>
                            </TouchableOpacity>) : (
                            <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade7}>
                              <View style={styles.buttonsApproved}>
                                <Text style={styles.textApprovade}>Validar</Text>
                              </View>
                            </TouchableOpacity>
                          )}

                          {isVisibleUndo7 ? (<Text>Pendiente</Text>) : null}

                        </View>
                      </View>
                    </View>
                  </View>
                ): null : null : null : null : null : null : null}


                <Modal style={styles.modalBack} isVisible={isModalVisible4}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal4}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined4}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                <Modal style={styles.modalBack} isVisible={isModalVisible5}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal5}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined5}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                <Modal style={styles.modalBack} isVisible={isModalVisible6}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal6}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined6}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                <Modal style={styles.modalBack} isVisible={isModalVisible7}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal7}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>Comentario de Devolución</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Texto"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined7}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                {isVisibleApprovade4 ? isVisibleApprovade5 ? isVisibleApprovade6 ? isVisibleApprovade7 ? (<TouchableOpacity style={styles.widthTasks} onPress={toggleEndTask5}>
                  <View style={styles.nextButtonTasks}>
                    <Text style={styles.textApprovade}>Siguiente</Text>
                  </View>
                </TouchableOpacity>) : null : null : null : null }

                {isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask1 ? isVisibleCompleteTask2? isVisibleEndTask4? isVisibleNextTask4 ? isVisibleEndTask5 ? (<View style={styles.infoContainer}>
                  <Text style={styles.taskTitle1}>Tarea 5</Text>
                  <Text> Realizar consulta en listas</Text>
                  {isVisibleNextTask5 ? null : (<View style={styles.infoContainerAproved}>
                    <View style={styles.infoTask}>
                      {isVisibleApprovade8 ? (<Icon
                        name='check-circle'
                        color='#828282'
                        setModalVisible='false' />) : null}

                      {isVisibleUndo8 ? (<Icon
                        name='undo'
                        color='#828282'
                        setModalVisible='false' />) : null}

                      <View style={styles.infoTask}>
                        {isVisibleUndo8 ? null : isVisibleApprovade8 ? null : (
                          <TouchableOpacity style={styles.widthTasks} onPress={toggleModal8}>
                            <View style={styles.buttonsBack}>
                              <Text style={styles.textViewPDF}>Aprobar</Text>
                            </View>
                          </TouchableOpacity>
                        )}
                        {isVisibleUndo8 ? null : isVisibleApprovade8 ? (
                          <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade8}>
                            <View style={styles.buttonsApproved}>
                              <Text style={styles.textApprovade}>Deshacer</Text>
                            </View>
                          </TouchableOpacity>) : (
                          <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade8}>
                            <View style={styles.buttonsApproved}>
                              <Text style={styles.textApprovade}>Validar</Text>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>

                      <View style={styles.infoTask}>
                        {isVisibleUndo9 ? null : isVisibleApprovade9 ? null : (
                          <TouchableOpacity style={styles.widthTasks} onPress={toggleModal9}>
                            <View style={styles.buttonsBack}>
                              <Text style={styles.textViewPDF}>Devolver</Text>
                            </View>
                          </TouchableOpacity>
                        )}
                        {isVisibleUndo9 ? null : isVisibleApprovade9 ? (
                          <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade9}>
                            <View style={styles.buttonsApproved}>
                              <Text style={styles.textApprovade}>Deshacer</Text>
                            </View>
                          </TouchableOpacity>) : (
                          <TouchableOpacity style={styles.widthTasks} onPress={toggleApprovade9}>
                            <View style={styles.buttonsApproved}>
                              <Text style={styles.textApprovade}>Validar</Text>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <TouchableOpacity style={styles.widthTasks} onPress={toggleNextTask5}>
                      <View style={styles.buttonsApproved}>
                        <Text style={styles.textApprovade}>Consultar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>)}

                </View>) :null : null : null : null : null : null : null : null : null}

                <Modal style={styles.modalBack} isVisible={isModalVisible8}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal8}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>La persona no tiene riesgos</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      value="La persona no tiene riesgos"
                    />

                    <TouchableOpacity onPress={functionCombined8}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>

                <Modal style={styles.modalBack} isVisible={isModalVisible9}>
                  <View style={styles.backgroundModal}>

                    <View style={styles.backModal}>

                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal9}
                      >
                        <Text style={styles.textHideModal}>X</Text>
                      </TouchableOpacity>

                      <Text style={styles.textFeedBack}>La persona tiene riesgos</Text>

                    </View>

                    <TextInput
                      style={styles.inputFeedBack}
                      onChangeText={onChangeText}
                      placeholder="Añadir Razón"
                      value={text}
                    />

                    <TouchableOpacity onPress={functionCombined9}>
                      <View style={styles.buttonTextSend}>
                        <Text style={styles.textbuttonTaskValidar}>Enviar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>


                {isVisibleEndTask6 ? null : isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask3 ? isVisibleEndTask4 ? isVisibleEndTask5 ? (<TouchableOpacity style={styles.widthTasks} onPress={toggleEndTask6}>
                  <View style={styles.nextButtonTasks}>
                    <Text style={styles.textApprovade}>Siguiente</Text>
                  </View>
                </TouchableOpacity>) : null : null : null : null : null : null : null}

                {isVisibleEndTask6 ? isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask1 ? (<View style={styles.infoContainer}>
                  <Text style={styles.taskTitle1}>Tarea 6</Text>
                  {isVisibleCompleteTask6 ? (<Text>Debe cargar el documento correspondiente al pagaré de Decval. Marque la casilla para completar el progreso </Text>) : (<Text> Verificación de pagare Deceval </Text>)}

                  <View style={styles.infoContainerAproved}>
                    {isVisibleCompleteTask6 ? null : (
                      <TouchableOpacity style={styles.widthTasks}>
                        <View style={styles.buttonsBack}>
                          <Text style={styles.textViewPDF}>Deshacer</Text>
                        </View>
                      </TouchableOpacity>)}

                    {isVisibleCompleteTask6 ? (<View style={styles.infoContainerTask2}>
                      <CheckBox
                        value='Completado'
                        style={styles.checkbox}
                      />
                      <Text >Completado</Text>
                    </View>) : (<TouchableOpacity style={styles.widthTasks} onPress={toggleCompleteTask6} >
                      <View style={styles.buttonsApproved}>
                        <Text style={styles.textApprovade}>Completado</Text>
                      </View>
                    </TouchableOpacity>)}

                  </View>
                </View>) : null : null : null : null : null : null}

                {isVisibleCompleteTask6 ? null : isVisibleApprovade ? isVisibleApprovade1 ? isVisibleApprovade2 ? isVisibleApprovade3 ? isVisibleNextTask1 ? isVisibleEndTask6 ? (<TouchableOpacity style={styles.widthTasks} onPress={toggleEndTask2}>
                  <View style={styles.nextButtonTasks}>
                    <Text style={styles.textApprovade}>Finalizar</Text>
                  </View>
                </TouchableOpacity>
                ) : null : null : null : null : null : null}

              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  
  iconTask2: {
    marginLeft: wp('20%'),
  },
  lineProfile: {
    borderWidth: wp('0.1%'),
    height: hp('68%'),
    marginTop: hp('0%'),
    marginLeft: wp('3%')
  },
  taskTitle: {
    fontFamily: 'MontserratBold',
    textAlign: 'center',
    fontSize: wp("1.5%")
  },
  taskTitle1: {
    fontFamily: 'Montserrat',
    textAlign: 'left',
    fontSize: wp("1.2%")
  },
  taskTitle4: {
    fontFamily: 'Montserrat',
    textAlign: 'left',
    fontSize: wp("1.2%"),
    height: hp('80%'),
  },
  taskText: {
    fontFamily: 'Montserrat',
    textAlign: 'left',
    fontSize: wp("1.2%"),
    marginTop: hp("2%"),
  },
  widthTasks: {
    width: wp('10%'),
    height: hp('10%'),
    fontFamily: 'WorkSans',
  },
  widthTasksUndo: {
    width: wp('12%'),
    height: hp('10%'),
    fontFamily: 'WorkSans',
  },
  widthButtonUndo: {
    width: wp('10%'),
    height: hp('10%'),
    fontFamily: 'WorkSans',
    marginLeft: wp('15%'),
  },
  widthButtonBack: {
    width: wp('10%'),
    height: hp('10%'),
    fontFamily: 'WorkSans',
    marginLeft: wp('0%'),
  },
  nextButtonTasks: {
    width: wp('10%'),
    height: hp('4%'),
    marginLeft: wp('30%'),
    backgroundColor: '#0072c3',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#001d6c',
  },
  butonsPDFTask: {
    width: wp('10%'),
    height: hp('12%'),
    backgroundColor: '#33b1ff',
  },
  buttonsBack: {
    width: wp('7%'),
    height: hp('4%'),
    backgroundColor: '#fe8171',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fe462c',
  },
  buttonsApproved: {
    width: wp('9%'),
    height: hp('4%'),
    backgroundColor: '#0072c3',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#001d6c',
  },
  buttonsApprovedUndo: {
    width: wp('9%'),
    height: hp('4%'),
    backgroundColor: '#0072c3',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#001d6c',
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
      }
    })
  },
  buttonTextSend: {
    width: wp('5%'),
    marginTop: hp('2%'),
    marginLeft: wp('72.4%'),
    backgroundColor: '#808080',
    borderColor: '#808080',
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
        backgroundColor: '#808080',
        borderColor: '#808080',
      },
      default: {
        color: '#fff',
        fontSize: wp('0.8%'),
        textAlign: 'center',
        backgroundColor: '#808080',
        borderColor: '#808080',
      }
    })
  },
  inputFeedBack: {
    ...Platform.select({
      android: {
        height: hp('5%'), // 70% of height device screen
        width: wp('50%'),   // 80% of width device screen
        marginTop: hp('3%'),
        marginLeft: wp('5%'),
        borderWidth: wp('0.2%'),
        borderColor: '#9b9b9b',
        paddingLeft: wp('5%'),
        fontSize: wp('5%'),
      },
      default: {
        height: hp('50%'), // 70% of height device screen
        width: wp('75%'),   // 80% of width device screen
        marginTop: hp('7%'),
        marginLeft: wp('2.5%'),
        borderWidth: wp('0.2%'),
        borderColor: '#9b9b9b',
        paddingLeft: wp('1%'),
        fontSize: wp('1.5%'),
        justifyContent: 'top',
        backgroundColor: '#fff',
      }
    })
  },
  widthTasksButtons: {
    width: wp('12%'),
    height: hp('12%'),
  },
  textHideModal: {
    fontSize: wp('2%'),
    color: '#808080',
  },
  textHeadersTasks: {
    width: wp('13%'),
    height: hp('1%'),
    fontWeight: "bold",
    fontFamily: 'MontserratBoldItalic'
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    padding: 20,
    marginVertical: 8,
    marginRight: 8,
    borderRadius: 10,
    height: hp('70%'),
  },
  infoContainerTaskApprovedTask2:{
    flex: 1,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    paddingTop: hp('5%'),
    marginRight: wp('0%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
    paddingLeft: wp('1%'),
    flexDirection: 'row',
    borderRadius: 10,
  },
  infoContainerAproved: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    paddingTop: hp('5%'),
    marginRight: wp('0%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
    flexDirection: 'row',
    borderRadius: 10,
  },
  infoContainerAprovedTask4: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    paddingTop: hp('5%'),
    marginRight: wp('0%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
    flexDirection: 'row',
    borderRadius: 10,
    height: hp('80%'),
    width: wp('50%'),
  },
  infoContainerButtonsTask2: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    paddingTop: hp('5%'),
    marginRight: wp('0%'),
    marginLeft: wp('23.8%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
    flexDirection: 'row',
    borderRadius: 10,
    width: wp("23%"),
  },
  infoContainerTask: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    padding: 20,
    marginVertical: 8,
    marginRight: 8,
    borderRadius: 10,
  },
  infoContainerTask4: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    padding: 20,
    marginVertical: 8,
    marginRight: 8,
    borderRadius: 10,
    height: hp('80%'),
    width: wp('80%'),
  },
  infoContainerTask2: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#33b1ff",
    padding: 20,
    marginVertical: 5,
    marginRight: 8,
    flexDirection: 'row',
    borderRadius: 10,
    height: hp('6%'),
  },
  infoTask: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#33b1ff",
  },
  circles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalBack: {
    backgroundColor: '#eeeeee',
    width: wp('5%'),
    left: hp('5%'),
    top: hp('3%'),
    justifyContent: 'flex-start'
  },
  checkbox: {
    alignSelf: "stretch",
    height: hp('3%'),
  },
  backgroundModal: {
    backgroundColor: '#eeeeee',
    width: wp('80%'),
    height: hp('80%'),
  },

  backModal: {
    ...Platform.select({
      android: {
        height: hp('5%'), // 70% of height device screen
        width: wp('80%'),   // 80% of width device screen
        flexDirection: "row",
        //justifyContent: 'center',
      }, default: {
        height: hp('5%'), // 70% of height device screen
        width: wp('80%'),   // 80% of width device screen
        flexDirection: "row",
        marginTop: wp('0%'),
        //justifyContent: 'center',
      }
    })
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
    marginTop: hp("3%"),
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

  backProfileDocuments: {
    height: hp("90%"),
    width: wp("100%"),
    marginTop: hp("1%"),
    marginLeft: wp("5%"),
    backgroundColor: "#fffff",
    paddingLeft: wp("0%"),
    paddingTop: hp("1%"),
  },

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

  textViewPDF: {
    ...Platform.select({
      android: {
        color: "#000",
        fontSize: wp("3%"),
        textAlign: "center",
      },
      default: {
        color: "#000",
        fontSize: wp("1.1%"),
        textAlign: "center",
      },
    }),
  },

  textApprovade: {
    ...Platform.select({
      android: {
        color: "#fff",
        fontSize: wp("3%"),
        textAlign: "center",
        fontFamily: 'MontserratBold'
      },
      default: {
        color: "#fff",
        fontSize: wp("1.1%"),
        textAlign: "center",
        fontFamily: 'MontserratBold'
      },
    }),
  },

  backProfileDocumentsSplit: {
    height: hp("20%"),
    width: wp("70%"),
    flexDirection: "row",
    marginLeft: wp("0%"),
    justifyContent: "space-between",
    left: wp("3%"),
    bottom: hp("3%"),
    top: hp("1.5%"),
  },

  backProfile: {
    height: hp("68%"),
    width: wp("30%"),
    marginTop: hp("0%"),
    marginLeft: wp("0%"),
    backgroundColor: "#33b1ff",
    paddingLeft: wp("0.1%"),
    alignContent: "center",
    borderRadius: 10,
  },

  backTasks: {
    height: hp("66%"),
    width: wp("50%"),
    marginTop: hp("0%"),
    marginLeft: wp("2%"),
    backgroundColor: "#ffffff",
    paddingLeft: wp("1%"),
  },

  imgProfileUser: {
    marginLeft: wp("12%"),
    marginTop: hp("7%"),
    height: hp("10%"),
    width: wp("50%"),
    borderRadius: 40,
  },

  imgProfile: {
    height: hp("13%"),
    width: wp("6.3%"),
    borderRadius: 40,
  },

  textNameUserProfile: {
    textAlign: "center",
    marginTop: hp("8%"),
    fontFamily: 'MontserratBoldItalic'
  },

  textDocumentUserProfile: {
    textAlign: "center",
    marginTop: hp("4%"),
    fontFamily: 'WorkSans'
  },

  textIBMUserProfile: {
    textAlign: "center",
    marginTop: hp("2%"),
    fontFamily: 'WorkSans'
  },

  textEmailUserProfile: {
    textAlign: "center",
    marginTop: hp("4%"),
    marginLeft: wp("9%"),
    fontFamily: 'WorkSans'
  },

  textSlackUserProfile: {
    textAlign: "center",
    marginTop: hp("4%"),
    fontFamily: 'WorkSans'
  },

  backProfileEmailSlackSplit: {
    height: hp("10%"),
    width: wp("20%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});

export default PerfilEmpleado;