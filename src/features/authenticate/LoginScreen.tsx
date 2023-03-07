import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../assests';
import StyledText from '../../components/base/StyledText';
import SocialLogin from '../../components/common/SocialLogin';
import StyledInput from '../../components/common/StyledInput';

const LoginScreen = () => {
    const { navigate } = useNavigation();

    const goToHome = () => {
        navigate('HomeScreen', { useName: 'Nguyen Tuan Thanh' });
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
                    label="Username"
                    placeholderText="Enter your username"
                    customStyle={{ borderRadius: 25, paddingLeft: 25 }}
                // leftIcon={Images.icons.loginScreen.user}
                />

                <StyledInput
                    label="Password"
                    placeholderText='Enter your password'
                    secureTextEntry={true}
                    customStyle={{ borderRadius: 25, paddingLeft: 25 }}
                // leftIcon={Images.icons.loginScreen.user}
                />
                <TouchableOpacity
                    onPress={() => console.log('Sign in')}
                    style={styles.buttonSignIn}>
                    <Text style={styles.buttonSignInText}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logoLogin}>
                <TouchableOpacity>
                    <SocialLogin source='https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialLogin source='https://www.facebook.com/images/fb_icon_325x325.png' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialLogin source='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' />
                </TouchableOpacity>
            </View>
            <View style={styles.textDontHave}>
                <Text style={{ color: '#a8a8a9df' }}>Don't have an account?</Text>
                <TouchableOpacity onPress={goToHome}>
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
        backgroundColor: "#1a1a20",
        borderRadius: 20,
        width: 100,
        height: 45,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        
    },
    buttonSignInText: {
        fontSize: 16,
        color: 'white',
    },
    logoLogin: {
        // flexDirection: 'row',
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
    }
});
