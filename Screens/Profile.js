import React,{useState,useEffect} from 'react'
import {  StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyle} from '../Styles/global';
import * as ImagePicker from 'expo-image-picker';



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
     
    })
    // .then( (dataPic) => {
    //     console.log("datapic",dataPic)
    //    navigation.navigate("MyProfile", {dataPic: dataPic})
    //   })
   
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      
    } 
  };
  const renderFileData=()=> {
    if (image != null) {
      return <Image source={{ uri: image }}
       style={{
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: "#000",
        
       
                        borderColor:"white",
                        borderWidth:2,
                     width:154,
                     height:154,
                     borderRadius:100,
                    
                    }}
      />
    } else {
      return <Image source={require('../assets/camera.png')}
        style={{
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: 'black',
                        shadowRadius: 10,
                        shadowOpacity: 1,
                     width:194,
                     height:194,
                     borderRadius:100,
                    
                    }}
      />
 
    }
  };
  const renderProfileData=()=> {
    if (image != null) {
      return <Image source={{ uri: image }}
     style={globalStyle. profileLogo}
      />
    } else {
      return <Image source={require('../assets/profile.png')}
       style={globalStyle. profileLogo}
      />
 
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
                        {/*  */}
                            {/* <Image style={globalStyle. profileLogo} source={require('../assets/profile.png')} /> */}
                            {renderProfileData()}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.foot}>
                {renderFileData()}
                <View>
                <View style={{position:"absolute",top:-70,left:25,}}>
                  <TouchableOpacity onPress={pickImage}>  
                  <View  >
         <Image  source={require('../assets/picker.png')} style={{width:50,height:50}}/>
         </View></TouchableOpacity>
         </View> 
         </View>
                  
         {/* <View  >
         <Image onPress={pickImage} source={require('../assets/picker.png')} style={{position:"absolute",top:-70,left:25, zIndex: 1,width:50,height:50}}/>
         </View> */}
        
        
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
        fontFamily: "ebrima-normal",
        fontSize: 18,

    },
});
