import React,{useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image ,Dimensions,TextInput,ImageBackground} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

function Myprofile({navigation}) {
    const [data, setdata] = useState({
        phoneNumber: "",
        password: "",
        secureTextEntry:true
        // showPassword:true,
    });
    const handleInput = () => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({ ...data, [name]: value }) //dyamic 
    }
   

    // console.log(dataPic);
    return (
        // <View style={styles.container}>
         <ImageBackground style={styles.container} source={require("../assets/b.png")}>
        <LinearGradient colors={['#0dd9fa', '#006ade']}
            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }} style={styles.header} >
            <View style={styles.head} >

                <View style={styles.headdiv}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View >
                    <Icon name='menu' size={30} color="white"/>
           
          </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.div}  >
                       
                        <Text style={styles.logo}>
                            My Profile
                        </Text>
                    </View>
                    <View style={styles.headdiv}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name='chevron-left' size={30} color="white"/>
                    </TouchableOpacity>
                </View>

            </View>

        </LinearGradient>
      

     
        <View style={styles.footer}>

        {/* <View style={{flex:1}}></View> ) */}
<View style={{flex:1}}>
<View style={styles.person}>
<Image source={require("../assets/person.png")} style={{width: 94,
    height: 94,}}/>
<View style={{flex:1,marginTop:10,marginLeft:0}}>
        <Text style={styles.text}>Username</Text>
        </View>
        </View>
</View>
<View style={{flex:2}}>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>Profile Picture</Text>
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>City of residence</Text>
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>Name & surname</Text>
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>Year of Experience</Text>
    </TouchableOpacity>
</View>
</View>
<View style={{flex:.5}}>
<LinearGradient colors={['#0dd9fa', '#006ade']}
                    start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                    style={styles.btn} >
                    <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
                        <Text style={styles.btntext}>
                           Save
                            </Text>
                    </TouchableOpacity>
                </LinearGradient>
</View>
     
     </View>
     </ImageBackground>
    //  </View>
    
    )
};

export default Myprofile;

var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',

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
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",

    },
person:{
    marginTop:5,

    }
,
values:{
    width: 280,
height: 36,
// filter: dropshadow(0px 3px 3.5px rgba(0,0,0,0.4));
backgroundColor: "#bfdaf2",
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
borderBottomLeftRadius: 0,
borderBottomRightRadius: 30,
marginTop:10,
shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
},
valueText:{
   textAlign:"left",
   fontSize:16,
   color:"black",
   padding:7, 
},
    image1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    logo: {
       
        color: "white",
        fontFamily: "Lato-Bold",
        fontSize: 16,
        paddingTop:7,
        lineHeight: 28,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        marginBottom: 20,
        
    },   
    text: {
        color: "black",
        padding: 0,
        textAlign: "center",
        fontFamily: "ebrima-normal",
        fontSize: 18,


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
        fontFamily: "ebrima-normal",
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
        width:"100%",
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
    },
    labelStyle: {
        color: "#aeb0b3",
        fontFamily: "ebrima-normal",
        fontSize: 14,
        opacity: 1,

    },
    Image: {
        marginTop: 15,
        marginRight: 40,
        width: 22,
        height: 15,
    },
 
    
});