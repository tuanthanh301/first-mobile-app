import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import StyledInput from './StyledInput'
import Images from '../../assests';

const Search = () => {
    const [keySearch, setKeySearch] = useState('');
    return (
        <View style={styles.container}>
            <StyledInput
                onChangeText={setKeySearch}
                placeholderText='Search'
                customStyle={styles.styleSearch}
            />

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 30 : 0,

    },
    styleSearch: {
        width: '93%',
        borderRadius: 25,
        paddingLeft: 25,
        backgroundColor: (`#696969`),

    },
})