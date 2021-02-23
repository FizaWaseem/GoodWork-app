import React, { useRef, useState } from 'react';
import { View, ImageBackground, TextInput, Text, Input, StyleSheet, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import { AuthContext } from '../authContext/Context';
import Checkbox from 'expo-checkbox';

const Login = ({ navigation }) => {
    const refRBSheet = useRef();
    const [data, setdata] = useState({
        phoneNumber: "",
        password: "",
        errorNum: "",
        errorPass: "",
        secureTextEntry: true
        // showPassword:true,
    });
    const [isChecked, setChecked] = useState(false);
    const handleInput = (val) => {
        // const name = e.target.name;
        // const value = e.target.value;
        setdata({ ...data, phoneNumber: val, }) //dyamic 

    };
    const handlePassword = (val) => {
        // const name = e.target.name;
        // const value = e.target.value;
        setdata({ ...data, password: val, }) //dyamic 

    };
    const handleData = (phoneNumber, password) => {
        console.log(password, phoneNumber);

       
        if ((password && phoneNumber) == "") {
            setdata({ errorPass: "Password required!" ,errorNum: "Phone Number required!"})
        }
        signIn(phoneNumber, password);
      
    }
 
    const { signIn } = React.useContext(AuthContext);
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            {/* <ScrollView> */}
            <View style={styles.container}>
                <View style={styles.ImageDiv}>
                    <Image source={require('../assets/GetWork.png')} style={styles.Image} />
                </View>
                <Text >
                    <Text style={styles.get}>GET</Text><Text style={styles.work}>WORK</Text>
                </Text>
                <Text style={styles.title}>
                    Welcome Back to
            </Text>
                <Text style={styles.Logintitle}>
                    Login!
            </Text>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.inputWrapper}>
                        <View style={styles.input}>
                            <TextInput
                                label="Phone Number"
                                labelStyle={styles.labelStyle}
                                autoCapitalize="none"
                                keyboardType="phone-pad"
                                placeholder="Phone Number"
                                onChangeText={(val) => handleInput(val)}
                            />

                        </View>
                        <View>
                            {data.phoneNumber != "" ? <Text style={{ color: 'red' }}>{data.errorNum}</Text> : null}
                        </View>
                        <View style={styles.input}>

                            <TextInput
                                label="Password"
                                labelStyle={styles.labelStyle}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                placeholder="Password"
                                onChangeText={(val) => handlePassword(val)}
                                
                            />

                        </View>
                        <View>
                            {data.password != "" ? <Text style={{ color: 'red' }}>{data.errorPass}</Text> : null}
                        </View>
                        <View>
                            <Text style={styles.fp}

                                onPress={() => navigation.navigate('ForgetPassword')}>ForgetPassword</Text>
                        </View>

                        <View style={styles.unregister}>
                            <LinearGradient colors={['#0dd9fa', '#006ade']}
                                start={{ x: 0, y: 1 }} end={{ x: 1, y: 0.2 }}
                                style={styles.tn} >
                                <Text style={styles.text}  >
                                    Unregistered
                              </Text>
                            </LinearGradient>
                        </View>

                        <View  >
                        <TouchableOpacity onPress={() => { handleData(data.phoneNumber, data.password) }}>
                            <LinearGradient colors={['#0dd9fa', '#006ade']}
                                start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                                style={styles.btn} >
                               

                                    <Text style={styles.text} >
                                        SignIn
                            </Text>
                                
                            </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signup}>
                            <Text style={styles.signupStyle} onPress={() => refRBSheet.current.open()} >
                                Signup
                              </Text>
                        </View>
                    </View>
                </ScrollView>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    animationType="slide"
                    height={600}
                    openDuration={50}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "rgba(0,0,0,0.2)",

                        },
                        draggableIcon: {
                            backgroundColor: '#0dd9fa'
                        }
                    }}
                >
                    <ImageBackground style={styles.back} source={require("../assets/b.png")}>
                        <View style={styles.Reg}>
                            <LinearGradient colors={['#0dd9fa', '#006ade']}
                                start={{ x: 0, y: 1 }} end={{ x: 1, y: 0.2 }}
                                style={styles.tn} >
                                <Text style={styles.text}  >
                                    Registeration
                              </Text>
                            </LinearGradient>
                        </View>
                        <View style={styles.registerWrapper}>
                            <View style={styles.Reginput}>
                                <TextInput
                                    label="First name"
                                    labelStyle={styles.labelstyles}
                                    placeholder="First name"
                                    autoCapitalize="none"
                                />

                            </View>
                            <View style={styles.Reginput}>
                                <TextInput
                                    label="Last name"
                                    labelStyle={styles.labelstyles}
                                    placeholder="Last name"
                                    autoCapitalize="none"
                                />

                            </View>
                            <View style={styles.Reginput}>
                                <TextInput
                                    label="Email"
                                    labelStyle={styles.labelstyles}
                                    placeholder="Email"
                                    autoCapitalize="none"
                                />

                            </View>
                            <View style={styles.Reginput}>
                                <TextInput
                                    label="Phone number"
                                    labelStyle={styles.labelstyles}
                                    placeholder="Phone number"
                                    autoCapitalize="none"
                                    keyboardType="number-pad"
                                />

                            </View>
                            <View style={styles.Reginput}>

                                <TextInput
                                    label="Password"
                                    labelStyle={styles.labelstyles}
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                />
                            </View>
                            <View style={styles.Reginput}>

                                <TextInput
                                    label="Confirm Password"
                                    labelStyle={styles.labelstyles}
                                    placeholder="Confirm Password"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                />
                            </View>
                            <View style={styles.Reginput}>

                                <TextInput
                                    label="Member Code"
                                    labelStyle={styles.labelstyles}
                                    placeholder="Member Code"
                                    keyboardType="number-pad"
                                    autoCapitalize="none"
                                    
                                />
                            </View>

                            <View style={styles.textdiv}>
                                <Text style={styles.ttext}>I am over the age of 18 and agree to the</Text>
                                <Text ><Text style={styles.termstext}>Terms of Use and Privacy </Text>
                                <Text> <Checkbox style={{width:5,height:5}} color={isChecked ? '#006ade' : undefined} value={isChecked} onValueChange={setChecked} />
