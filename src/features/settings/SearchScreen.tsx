import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { film } from '../../assests/data/Film';
import FilmItems from '../../components/common/FilmItems';


const SearchScreen = () => {
    const [textSearch, settextSearch] = useState("");
    const categories = [
        "Avengers: End Game",
        "John Wick Chapter 3",
        "Evil Dead Rise",
        "Tom and Jerry: Cowboy Up!",
        "Indiana Jones and the Dial of Destiny",
    ];
    const renderResult = () => {
        const data = film.filter((value) =>
            value.title.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
        );

        const renderItem = ({ item }) => {
            return (
                <FilmItems item={item} />
            )
        }

        return (
            <View style={{ flex: 1, flexDirection: "column", width: '100%' }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 15, paddingLeft: 28, color: 'white' }}>
                    KẾT QUẢ
                </Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                    style={{marginLeft: 30}}
                />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={settextSearch}
                value={textSearch}
                underlineColorAndroid="transparent"
                placeholder="Search....."
                placeholderTextColor='white'
            />
            {textSearch.trim().length > 0 ? (
                renderResult()
            ) : (
                <>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20, marginTop: 10, color: 'white',paddingLeft: 25 }}>
                            GỢI Ý
                        </Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", paddingLeft: 20 }}>
                            {categories.map((value, item) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        settextSearch(value);
                                    }}
                                    style={{
                                        backgroundColor: "orange",
                                        paddingHorizontal: 12,
                                        paddingVertical: 8,
                                        marginRight: 12,
                                        marginBottom: 12,
                                        borderRadius: 100,
                                    }}
                                    key={item}
                                >
                                    <Text style={{color: 'white',fontWeight: 'bold'}}>{value}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                </>
            )}
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3034df',
        alignItems: 'center',
    },
    textInputStyle: {
        marginTop: 30,
        width: '90%',
        height: 45,
        borderRadius: 25,
        paddingLeft: 25,
        borderWidth: 1,
        backgroundColor: (`#696969`),
        color: 'white',
    },
})