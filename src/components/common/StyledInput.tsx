import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React from 'react'
// import Images from '../../assests';
interface Props {
  placeholderText?: string;
  customStyle?: StyleProp<ViewStyle>;
  label: string;
  leftIcon: ImageSourcePropType;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
}
const StyledInput = (props: any) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <View>
          <Image source={props.leftIcon} style={{ width: 25, height: 25 }} />
        </View>
        <TextInput
          placeholderTextColor="white"
          style={[styles.textInput, props.customStyle]}
          placeholder={props.placeholderText}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  )
}

export default StyledInput

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    color: 'white'
  },
  textInput: {
    // placeholderTextColor: 'white',
    height: 50,
    backgroundColor: '#1a1a20',
    color: 'white',
    marginBottom: 10,
    marginLeft: -20,
    width: '100%',
    shadowColor: '#1a1a20',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.51,
    elevation: 14,
  },
});