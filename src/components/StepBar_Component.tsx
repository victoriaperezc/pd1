import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../styles/Styles'

export const StepBar_Component = () => {
    return (
        <View style={Styles.stepBar}>
            <View style={[Styles.stepBox, { backgroundColor: '#1F3159' }]}></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#1F3159' }]}></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#DDE9F1' }]}></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#DDE9F1' }]}></View>
            <View style={Styles.stepLine}></View>
            <View style={[Styles.stepBox, { backgroundColor: '#DDE9F1' }]}></View>
        </View >
    )
}
