import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         KeyboardAvoidingView, 
         TouchableOpacity, 
         ImageBackground, 
         TextInput, 
         TouchableWithoutFeedback, 
         Keyboard, 
         Platform } from 'react-native';
import {auth} from '../config/firebase'

const LoginScreen = ({navigation}) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: ''
  })
// Initiates the sign-in process when the user provides correct email and password information.
// Sets up a reference to capture any error messages for display on the screen.
  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are required to Login.'
      })
      return;
    }
    try {
      await auth.signInWithEmailAndPassword(value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        keyboardVerticalOffset={-500}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.safeView}>
              <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Twinsie</Text>
              </View>
              <View style={styles.bodyTextContainer}>
                <Text style={styles.bodyText}>
                  Welcome to Twinsie, where connection is key! At Twinsie, We believe in the power of communication and the joy of shared experiences. 
                  {"\n"}
                  {"\n"}
                  Join us as we embark on a journey of seamless communication and vibrant interactions with those who matter most to you.
                </Text>
              </View>
              {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
              <View style={styles.loginContainer}>
                <TextInput style={styles.logInput} 
                           placeholder="Email"
                           onChangeText={(text) => setValue({...value, email: text})}
                           defaultValue={value.email}
                />
                <TextInput style={styles.logInput} 
                           placeholder="Password"
                           secureTextEntry={true}
                           onChangeText={(text) => setValue({...value, password: text})}
                           defaultValue={value.password}
                />
                <TouchableOpacity style={styles.login} onPress={signIn}>
                  <Text style={styles.loginText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                  <View>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                      <Text style={styles.signupText}>Press here to Sign Up with us!</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </View>    
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  safeView:{
    flex:1
  },
  welcomeTextContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingLeft:"10%",
    paddingRight:"10%"
  },
  welcomeText: {
    fontSize: 70,
    fontWeight:"bold",
    textShadowColor:'#FEC868',
    textShadowOffset:{width:0,height:0},
    textShadowRadius:10
  },
  bodyTextContainer: {
    paddingTop:20,
    paddingBottom: "10%",
    paddingLeft:"10%",
    paddingRight:"10%"
  },
  bodyText: {
    fontSize:19,
    fontWeight:'bold',
    color:'#FFFBAC',
    textShadowColor:'black',
    textShadowOffset:{width:0,height:0},
    textShadowRadius:20
  },
  loginContainer: {
    paddingTop: "10%",
    justifyContent: 'flex-end',
  },
  logInput: {
    borderWidth:3,
    borderRadius:17,
    borderColor:"black",
    width:"90%",
    height: 60,
    marginLeft:"5%",
    marginRight:"5%",
    marginBottom: 20,
    paddingLeft:"10%",
    paddingRight:"10%",
    textAlign:"center",
    fontSize: 18,
    backgroundColor:"white"
  },
  signupContainer: {
    width:"90%",
    paddingLeft:"5%",
    paddingBottom:"5%",
    alignItems:'center'
  },
  signupText: {
    fontWeight:'bold',
    fontSize: 15,
    color:'#2196F3',
    textShadowColor:'black',
    textShadowOffset:{width:1,height:1},
    textShadowRadius:1,
    paddingLeft:15
  },  
  login: {
    width: "90%",
    height: 70,
    borderRadius: 35,
    marginLeft:"5%",
    marginBottom: 10,
    backgroundColor: "black",
    alignContent:"center",
    justifyContent:"center"
  },
  loginText: {
    textAlign:"center",
    color:"white",
    fontWeight:"bold",
    fontSize:28
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});
export default LoginScreen