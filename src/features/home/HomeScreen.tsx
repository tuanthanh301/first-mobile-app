import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import StyledInput from '../../components/common/StyledInput'
import Images from '../../assests'
import StyledCheckBox from '../../components/base/StyledCheckBox'

const HomeScreen = () => {
  // const [group, setGroup] = useState(['Nam', 'Nu', 'Toi dong y']);
  const [selectedItem, setSelectedItem] = useState('Quyet');
  const handleSelect = (id: string, isCheck: boolean) => {
    setSelectedItem(id);
  };
  const [username, setUsername] = useState('');
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const verifyUserName = () => {
    if (username.length >= 6) {
      return true;
    }
    return false
  }
  const verifyPassword = () => {
    const regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    if (regex.test(password)) {
      return true
    }
    return false
  }
  const verifyConfirmPassword = () => {
    if (confirmPassword == password) {
      return true
    }
    return false
  }
  const verifyEmail = () => {
    let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);
    if (!email) return true;
    if (regex.test(email)) {
      return true
    }
    return false
  }
  const handleSignUp = () => {
    if (verifyUserName() && verifyPassword() && verifyConfirmPassword() && verifyEmail()) {
      Alert.alert('', 'Sign Up Successful', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    else {
      Alert.alert('Sign Up Failed', 'Please re-enter your information', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 40 }}>
        <StyledInput
          label="Username"
          placeholderText="Enter your username"
          customStyle={{ borderRadius: 25, paddingLeft: 25 }}
          // leftIcon={Images.icons.loginScreen.user}
          onChangeText={(text: string) => {
            setUsername(text);
            const isValid = verifyUserName();
            isValid ? setIsValidUserName(true) : setIsValidUserName(false)
          }}
          value={username}
        />
        <Text style={styles.validStyle}>{isValidUserName ? '' : 'Username is invalid!'} </Text>
        <StyledInput
          label="Password"
          placeholderText='Enter your password'
          secureTextEntry={true}
          customStyle={{ borderRadius: 25, paddingLeft: 25 }}
          // leftIcon={Images.icons.loginScreen.user}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          value={password}
        />
        <Text style={styles.validStyle}>{isValidPassword ? '' : 'Password is invalid!'} </Text>
        <StyledInput
          label="Confirm Password"
          placeholderText='Confirm your password'
          secureTextEntry={true}
          customStyle={{ borderRadius: 25, paddingLeft: 25 }}
          // leftIcon={Images.icons.loginScreen.user}
          onChangeText={(text: string) => {
            setConfirmPassword(text);
            const isValid = verifyConfirmPassword();
            isValid ? setIsValidConfirmPassword(true) : setIsValidConfirmPassword(false)
          }}
          value={confirmPassword}
        />
        <Text style={styles.validStyle}>{isValidConfirmPassword ? '' : 'Password must be same'} </Text>
        <StyledInput
          label="Email"
          placeholderText='Example: nnheo@example.com'
          customStyle={{ borderRadius: 25, paddingLeft: 25 }}
          // leftIcon={Images.icons.loginScreen.user}
          onChangeText={(text: string) => {
            setEmail(text);
            const isValid = verifyEmail();
            isValid ? setIsValidEmail(true) : setIsValidEmail(false);
          }}
          value={email}
        />
        <Text style={styles.validStyle}> {isValidEmail ? '' : 'Email is invalid!'}</Text>
        {/* <View>
          <StyledCheckBox
            id={'Toi dong y'}
            title={'Toi dong y'}
            selectedItem={selectedItem}
            onCheck={handleSelect}
          />
        </View> */}
        <TouchableOpacity
          style={styles.buttonSignUp}>
          <Text style={styles.buttonSignUpText} onPress={handleSignUp}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a3e42e0",
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#ff6a00',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
  },
  buttonSignUp: {
    backgroundColor: "#1a1a20",
    alignSelf: 'center',
    borderRadius: 20,
    padding: 9,
    marginTop: 20,
  },
  buttonSignUpText: {
    color: 'white',
    fontSize: 16,
    padding: 8

  },
  validStyle: {
    padding: 10,
    color: '#ff6a00',
  }
})