import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import {globalStyle} from '../Styles/global';
function PersonalInfo({navigation}) {
    const {gender,setgender}=useState("male");
    const {country,setcountry}=useState("uk");
    const {age,setage}=useState("18");
    const {expe,setexpe}=useState("4Year");
  
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#0dd9fa', '#006ade']}
                start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                style={styles.header} >
                <View style={styles.head} >

                <View style={globalStyle.headdiv}  >
                        <TouchableOpacity   onPress={() => navigation.goBack()} >
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
                    <View style={{flex:1}}>
                    <View style={styles.unregister}>
                        <LinearGradient colors={['#0dd9fa', '#006ade']}
                            start={{ x: 0, y: 1 }} end={{ x: 1, y: 0.2 }}
                            style={styles.tn} >
                            <Text style={styles.btntext}  >
                               Personal Information
                              </Text>
                        </LinearGradient>
                    </View>
                    </View>
                    <View style={{flex:6}}>
                    <View>
                         <Text style={styles.labelText}>Gender</Text>
                        <DropDownPicker
    items={[
        {label: 'Male', value: 'male', },
        {label: 'Female', value: 'female',},
        
    ]}
    defaultValue={gender}
    containerStyle={{height: 60}}
    style={styles.select}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#CCE1F9',}}
    onChangeItem={item => setgender({
        gender: item.value
    })}
/>
                    </View>
                    <View>
                         <Text style={styles.labelText}>Country</Text>
                        <DropDownPicker
    items={[
        {label: 'NewYork', value: 'NewYork', },
        {label: 'Usa', value: 'usa',},
        
    ]}
    defaultValue={country}
    containerStyle={{height: 60}}
    style={styles.select}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#CCE1F9',}}
    onChangeItem={item => setcountry({
        country: item.value
    })}
/>
                    </View>
                    <View>
                         <Text style={styles.labelText}>Age</Text>
                        <DropDownPicker
    items={[
        {label: '18', value: '18', },
        {label: '20', value: '20',},
        {label: '25', value: '25',},
        
    ]}
    defaultValue={age}
    containerStyle={{height: 60}}
    style={styles.select}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#CCE1F9',}}
    onChangeItem={item => setage({
        age: item.value
    })}
/>
                    </View>
                    <View>
                         <Text style={styles.labelText}>WorkExperience</Text>
                        <DropDownPicker
    items={[
        {label: '4Year', value: '4Year', },
        {label: '6Year', value: '6Year',},
        {label: '10Year', value: '10Year',},
        
    ]}
    defaultValue={expe}
    containerStyle={{height: 60}}
    style={styles.select}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#CCE1F9',}}
    onChangeItem={item => setexpe({
        expe: item.value
    })}
/>
                    </View>
                    <Text style={styles.labelText}>Interested Field</Text>
                    <View style={styles.workexperience}>
                    <View style={styles.workselect} >
                    <TouchableOpacity onPress={() => navigation.navigate('Assistant')}>
                    <Text style={styles.workText}>Assistant</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.workselect1} >
                    <TouchableOpacity onPress={()=>navigation.navigate('Professional')}>
                    <Text style={styles.workText}>Professional</Text>
                    </TouchableOpacity>
                    </View>
                        
                    </View>
                   
                    </View>
                </View>
                <View style={{flex:1,justifyContent:"center",
        alignItems:"center",}}>
                    <LinearGradient colors={['#0dd9fa', '#006ade']}
                    start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                    style={styles.btn} >
                    <TouchableOpacity onPress={() => navigation.navigate('ShareMoney')}>
                        <Text style={styles.text}>
                            Next
                            </Text>
                    </TouchableOpacity>
                </LinearGradient>
                </View>
        </View>
    )
};

export default PersonalInfo;
var styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        marginBottom:5,
        backgroundColor: '#006ADE',
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height - Dimensions.get('window').height / 1.15,
    },
    head: {
        marginBottom:5,
        width: "100%",
        flexDirection: "row",
    },
   
    footer: {

        flex: 5,
        paddingLeft: 20,
        paddingRight: 20,
        // justifyContent: "center",
        // alignItems: "center",

    },
    labelText:{
        color: "black",
        padding: 3,
        fontFamily: "ebrima-normal",
        fontSize: 16,
    },
    select: {
        marginTop: 5,
        padding:15,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 30,
        width: "100%",
        fontSize:18,
        backgroundColor: '#CCE1F9',
        height: 70,

    },
   workexperience: {
    flex: 1,
    width:"100%",
     flexDirection: 'row'

    },
    workText:{
fontSize:16,
color:"white",
textAlign:"center",
padding:7,
    },
    workselect: {
        marginTop: 5,
        marginLeft:10,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 30,
        color:"white",
        fontSize:18,
        width: 139,
        height: 42,
        backgroundColor: "#0055a3",

    },
    workselect1: {
        marginTop: 5,
        marginLeft:10,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        color:"white",
        fontSize:18,
        width: 140,
        height: 42,
        backgroundColor: "#0055a3",

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
        marginBottom:10,
        
    },
    tn: {
        marginTop: 20,
        borderRadius: 25,
        // height: 35,
        // width:200,
        width: 174,
        height: 31,
        borderRadius: 15,
        // paddingLeft:15,
        // paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
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
        // width: "100%",
        // height: 45,
        width: 278,
        height: 39,

    },
   
    text: {
        color: "#fff",
        padding: 5,
        textAlign: "center",
        fontFamily: "ebrima-normal",
        fontSize: 18,


    },
});
