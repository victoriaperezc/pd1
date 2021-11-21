import React from 'react'
import { Image, Text, View } from 'react-native'
import { Styles } from '../styles/Styles'

export const ProfileCard_Component = () => {

    const profileImage = require("../../assets/dummy-profile.png");
    return (
        <View style={Styles.profileCard}>
            <Image
                source={profileImage}
                style={Styles.profileCardImage}>
            </Image>
            <Text style={Styles.profileCardText}>Juan David Pérez Almeyda</Text>

            <Text style={Styles.profileCardText}>C.C. 79.540.234</Text>

            <Text style={Styles.profileCardText}>juan.perez@ibm.com</Text>
        </View>
    )
}
