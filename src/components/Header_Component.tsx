import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../styles/Styles';

interface Props {
    title: string;
}
export const Header_Component: React.FC<Props> = ({ title }) => {

    const profileImage = require("../../assets/dummy-profile.png");

    const navigator = useNavigation();

    const onNotifications = () => {
        // Open notifications
        navigator.dispatch(CommonActions.navigate({ name: 'AffiliatedProfile_Page', }));
    }

    return (

        <View style={Styles.headerBar}>
            <View style={Styles.headerBarLeft}>
                <View>
                    <Text style={Styles.headerText}>{title}</Text>
                </View>
            </View>

            <View style={Styles.headerBarRight}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={Styles.profileImageButton}
                    onPress={onNotifications}>
                    <Image
                        source={profileImage}
                        style={Styles.profileImage} />
                </TouchableOpacity >
            </View>
        </View >
    )
}



