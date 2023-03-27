import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Tabs from '../../navigation/screens/Tab';
import HomeFilm from '../settings/HomeFilm';
import Trailer from '../settings/Trailer';
import DetailFilm from '../DetailFilm/DetailFilm';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
    //    <HomeFilm />
       <DetailFilm/>
        // <View style={styles.container}>

        //     <View style={styles.tab}>
        //         <Tabs></Tabs>
        //     </View>
        // </View>
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

