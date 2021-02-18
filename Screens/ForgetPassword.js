import React,{useState} from 'react';
import { View,  TextInput, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ForgetPassword = ({navigation}) => {
    const [data, setdata] = useState({
       email: "",
        password: "",
        // showPassword:true,
    });
    const handleInput = () => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({ ...data, [name]: value }) //dyamic 
    }

    return (
       
        <ImageBackground style={styles.back} source={require("../assets/b.png")}>
        <View style={styles.container}>
        <View style={styles.ImageDiv}>
            <Image source={require('../assets/GetWork.png')} style={styles.Image} />
        </View>
        <Text>
            <Text style={styles.get}>GET</Text><Text style={styles.work}>WORK</Text>
        </Text><Text style={styles.title}>
           Forget 
        </Text>
        <Text style={styles.Logintitle}>
            Password?
        </Text>
         <ScrollView style={{ flex: 1 }}>
                <View style={styles.inputWrapper}>
                    <View style={styles.input}>
                        <TextInput
                            label="Email"
                            labelStyle={styles.labelStyle}
                            placeholder="Email"
                            name='Email'
                            // value={data.phoneNumber}
                            // onChangeText={handleInput}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={this.state.errorfName != "" ? this.state.errorfName:""}

                        />

                    </View>

                    <View style={styles.input}>

                        <TextInput
                            label="Password"
                            labelStyle={styles.labelStyle}
                            placeholder="Password"
                            name='password'
                            // value={data.password}
                            // onChangeText={handleInput}
                        // secureTextEntry={showPassword}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={errorPassword != "" ?  errorPassword :""}
                        // rightIcon={
                        //     <TouchableOpacity onPress={() => this.setState({showPassword:!showPassword})} >
                        //         <Image source={require('../assets/eye.png')} style={{ height: 13, width: 26 }} />
                        //     </TouchableOpacity>}

                        />
                    </View>
                   

                    <View  >
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                            style={styles.btn} >
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.text}>
                                Next
                            </Text>
                            </TouchableOpacity>
                         
                        </LinearGradient>
                    </View>
                    </View>
                </ScrollView> 
                </View>
                </ImageBackground>
       
       
       );
    }

export default ForgetPassword;
var styles = StyleSheet.create({
    container: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
        padding: 30,
        // backgroundColor: '#fff'
    },    back: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
        // padding: 30,
        // backgroundColor: '#fff'
    },
    ImageDiv: {
        marginTop: 30,
        width: '36%',
        height: '10%',

    },
    Image: {
        resizeMode: "cover",
        width: '56%',
        height: '92%',

    }, get: {
        color: "black",
        fontFamily: "Ebrima",
        fontSize: 16,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        // fontWeight:600,
        marginBottom: 20,
        lineHeight: 20,
    },
    work: {
        color: "black",
        fontFamily: "Ebrima",
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 20,
    },
    title: {
        marginTop: 20,
        color: "black",
        fontFamily: "Ebrima",
        fontSize: 29,
    },
    Logintitle: {
        color: "black",
        fontFamily: "Ebrima",
        lineHeight: 49,
        fontSize: 40,
    },
    labelStyle: {
        color: "#aeb0b3",
        fontFamily: "Ebrima",
        fontSize: 14,
        opacity: 1,

    },
    fp: {
        color: "#aeb0b3",
        fontFamily: "Ebrima",
        fontSize: 12,
        opacity: 1,

    },
    input: {
        height: 40,
        marginTop: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
    },
    inputWrapper: {
        marginTop: 20,

    },
  
    unregister: {
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',


    },
    tn: {
        marginTop: 20,
        borderRadius: 10,
        width: 158,
        height: 47,
        position:"relative"
    },
    btn: {
        marginTop: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
        width: "100%",
        height: 45,

    },
    text: {
        color: "#fff",
        padding: 10,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 18,

    },
});
