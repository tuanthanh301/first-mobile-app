import React from 'react'
import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import StyledInput from './StyledInput';



interface Props {
  leftIcon: ImageSourcePropType;
  customStyle?: StyleProp<ViewStyle>;
  label: string;
  rightIcon: ImageSourcePropType;
  borderBottom: boolean;
}
const StyledProfile = (props: any) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{marginLeft: 20}}>
          <Image source={props.leftIcon} style={{ width: 25, height: 25 }} />
        </View>
        <TextInput />
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.arrow}>
          <Image source={props.rightIcon} style={{ width: 16, height: 16 }} />
        </View>
      </View>
    </View>

  )
}

export default StyledProfile

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  arrow: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center'
  }
});