</Text>
                                </Text>
                                

                            </View>

                            <View style={styles.unregister}>
                                <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                                    <LinearGradient colors={['#0dd9fa', '#006ade']}

                                        start={{ x: 0, y: 1 }} end={{ x: 1, y: 0.2 }}
                                        style={styles.tn} >


                                        <Text style={styles.text}>
                                            Next
          </Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </RBSheet>

            </View>
            {/* </ScrollView> */}
        </TouchableWithoutFeedback>


    );
}
var styles = StyleSheet.create({
    container: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
        padding: 30,
        backgroundColor: '#fff'
    },
    back: {
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
        fontFamily: "Lato-Bold",
        fontSize: 16,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        fontWeight: 'bold',
        // fontWeight:600,
        marginBottom: 20,
        lineHeight: 20,
    },
    work: {
        color: "black",
        fontFamily: "Lato-Light",
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 28,
    },
    title: {
        marginTop: 20,
        color: "black",
        fontFamily: "ebrima-normal",
        fontSize: 29,
    },
    Logintitle: {
        color: "black",
        fontFamily: "ebrima-normal",
        lineHeight: 49,
        fontSize: 40,
    },

    fp: {
        color: "#aeb0b3",
        fontFamily: "ebrima-normal",
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
    labelStyle: {
        color: "#aeb0b3",
        fontFamily: "ebrima-normal",
        fontSize: 14,
        opacity: 1,

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
        position: "relative"
    },
    text: {
        color: "#fff",
        padding: 10,
        textAlign: "center",
        fontFamily: "ebrima-normal",
        fontSize: 18,


    }, btn: {
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
        width: "100%",
        height: 45,

    },
    // ==========BottomSheet=================
    Reginput: {
        height: 40,
        marginTop: 20,
        paddingBottom: 5,
        paddingTop: 5,
        color: "#464749",
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
    },
    labelstyles: {
        color: "#464749",
        fontFamily: "ebrima-normal",
        fontSize: 14,
        opacity: 1,

    },
    Reg: {
        marginTop: -45,
        justifyContent: "center",
        alignItems: "center",

    },
    registerWrapper: {
        paddingLeft: 40,
        paddingRight: 40,
    },

    signup: {
        marginTop: 130,
        fontSize: 22,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    signupStyle: {
        color: "#aeb0b3",
        fontFamily: "ebrima-normal",
        fontSize: 18,
        opacity: 1,

    },
    textdiv: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    ttext: {
        color: "#464749",
        fontSize: 12,

    },
    termstext: {
        color: "#464749",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        fontSize: 14,
        
    },
    checkbox:{
        margin: 0,
        color:"red"
    }

});


export default Login
