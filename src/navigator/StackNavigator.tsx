import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPagina } from '../pages/Login_Page';
import PantallaRegistro from '../components/PantallaRegistro';
import { AffiliatedProfile_Page } from '../pages/AffiliatedProfile_Page';
import TerminoFijo from '../components/TerminoFijo';
import TerminoIndefinido from '../components/TerminoIndefinido';
import PerfilFEL from '../components/PerfilFEL';
import PerfilDevolucion from '../components/PerfilDevolucion';
import PerfilFirma from '../components/PerfilFirma';
import PerfilDeceval from '../components/PerfinDeceval';
import PerfilEmpleado from '../pages/PerfilEmpleadoPagina';
import DocumentosEmpleadoPagina from '../pages/DocumentosEmpleadoPagina';
import ListaAplicantesPagina from '../pages/ListaAplicantesPagina';
import { AffiliatonForm_Page } from '../pages/AffiliationForm_Page';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true, //dev
        cardStyle: {
          backgroundColor: '#ffffff'
        }
      }}>

      <Stack.Screen name="LoginPage" component={LoginPagina} />
      <Stack.Screen name="AffiliatedProfile_Page" component={AffiliatedProfile_Page} />
      <Stack.Screen name="Registro" component={PantallaRegistro} />
      <Stack.Screen name="TerminoFijo" component={TerminoFijo} />
      <Stack.Screen name="TerminoIndefinido" component={TerminoIndefinido} />
      <Stack.Screen name="PerfilAfiliado" component={AffiliatedProfile_Page} />
      <Stack.Screen name="PerfilF" component={PerfilFEL} />
      <Stack.Screen name="PerfilDevolucion" component={PerfilDevolucion} />
      <Stack.Screen name="PerfilFirma" component={PerfilFirma} />
      <Stack.Screen name="PerfilDeceval" component={PerfilDeceval} />
      <Stack.Screen name="AffiliatonForm_Page" component={AffiliatonForm_Page} />
      <Stack.Screen name="ListaSolicitantes" component={ListaAplicantesPagina} />
      <Stack.Screen name="PerfilEmpleado" component={PerfilEmpleado} />
      <Stack.Screen name="DocumentosEmpleado" component={DocumentosEmpleadoPagina} />


    </Stack.Navigator>
  );
}