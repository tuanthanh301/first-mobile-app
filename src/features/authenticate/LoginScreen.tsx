import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../assests';
import StyledText from '../../components/base/StyledText';
import SocialLogin from '../../components/common/SocialLogin';
import StyledInput from '../../components/common/StyledInput';
import { loginRequest } from '../../api/authenticate';

const LoginScreen = () => {
    const { navigate } = useNavigation();

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const goToHome = () => {
        if (username.trim() == '' || !username) {
            Alert.alert('Username cannot be left blank!');
        } else if (password.trim() == '' || !password) {
            Alert.alert('Password cannot be left blank!');
        } else {
            login();
        }
    }
    // const goToHome = async() => {
    //    try { 
    //         const response = await loginRequest({username: 'thanvutru18', password: '123456'})
    //         console.log(response.data);
    //     } catch (error) {

    //    }
    // };

    const login = async () => {
        let userData = await AsyncStorage.getItem('userData');
        if (userData) {
            userData = JSON.parse(userData);
            let arr = [...userData];
            arr = arr.filter(
                (value) =>
                    value.username.toLocaleLowerCase() == username.toLocaleLowerCase() &&
                    value.password == password
            );
            if (arr.length > 0) {
                let curUser = arr[0];
                AsyncStorage.setItem('curUser', JSON.stringify(curUser));
                navigate('BottomTab', { useName: 'gotoHome' });
            } else Alert.alert('Incorrect username or password!');
        } else {
            Alert.alert('Incorrect username or password!');
        }
    };

    const goToSignUpScreen = () => {
        navigate('SignUpScreen', { useName: 'Nguyen Tuan Thanh' });
    };
    const goToProfile = () => {
        navigate('Profile', { useName: 'Nguyen Tuan Thanh' });
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>DC Cinema</Text>
                <Text style={styles.welcomeText}>Welcome back</Text>
                <Text style={styles.loginText}>Login to your account</Text>
                {/* <StyledText
                    text= "Nguyễn Tuấn Thànn"
                    customStyle={{color: 'red'}}
                /> */}
            </View>
            <View style={styles.infor}>
                <StyledInput
                    onChangeText={setUsername}
                    label="Username"
                    placeholderText="Enter your username"
                    customStyle={{ borderRadius: 25, paddingLeft: 25 }}
                // leftIcon={Images.icons.loginScreen.user}
                />

                <StyledInput
                    onChangeText={setPassword}
                    label="Password"
                    placeholderText='Enter your password'
                    secureTextEntry={true}
                    customStyle={{ borderRadius: 25, paddingLeft: 25 }}
                // leftIcon={Images.icons.loginScreen.user}
                />
                <TouchableOpacity
                    onPress={goToHome}
                    style={styles.buttonSignIn}>
                    <Text style={styles.buttonSignInText}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoLogin}>
                <TouchableOpacity onPress={goToProfile}>
                    <SocialLogin
                        content='Continue with Google '
                        source='https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialLogin
                        content='Continue with Facebook'
                        source='https://www.facebook.com/images/fb_icon_325x325.png' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialLogin
                        content='Continue with Twitter'
                        source='https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png' />
                </TouchableOpacity>
            </View>
            <View style={styles.textDontHave}>
                <Text style={{ color: '#a8a8a9df' }}>Don't have an account?</Text>
                <TouchableOpacity onPress={goToSignUpScreen}>
                    <Text style={styles.signUpHere}>Sign up here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c3034df",
        paddingTop: Platform.OS === 'ios' ? 40 : 0,

    },
    title: {
        fontSize: 30,
        color: '#ff6a00',
        fontWeight: 'bold',
        marginBottom: 10
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        height: 150,
    },
    infor: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        height: 265,
    },
    welcomeText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '800',
        marginBottom: 10,
    },
    loginText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300'
    },
    buttonSignIn: {
        flex: 1,
        width: 100,
        backgroundColor: "#1a1a20",
        borderRadius: 20,
        height: 45,
        marginTop: 10,
        marginBottom: Platform.OS === 'ios' ? 20 : 0,
        alignItems: "center",
        justifyContent: "center",

    },
    buttonSignInText: {
        fontSize: 16,
        color: 'white',


    },
    logoLogin: {
        // flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        height: 200,

    },
    textDontHave: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    signUpHere: {
        color: '#ff6a00',
        fontWeight: '600'
    },
});
