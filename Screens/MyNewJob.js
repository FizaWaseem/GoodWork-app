
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, Dimensions,ImageBackground, Keyboard, } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import {globalStyle} from '../Styles/global';

function Mynewjob({navigation}) {

    return (
        <ImageBackground style={styles.container} source={require("../assets/b.png")}>
       
                      <View style={styles.header} >
                <View style={styles.head} >

                    <View style={styles.headdiv}  >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            {/* <Image  source={require('../assets/chev.png')} /> */}
                            <Icon name='chevron-left' style={styles.chevron} size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.div} aria-label="wrapped label tabs example"  >
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }} style={styles.Selected1 }
                         >
                            <TouchableOpacity onPress={() => navigation.navigate("Mynewjob")}  >
                                <View>
                                <Text style={styles.btntext}>My Next Jobs</Text>
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }} style={styles.Selected2 } >
                            <TouchableOpacity onPress={() => navigation.navigate("MyJobs")}>
                                <View style={styles.btnSelected }>
                                <Text style={styles.btntext}>My Jobs Closed</Text></View>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
            
            
            <View style={globalStyle.footer}>
            <TouchableWithoutFeedback  onPress={() => Keyboard.dismiss()} >

                <View style={{ alignItems: "center" }}>
                    <View style={styles.inputdiv}>
                        <TextInput style={styles.form1}
                            placeholder="Contractor Name"
                        />
                        <TextInput style={styles.form2}
                            placeholder="City"
                        />
                        <TextInput style={styles.form2}
                            placeholder="Phone Number"
                        />
                        <TextInput style={styles.form2}
                            placeholder="Date of Job"
                        />
                    </View>
                </View>
               
                <View style={{ alignItems: "center" }}>
                    <View style={styles.inputdiv}>
                        <TextInput style={styles.form1}
                            placeholder="Contractor Name"
                        />
                        <TextInput style={styles.form2}
                            placeholder="City"
                        />
                        <TextInput style={styles.form2}
                            placeholder="Phone Number"
                        />
                        <TextInput style={styles.form2}
                            placeholder="Date of Job"
                        />
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.inputdiv}>
                        <TextInput style={styles.form1}
                            placeholder="Contractor Name"
                        />
                        <TextInput style={styles.form2}
                            placeholder="City"
                        />
                        <TextInput style={styles.form2}
                            placeholder="Phone Number"
                        />
                        <TextInput style={styles.form2}
                            placeholder="Date of Job"
                        />
                    </View>
                </View>
        
              
                </TouchableWithoutFeedback>
            </View>
     
            <View style={{ flex: .3,alignItems: "center" }}>
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                            style={globalStyle.btn} >
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <Text style={globalStyle.btntext}>
                                   Finish
                            </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    
           
       </ImageBackground>
    )
};

export default Mynewjob;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        marginBottom: 5,
        width:"100%",
        
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
        marginTop: 40,
       
        marginLeft:10,
        width: "70%",
        height: 40,
        alignItems: "center",
        flexDirection:"row"
    },
    headdiv: {
        marginTop: 40,
        width: "16%",
        height: 20,
        alignItems: "center",
    },
    Selected2:{
        width: 120,
        height: 45,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 50,
    },
Selected1:{
    width: 120,
    height: 45,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
},
    btnSelected: {
        backgroundColor: "#c7c9cb",
        width: 120,
        height: 45,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 50,
        marginTop: 0,
    },
    btntext:{
        paddingTop:10,
        padding:15,
fontSize:14,
fontWeight:'bold',
color: "white",
fontFamily: "Ebrima",
    },
    footer: {
        flex: 2,
        paddingLeft: 20,
        paddingRight: 20,

    },
    inputdiv: {
        backgroundColor: "white",
        marginTop: 5,
        width: 307,
        height: 158,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    form1: {
        borderRadius: 4,
        marginTop: 10,
        paddingBottom: 5,
        // paddingTop: ,
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
        color: "rgb(0,0,0)",
        width: 289,
        height: 30,
        // marginVertical: 5,
        marginHorizontal: 5,
        paddingLeft: 5,
    }
    ,
    form2: {
        borderRadius: 4,
        // marginTop: 20,
        paddingBottom: 5,
        // paddingTop: ,
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
        color: "rgb(0,0,0)",
        width: 289,
        height: 30,
        // marginVertical: 5,
        marginHorizontal: 5,
        paddingLeft: 5,
    }
    ,

});