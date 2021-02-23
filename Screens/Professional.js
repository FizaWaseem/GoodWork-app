import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, Image ,Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyle} from '../Styles/global';
import {ProList} from '../component/Array/ArrayList'
function Professional({ navigation }) {
    
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#0dd9fa', '#006ade']}
                start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                style={styles.header} >
                <View style={styles.head} >

               
                <View style={globalStyle.headdiv}  >
                <TouchableOpacity   onPress={() => navigation.goBack()} style={{marginLeft:20,width:30}} >
                            <Image style={globalStyle.chevIcon} source={require('../assets/chev.png')} />
                            </TouchableOpacity>
                    </View>
                  

                    <View style={globalStyle.div}  >
                        <Image style={globalStyle.wLogo} source={require('../assets/W.png')} />
                        <Text style={globalStyle.logoDiv}>
                            <Text style={globalStyle.get}>GET</Text><Text style={globalStyle.work}>WORK</Text>
                        </Text>
                    </View>
                    <View style={globalStyle.headdiv}  >
                        <TouchableOpacity  >
                            <Image style={globalStyle. profileLogo} source={require('../assets/profile.png')} />
                        </TouchableOpacity>
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
                                Professionals
                              </Text>
                        </LinearGradient>
                    </View>
                </View>

                <View style={{ flex: 6 }}>
                    <ScrollView style={{ flex: 1 }}>
                    
                        {ProList.map(items => {
                            return (
                                <View style={styles.type} key={items.id}>
                                <TouchableOpacity onPress={() => navigation.navigate('Selection',{id:items.id})} >
                                    <Text style={styles.typeText}>{items.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>

            </View>
            <View style={{
                flex: 1, justifyContent: "center",
                alignItems: "center",
            }}>
                <LinearGradient colors={['#0dd9fa', '#006ade']}
                    start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                    style={styles.btn} >
                    <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
                        <Text style={styles.text}>
                            Next
                            </Text>
                    </TouchableOpacity>
                </LinearGradient>

            </View>

        </View>

    )
};

export default Professional;
var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',

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
        left: 110,
        top: 15,
    },
    div: {
        marginTop: 35,
        width: "65%",
        height: 40,

        alignItems: "center",
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
        width: 174,
        height: 31,
        borderRadius: 15,
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
        padding: 3,
        textAlign: "center",
        fontFamily: "Lato-Bold",
        fontSize: 14,

    },
    btn: {
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
        width: 278,
        height: 39,

    },

    text: {
        color: "#fff",
        padding: 7,
        textAlign: "center",
        fontFamily: "ebrima-normal",
        fontSize: 18,


    },
    type: {
        backgroundColor: "#BFDAF2",
        borderRadius: 20,
        width: 278,
        height: 39,
        marginBottom: 10,
        marginTop: 2,
    },
    typeText: {
        fontSize: 18,
        padding: 5,
        fontFamily:"ebrima-normal",
        color: "black",
        textAlign: "center"
    }
});
