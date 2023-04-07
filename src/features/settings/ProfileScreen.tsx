import { Image, StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity } from 'react-native'
import StyledInput from '../../components/common/StyledInput'
import React from 'react'
import StyledProfile from '../../components/common/StyledProfile';
import Images from '../../assests';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const { navigate, goBack } = useNavigation();

  const onGoBack = () => {
    navigate('LoginScreen', { useName: 'Out' })
  };

  const goToDetails = () => { };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-U22ONYX-1920x1080.jpg',
        }}
      />
      <View style={styles.line}></View>
      <StyledProfile
        onPress={onGoBack}
        leftIcon={Images.icons.profileScreen.details}
        label='Details'
        rightIcon={Images.icons.profileScreen.arrow}
      />
      <View style={styles.line}></View>
      <StyledProfile
        leftIcon={Images.icons.profileScreen.edit}
        label='Edit / Update'
        rightIcon={Images.icons.profileScreen.arrow}
      />
      <View style={styles.line}></View>
      <StyledProfile
        leftIcon={Images.icons.profileScreen.changePassword}
        label='Change Password'
        rightIcon={Images.icons.profileScreen.arrow}
      />
      <View style={styles.line}></View>
      <StyledProfile
        leftIcon={Images.icons.profileScreen.paymentHistory}
        label='Payment History'
        rightIcon={Images.icons.profileScreen.arrow}
      />
      <View style={styles.line}></View>

      <View style={{ alignItems: 'center' ,marginBottom: 40,marginTop: 30 }}>
        <TouchableOpacity
          onPress={onGoBack}
          style={{ width: 100, height: 40, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 40 }}
        >
          <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>Logout</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === 'ios' ? 50 : 0,

  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  line: {
    width: '100%',
    backgroundColor: 'white',
    height: 0.4,
    marginBottom: 15,
    marginTop: 15
  },
  tinyLogo: {
    width: '100%',
    height: 250,
    marginBottom: 30
  }
})