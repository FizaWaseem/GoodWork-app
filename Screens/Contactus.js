import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard,ImageBackground  } from 'react-native';
import { TouchableOpacity, } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import {globalStyle} from '../Styles/global';

function Contactus({ navigation }) { 
    return (
        <ImageBackground style={globalStyle.container} source={require("../assets/b.png")}>
        {/* <View style={globalStyle.container}> */}
            <LinearGradient colors={['#0dd9fa', '#006ade']}
                start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }} style={globalStyle.header} >
                <View style={globalStyle.head} >

                    <View style={globalStyle.headdiv}  >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <View >
                                <Icon name='menu' size={30} color="white" />

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyle.div}>
                        <Text style={styles.title}>
                            Contact us
                        </Text>
                    </View>
                    <View style={globalStyle.headdiv}  >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Icon name='chevron-left' size={30} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>

            </LinearGradient>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={globalStyle.footer}>

                    <View style={{ flex: 6, width: "100%", paddingLeft: 40, paddingRight: 40, }}>
                        <View style={styles.inputWrapper}>
                            <Text style={{ textAlign: "center",fontSize:16 ,marginVertical:5}}>Left your Comment</Text>
                            <View >
                              

                                <View style={{ alignItems: "center" }}>
                                    <TextInput style={globalStyle.form3} multiline={true}
                                        numberOfLines={14}
                                        placeholder="Comment"
                                    />
                                    <View style={globalStyle.inputdiv}>
                                        <TextInput style={globalStyle.form2}

                                            placeholder="Enter your Email"
                                        /></View>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 1 }}>
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                            style={globalStyle.btn} >
                            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                <Text style={globalStyle.btntext}>
                                    Save
                            </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </View>
            </TouchableWithoutFeedback>
</ImageBackground>
        




    )
};

export default Contactus;

var styles = StyleSheet.create({

  
    title: {
        color: "white",
        fontFamily: "Lato-Bold",
        fontSize: 15,
        letterSpacing: .2,
        marginBottom: 20,
        lineHeight: 28,
    },
 

 

  
});