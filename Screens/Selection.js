import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import * as Animatable from 'react-native-animatable';
function Selection({ navigation }) {
    const refRBSheet = useRef();
    return (
        // <View style={styles.container}>
          <ImageBackground style={styles.container} source={require("../assets/b.png")}>
            <LinearGradient colors={['#0dd9fa', '#006ade']}
                start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                style={styles.header} >
                <View style={styles.head} >

                    <View style={styles.headdiv}  >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image style={styles.im2} source={require('../assets/chev.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.div}  >

                        <Text style={styles.logo}>
                            <Text style={styles.logotext}>My Selection</Text>
                        </Text>
                    </View>

                </View>

            </LinearGradient>
            <View style={styles.footer}>
                <View style={{ flex: 1 }}>
                    <View style={styles.unregister}>
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: 0, y: 1 }} end={{ x: 1, y: 0.2 }}
                            style={styles.tn} >
                            <Text style={styles.btntext}  >
                                Painter
                              </Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={{ flex: 6 }}>

                    <Text style={styles.qtext}>
                        What are your prices.
                            </Text>
                </View>

            </View>
            <View style={{
                flex: 1, justifyContent: "center", marginTop: 15,
                alignItems: "center",
            }}>
                <LinearGradient colors={['#0dd9fa', '#006ade']}
                    start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                    style={styles.btn} >
                    <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                        <Text style={styles.text}>
                            Finish
                            </Text>
                    </TouchableOpacity>
                </LinearGradient>

            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType="slide"
                height={600}
                openDuration={300}
                closeDuration={200}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.2)",


                    },
                    container: {
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        height: "85%",
                        backgroundColor: "#0dc6fa,#0078de",
                    },
                    draggableIcon: {
                        closeOnDragDown: true,
                        height: -10,
                        width: 0,
                    }
                }}
            >
                <LinearGradient colors={['#0dd9fa', '#006ade']}
                    start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                    style={styles.back} >
                    <View style={styles.profileImage}>
                
                        <Image source={require('../assets/log1.png')} style={styles.GetWork} />
                      
                    </View>
                    <View style={styles.successfulText}>
                        <Text  style={styles.successfulText3}>Welcome to <Text style={styles.successfulText1}>GETWORK!</Text></Text>
                        <Text style={styles.successfulText2}>we have taken your registration into
account, be ready to receive job alerts
as soon as possible</Text>
                    </View>
                    <View style={styles.tickImage}>
                        <Animatable.Image animation="pulse" easing="ease-out"  iterationCount="infinite" source={require('../assets/tick.png')} style={styles.tick} />
                    </View>
                    <View style={styles.bottom}>
                    
                    <View style={styles.donebtn}>
                    <TouchableOpacity onPress={() => navigation.navigate('ShareMoney')} style={styles.donebtn}>
                        <Text style={styles.done}>
                           Done
                            </Text>
                            </TouchableOpacity>
                    </View>
                   
                    </View>
                </LinearGradient>
            </RBSheet>
            </ImageBackground>
       //  </View> 

    )
};

export default Selection;
var styles = StyleSheet.create({

    container: {
        // backgroundColor: 'white',
        flex: 1,
    },

    header: {
        marginBottom: 5,
        backgroundColor: '#006ADE',
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height - Dimensions.get('window').height / 1.15,
    },
    head: {
        marginBottom: 5,
        width: "100%",
        flexDirection: "row",
    },

    footer: {
        flex: 5,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        alignItems: "center",

    },

    image1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    logo: {
        position: "absolute",
        left: 40,
        top: 15,
    },
    logotext: {
        color: "white",
        fontFamily: "Ebrima",
        fontSize: 16,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        // fontWeight:600,
        marginBottom: 20,
        lineHeight: 22,
    },

    div: {
        marginTop: 35,
        width: 140,
        height: 40,

        alignItems: "center",
    },
    headdiv: {
        marginTop: 35,
        width: 100,
        height: 20,

        alignItems: "center",
    }, im2: {
        marginTop: 15,
        width: 12,
        height: 16,
        //    height:20,
        //     width: 20,
    },
    imv: {
        marginTop: 10,
        width: 30,
        height: 30,
        // width: "45%",
    },
    Image: {
        marginTop: 15,
        marginRight: 40,
        width: 22,
        height: 15,

    },
    unregister: {
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    tn: {
        marginTop: 20,
        marginBottom: 5,

        // borderRadius: 25,
        // height: 35,
        // width:200,
        width: 174,
        height: 31,
        borderRadius: 15,

        // paddingLeft:15,
        // paddingRight:15,
        paddingTop: 5,
        paddingBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    },
    btntext: {
        color: "#fff",
        padding: 0,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 14,

    },
    btn: {
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
        // width: "100%",
        // height: 45,

        width: 278,
        height: 39,

    },

    text: {
        color: "#fff",
        padding: 7,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 16,


    },
    qtext: {
        color: "black",
        padding: 7,
        textAlign: "left",
        fontFamily: "Ebrima",
        fontSize: 18,


    },
    //-======================= Bottom-sheet
    back: {
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    profileImage: {
        marginTop: 20,
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    GetWork: {
        height: 90,
        width: 80,
        shadowColor: "red",
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 0.5
    },
    successfulText: {
        flex: 1,
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:4,
        paddingLeft:25,
        paddingRight:25,
    },
    successfulText3: {
        color: "#fff",
       
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 16,
    },
    successfulText1: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 18,
        fontWeight:'bold'
    },
    successfulText2: {
        color: "#fff",
        padding: 10,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 15,
    },
    tickImage: {
        marginTop: -10,
        marginBottom:30,
        // backgroundColor:"red",
        flex: 2,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 147,
height: 147,
    },
   tick: {
    width: 147,
    height: 147,
        shadowColor: "red",
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 0.5
    },
  bottom:{
    flex:1,
  },
    donebtn:{
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
borderBottomLeftRadius: 0,
borderBottomRightRadius: 30,
backgroundColor:"#ffff",
width: 261,
height: 45,


// width: 278,
// height: 39,
    },
    done:{
        color: "#0055a3",
        padding: 10,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 16,

    },

});
