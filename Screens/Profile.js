import React,{useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyle} from '../Styles/global';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Inter_200ExtraLight } from '@expo-google-fonts/inter';
function Profile({ navigation }) {
    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    return (
        <View style={styles.container}>

            <LinearGradient colors={['#0dd9fa', '#006ade']}
                start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                style={styles.header} >
                <View style={styles.head} >
                    <View style={styles.headdiv}  >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image style={globalStyle.chevIcon} source={require('../assets/chev.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.div}  >
                        <Image style={globalStyle.wLogo} source={require('../assets/W.png')} />
                        <Text style={globalStyle.logoDiv}>
                            <Text style={globalStyle.get}>GET</Text><Text style={globalStyle.work}>WORK</Text>
                        </Text>
                    </View>
                    <View style={styles.headdiv}  >
                        <TouchableOpacity  >
                            <Image style={globalStyle. profileLogo} source={require('../assets/profile.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.foot}>
                <TouchableOpacity onPress={pickImage}>
                    <Image style={{
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: 'black',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                     width:194,
                     height:194,
                     borderRadius:100,
                    
                    }} source={require('../assets/camera.png') || { uri: image }} />
                    
                   </TouchableOpacity>
                    
                  
      {/* <Image style={{
          
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: 'black',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                        position:"absolute",
                        top:0,
                        left:0
                       
                    }}  onPress={pickImage} source={require('../assets/pick.png')} /> */}
                   
                </View>
            </LinearGradient>


            <View style={styles.footer}>
            <TouchableOpacity onPress={pickImage}>  
            <Text style={styles.underline}>Profile picture</Text>
            </TouchableOpacity>
                <Text style={styles.font}>Upload a photo for a profile</Text>
                <Text style={styles.underline}>Photographic requirements</Text>
                <Text style={styles.font}>A visual profile picture mst be take
                Remove sunglasses and hat
take the picture in a bright place</Text>
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
}

export default Profile;
var styles = StyleSheet.create({
    container: {
       
        backgroundColor: '#CCE1F9',
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: '#006ADE',
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height - Dimensions.get('window').height / 1.15,
       
    },
    head: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
    },
    foot: {
        flex: 3,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,

    },
    image1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
  
    div: {
        marginTop: 40,
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
    get: {
        color: "white",
        fontFamily: "Ebrima",
        fontSize: 14,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        fontWeight:"bold",
        marginBottom: 20,
        lineHeight: 18,
    },
    work: {
        color: "white",
        fontFamily: "Ebrima",
        fontSize: 14,
        letterSpacing:.8,
        marginBottom: 20,
        fontWeight:"100",
        lineHeight: 18,
    },
   im2: {
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
 
    font: {
        color: "#464749",
        lineHeight: 29,
        fontSize: 18,
    }
    ,
    underline: {
        marginTop: 10,
        marginBottom: 10,
        color: "#464749",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        fontSize: 18,
        lineHeight: 27,
    },
    btn: {
        marginTop: 70,
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
