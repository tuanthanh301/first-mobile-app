import { StyleProp, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React from 'react'

interface Props extends TextProps{
  text: string;
  customStyle: StyleProp<TextStyle>

}
const StyledText = (props: Props) => {
  return (
    <View>
      <Text style={props.customStyle}>{props.text}</Text>
    </View>
  )
}

export default StyledText

const styles = StyleSheet.create({
  
})