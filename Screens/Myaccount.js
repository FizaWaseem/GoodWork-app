import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import NavigationList from '../component/NavigationList';
import { Icon } from 'react-native-elements';

function Myaccount({ navigation }) {
    const [data, setdata] = useState({
        phoneNumber: "",
        password: "",
        secureTextEntry: true
        // showPassword:true,
    });
    const handleInput = () => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({ ...data, [name]: value }) //dyamic 
    }
    return (
        // <View style={styles.container}>
       <ImageBackground style={styles.container} source={require("../assets/b.png")}>
            <LinearGradient colors={['#0dd9fa', '#006ade']}
                start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }} style={styles.header} >
                <View style={styles.head} >

                    <View style={styles.headdiv}  >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <View >
                                <Icon name='menu' size={30} color="white" />

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.div}  >

                        <Text style={styles.logo}>
                            My Account
                        </Text>
                    </View>
                    <View style={styles.headdiv}  >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Icon name='chevron-left' size={30} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>

            </LinearGradient>



            <View style={styles.footer}>

                {/* <View style={{flex:1}}></View> */}
                <View style={{ flex: 1 }}>
                    <View style={styles.person}>
                        <Image source={require("../assets/camera.png")} style={{
                            marginTop: 5, width: 137,
                            height: 137,
                        }} />

                    </View>
                </View>
                <View style={{ flex: 2, alignItems: "center", }}>
                    <View style={styles.ridesFriends}>
                        <View style={styles.numbers}>
                            <Image style={styles.img} source={require("../assets/wallet.png")} />
                        </View>
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }} style={styles.verticleLine} >
                        </LinearGradient>
                        <View style={styles.numbers}>
                            <Image style={styles.img} source={require("../assets/credit.png")} />
                        </View>

                    </View>


                </View>
                <View style={{ flex: 1.5, alignItems: "center", }}>
                    
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                            style={styles.earn} >
                            <TouchableOpacity onPress={() => navigation.navigate('share')} >
                            <Text style={styles.earnText} >Withdrawal</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                   
                    <View style={{paddingLeft:30,paddingRight:30}}>
                    <Text style={styles.bottomtext}>The withdrawal with only be made
from 500 euro</Text></View>
                </View>
                <View style={{ flex: 1 }}>
                    <LinearGradient colors={['#0dd9fa', '#006ade']}
                        start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                        style={styles.btn} >
                        <TouchableOpacity onPress={() => navigation.navigate('Contactus')}>
                            <Text style={styles.btntext}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </View>
            </ImageBackground>
        // </View>

    )
};

export default Myaccount;

var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',

    }, img: {
        textAlign: "center",
        width:100,
        height:100,

        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    ridesFriends: {
        paddingTop: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },
    numbers: {
        fontSize: 30,
        color: '#31C283',
        width: "48%",

        fontWeight: 'bold',
    },
    verticleLine: {
        height: 190,
        width: "2%",
        borderRadius: 10,
        backgroundColor: '#909090',
    },
    header: {
        marginBottom: 5,
        backgroundColor: '#ffff',
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height - Dimensions.get('window').height / 1.15,
    },
    head: {
        marginBottom: 5,
        width: "100%",
        flexDirection: "row",
    },
    div: {
        marginTop: 35,
        width: "65%",
        height: 40,

        alignItems: "center",
    },
    headdiv: {
        marginTop: 40,
        width: "16%",
        height: 20,
        alignItems: "center",
    },
    footer: {
        flex: 2,
        paddingLeft: 0,
        paddingRight: 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    person: {
        marginTop: 5,
        width: "100%",


        //  position: "absolute",

        //  top: -37,
        //  left: -50,
    }
    ,
    values: {
        width: 280,
        height: 36,
        // filter: dropshadow(0px 3px 3.5px rgba(0,0,0,0.4));
        backgroundColor: "#bfdaf2",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
        marginTop: 10,
    },
    valueText: {
        textAlign: "left",
        fontSize: 16,
        color: "black",
        padding: 7,
    },
    image1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    logo: {
        // position: "absolute",
        // left: 0,
        // top: 0,
        color: "white",
        fontFamily: "Ebrima",
        fontSize: 18,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        // fontWeight:600,
        marginBottom: 20,
        lineHeight: 28,
    },
    text: {
        color: "black",
        padding: 0,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 18,


    },
    bottomtext: {
        marginTop:5,
        color: "black",
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 16,
    },
    btn: {
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
        // width: "100%",
        // height: 45,

        width: 280,
        height: 39,

    },

    btntext: {
        color: "#fff",
        padding: 7,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 16,


    },
    chevron: {
        marginTop: 15,
        width: 12,
        height: 16,
        //    height:20,
        //     width: 20,
    },
    input: {
        height: 30,
        marginTop: 20,
        width: "100%",
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
    },
    labelStyle: {
        color: "#aeb0b3",
        fontFamily: "Ebrima",
        fontSize: 14,
        opacity: 1,

    },
    Image: {
        marginTop: 15,
        marginRight: 40,
        width: 22,
        height: 15,
    },
    earn: {

        marginTop: 25,
        width: 132,
        height: 35,
        alignItems: "center",
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    earnText: {
        fontSize: 16,
        color: "white",
        fontFamily: "Ebrima",
        textAlign: 'center',
        padding: 5,
    },


});