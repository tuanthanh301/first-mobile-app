import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface Props {
  text: string;
  categoryfilmIMG: ImageSourcePropType;
}

const IconCategory = (props: Props) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.Logo}
          source={props.categoryfilmIMG}
        />
      </TouchableOpacity>
      <Text style={{color: 'white'}}>
        {props.text}
      </Text>
    </View>

  )
}

export default IconCategory

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: 'rgb(105, 105, 105)',
    justifyContent: 'center',
    alignItems: 'center',

  },
  Logo: {
    width: '80%',
    height: '80%',
  },
})