import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Tabs from '../../navigation/screens/Tab';


const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>ádkahsdk</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
})