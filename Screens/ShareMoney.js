import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image ,Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyle} from '../Styles/global';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';

function ShareMoney({navigation}) {
    
    return (
        <View style={globalStyle.container}>
        <LinearGradient colors={['#0dd9fa', '#006ade']}
            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
            style={globalStyle.header} >
            <View style={globalStyle.head} >
                <View style={globalStyle.headdiv}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View >
                    <Icon name='menu' size={30} color="white"/>
          </View>
                    </TouchableOpacity>
                </View>

                <View style={globalStyle.div}  >
                        <Image style={globalStyle.wLogo} source={require('../assets/W.png')} />
                        <Text style={globalStyle.logoDiv}>
                            <Text style={globalStyle.get}>GET</Text><Text style={globalStyle.work}>WORK</Text>
                        </Text>
                    </View>
                    <View style={globalStyle.headdiv}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name='chevron-left' size={35} color="white"/>
                    </TouchableOpacity>
                </View>

            </View>

        </LinearGradient>
        <View style={globalStyle.footer}>
        
        <View style={{flex:.4,marginTop:40 ,}}>
        <View style={styles.sharediv}>
        <TouchableOpacity onPress={() => navigation.navigate('share')} >
        <LinearGradient colors={['#0dd9fa', '#006ade']}
            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
            style={styles.earn} >
        <Text style={styles.earnText} >Share and Earn Money</Text>
        </LinearGradient>
        </TouchableOpacity>
        </View>
       
        </View>
        <View style={{flex:.3,flexDirection:"row",margin:0,}}>
        <View style={styles.jobs1}>
        <TouchableOpacity onPress={() => navigation.navigate('Mynewjob')} >
        <LinearGradient colors={['#0dd9fa', '#006ade']}
            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
            style={styles.jobshare1} >
        <Text style={styles.bodyText1}>My next Jobs</Text>
     </LinearGradient>
     </TouchableOpacity>
     </View>
     <View style={styles.jobs}>
     <TouchableOpacity onPress={() => navigation.navigate('MyJobs')}>
     <LinearGradient colors={['#0dd9fa', '#006ade']}
            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
            style={styles.jobshare} >
        <Text style={styles.bodyText1}>My Jobs closed</Text>
       </LinearGradient>
       </TouchableOpacity>
        </View>
        </View>
        <View style={{flex:1.8,marginBottom:0,}}>
        <View style={styles.sharediv1}>
        <TouchableOpacity onPress={() => navigation.navigate('Mynote')} >
        <LinearGradient colors={['#0dd9fa', '#006ade']}
            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
            style={styles.note} >
        <Text style={styles.bodyText}>My Note</Text>
        <View style={{flex:1,flexDirection:"row",marginTop:5,}}>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        </View>
       </LinearGradient>
       </TouchableOpacity>
        </View>
        
        </View>
        </View>
        </View>
    )
};

export default ShareMoney;

var styles = StyleSheet.create({

    sharediv:{
        
        margin:5,
        width: 256,
        height: 70,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor:"#bfdaf2",
    },
    earn:{
        margin:5,
        width: 243,
height: 56,

borderTopLeftRadius: 28,
borderTopRightRadius: 28,
borderBottomLeftRadius: 0,
borderBottomRightRadius: 0,
    },
   earnText:{
        fontSize:18,
        color:"white",
        fontFamily: "Lato-Bold",
        textAlign:'center',
        padding:15,
    },
    jobs:{
        margin:5,
        width: 124,
height: 51,
backgroundColor:"#bfdaf2",
borderTopLeftRadius: 50,
borderTopRightRadius: 50,
borderBottomLeftRadius: 50,
borderBottomRightRadius: 0,
    },
    jobs1:{
        margin:5,
        width: 124,
height: 51,
backgroundColor:"#bfdaf2",
borderTopLeftRadius: 50,
borderTopRightRadius: 50,
borderBottomLeftRadius: 0,
borderBottomRightRadius: 50,
    },
    jobshare:{
        margin:5,
        width: 111,
        height: 40,
        backgroundColor:"#bfdaf2",
borderTopLeftRadius: 50,
borderTopRightRadius: 50,
borderBottomLeftRadius: 50,
borderBottomRightRadius: 0,
    },
    jobshare1:{
        margin:5,
        width: 111,
        height: 40,
        backgroundColor:"#bfdaf2",
borderTopLeftRadius: 50,
borderTopRightRadius: 50,
borderBottomLeftRadius: 0,
borderBottomRightRadius: 50,
    },
    sharediv1:{
        margin:5,
        width: 256,
height: 100,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor:"#bfdaf2",
    },
   note:{
        margin:5,
        width: 243,
height: 86,
backgroundColor:"#bfdaf2",
borderTopLeftRadius: 0,
borderTopRightRadius: 0,
borderBottomLeftRadius: 43,
borderBottomRightRadius: 43,
justifyContent:"center",
alignItems:"center"
    },
    bodyText:{
        fontSize:18,
        color:"white",
        fontFamily: "Lato-Bold",
        textAlign:'center',
        padding:7,
    },
    bodyText1:{
        fontSize:14,
        color:"white",
        fontFamily: "ebrima-normal",
        textAlign:'center',
        padding:7,
    }
});