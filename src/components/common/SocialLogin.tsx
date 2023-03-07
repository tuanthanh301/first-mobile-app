import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  source: string;
}
const SocialLogin = (props: Props) => {
  return (
    <View style={{
      height: 50,
      width: "80%",
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      marginHorizontal: 30,
      borderRadius: 30,
      backgroundColor: '#1a1a20',
      shadowColor: "#1a1a20",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      marginTop: 10,
      elevation: 12,
    }}>
      <Text style={styles.continueText}>Continue with     </Text>
      <Image source={{ uri: props.source }}
        style={{ width: 30, height: 30}}
      />
      
      {/* <Image onPress={() => console.log('Sign in')} title="Sign in" /> */}

    </View>
  )
}

export default SocialLogin

const styles = StyleSheet.create({
  continueText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }
})