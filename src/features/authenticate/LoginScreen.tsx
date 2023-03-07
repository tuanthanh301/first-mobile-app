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
            <View style={
                styles.header}>
                <Text style={styles.title}>DC Cinema</Text>
                <Text style={styles.welcomeText}>Welcome back</Text>
                <Text style={styles.loginText}>Login to your account</Text>
                {/* <StyledText
                    text= "Nguyễn Tuấn Thànn"
                    customStyle={{color: 'red'}}
                /> */}
            </View>
            <View style={{ flex: 1, paddingHorizontal: 40 }}>
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
            {/* <View style={styles.orSignInText}>
                <Text style={{color: '#a8a8a9df'}}>Or sign in with</Text>
            </View> */}
            <View style={styles.logoLogin}>
                <TouchableOpacity>
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
                        source='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' />
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
        flex: 1
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
        alignSelf: 'center',
        borderRadius: 20,
        padding: 3 ,
        marginTop: 20,
    },
    buttonSignInText: {
        color: 'white',
        fontSize: 16,
        padding: 8,
        alignSelf: 'center',

    },
    orSignInText: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,
    },
    logoLogin: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,

    },
    textDontHave: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    signUpHere: {
        color: '#ff6a00',
        fontWeight: '600'
    }
});
