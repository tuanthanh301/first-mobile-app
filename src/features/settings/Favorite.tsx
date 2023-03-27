// import React ,{useState} from 'react';
// import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';

// const Favorite = () => {
//   let animatedValue = new Animated.Value(0);
//   let currentValue = 0;
//   const image1 = "https://lichchieuphim.net/storage/promotions/bhd-star-le-van-viet-xem-phim-trung-thuong-100-qua-hot/thumbnail.jpg"
//   const image2 = 'https://www.bhdstar.vn/wp-content/uploads/2020/01/BHDS-Giftcard-Valentine-1920x1080-WEB.jpg'
//   const [currentImage,setCurrentImage] = useState(image1)
  
//   animatedValue.addListener(({ value }) => {
//     currentValue = value;
//   });

//   const flipImageAnimation = () => {
//     if (currentValue >= 90) {
//       Animated.spring(animatedValue, {
//         toValue: 0,
//         tension: 10,
//         friction: 8,
//         useNativeDriver: false,
//       }).start();
//     } else {
//       Animated.spring(animatedValue, {
//         toValue: 180,
//         tension: 10,
//         friction: 8,
//         useNativeDriver: false,
//       }).start();
//     }
//     setTimeout(()=>{
//     setCurrentImage(currentImage === image1 ? image2 : image1)

//     },300)

//   };

//   const setInterpolate = animatedValue.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['180deg', '360deg'],
//   });

//   const rotateYAnimatedStyle = {
//     transform: [{ rotateY: setInterpolate }],
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Animated.Image
//           source={{
//             uri: currentImage
//           }}
//           style={[rotateYAnimatedStyle, styles.imageStyle]}
//         />
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           onPress={flipImageAnimation}>
//           <Text style={styles.buttonTextStyle}>
//             Flip The Image
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonStyle: {
//     backgroundColor: 'black',
//     padding: 5,
//     marginTop: 32,
//     minWidth: 200,
//   },
//   buttonTextStyle: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//   },
//   imageStyle: {
//     width: 150,
//     height: 150,
//     borderRadius: 6,
//   },
// });

// export default Favorite;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorite = () => {
  return (
    <View>
      <Text>Favorite</Text>
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({})