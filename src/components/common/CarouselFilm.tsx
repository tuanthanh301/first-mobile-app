// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
// import { useNavigation } from '@react-navigation/native'

// const DATA = [
//     {
//         id: '0',
//         title: 'Phim Hay',
//         imgFilm: '("../../assests/icon/Tom_and_Jerry_The_Movie_Poster.png")',
//     },
//     {
//         id: '1',
//         title: 'Phim KEKE',
//     },
//     {
//         id: '2',
//         title: 'Phim KHEKHE',
//     },
//     {
//         id: '0',
//         title: 'Phim Hay',
//         imgFilm: '("../../assests/icon/Tom_and_Jerry_The_Movie_Poster.png")',
//     },
//     {
//         id: '1',
//         title: 'Phim KEKE',
//     },
//     {
//         id: '2',
//         title: 'Phim KHEKHE',
//     },
// ];

// type ItemProps = {
//     title: string,
//     imgFilm: ImageSourcePropType,
//     navigation: any,
//     item: any,
// };

// function CarouselFilm({ title, navigation, item }: ItemProps) {
//     const { navigate } = useNavigation();
//     const goToDetail = () => {
//         if (navigation) {
//             navigate('DetailFilm', {
//                 item: item,
//             });
//         }
//     };
//     return (
//         <View
//             style={styles.item}
//         // onPress={goToDetailFilm}
//         >
//             <Text style={styles.title}>{title}</Text>
//             <Image
//                 style={styles.tinyLogo}
//                 source={require("../../assests/icon/Tom_and_Jerry_The_Movie_Poster.png")}
//             />
//         </View>
//     )
// }

// export default CarouselFilm;

// const styles = StyleSheet.create({
//     item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         width: 300,
//         height: 400,
//     },
//     title: {
//         fontSize: 32,
//     },
// });
