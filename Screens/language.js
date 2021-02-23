import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Text,View,ImageBackground,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import i18n from 'i18n-js';
// import Ii18n from 'i18n-js';
function Language({navigation}) {
    const lang = [
        {id:1,code: 'en', fullForm:'English', icon:<Image source={require('../assets/usa.png')} style={{ marginLeft:-5,width: 28,borderRadius:100,
    height: 28}}/>,},
        {id:2, code: 'fr',fullForm:'Francais',icon:<Image source={require('../assets/french.png')} style={{ marginLeft:-5,width: 28,borderRadius:100,
    height: 28}}/>,},
        {id:3,code: 'he', fullForm:'Israel', icon:<Image source={require('../assets/israel.png')} style={{ marginLeft:-5,width: 28,borderRadius:100,
    height: 28}}/>,},
        {id:5, code: 'ae',fullForm:'UAE', icon:<Image source={require('../assets/uae.png')} style={{ marginLeft:-5,width: 28,borderRadius:100,
    height: 28}}/>,},
    ];
// const [state, setstate] = useState({
//         languages: [],
//         value: false,
//         langValue: "en",
//         select: "English",
     
// })


  const onSelectedLang=(text)=> {
    // setstate({
    //   value: false,
    //   select: text.fullForm,

    // }),
    // i18n.locale = text.code;
    // console.log(text.code);
    navigation.navigate('Intro'
    // ,{JSON_Clicked_Iten:text,}
    )
  };
  const onLanguage=()=> {
    setstate({
      value: true,
    })
  };

    // Set the key-value pairs for the different languages you want to support.

  // Set the locale once at the beginning of your app.
// I18n.locale = "fr";
// When a value is missing from a language it'll fallback to another language with the key present.
// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`


  
    return (
        <ImageBackground source={require('../assets/b.png')} style={styles.container} >
        <View style={{flex:1.4,justifyContent:"center",alignItems:"center",}}>
      <View><Text style={styles.welcomeText}>Welcome to</Text></View>
      <View style={styles.ImageDiv}>

                <Image source={require('../assets/GetWork.png')} style={styles.Image} />
               <Text style={styles.ImageText}>
                <Text style={styles.getText}>GET</Text><Text style={styles.workText}>WORK</Text>
                </Text>

            </View>
            </View>
            <View style={{flex:2,justifyContent:"flex-start",alignItems:"center",marginTop:30,}}>
            <TouchableOpacity>
<Text style={styles.chooseLang}>Choose Language</Text>
</TouchableOpacity>
{lang.map((item)=>( 
     <View style={styles.values} key={item.id}>
<TouchableOpacity onPress={() => onSelectedLang(item.fullForm)}> 
<View style={styles.iicon}>
   {item.icon}
    </View>
    <Text style={styles.valueText}>{item.fullForm}</Text>
   
    </TouchableOpacity>
</View>
    
))}

            </View>
        </ImageBackground>
    )
}

export default Language;
var styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
},
welcomeText:{
    // position:'absolute',
    // top:-60,
    // left:-3,
    fontSize:32,
color: "#1a1818",
fontFamily: 'RAGE',
    textAlign:'center',
   
},
Image: {
    resizeMode: "cover",
    width: 90,
    height:90,

},
ImageDiv: {
    alignItems:"center",
    justifyContent:"center",
    marginTop: 30,
    width: 222,
    height: 80,

},

getText:{
    fontSize:22,
    color: "#0b6fb4",
    
    textAlign:'center',
    fontFamily: "Lato-Bold",
        letterSpacing: .8,
        textDecorationStyle: "solid",
},
workText:{
    
    fontSize:22,
    color: "#0b6fb4",
    textAlign:'center',
    fontFamily: "Lato-Light",
    textAlign:'center',
        letterSpacing: .8,
        textDecorationStyle: "solid",
},
chooseLang:{
    width: 127,
    color:"white",
textAlign:"center",
fontFamily: "Lato-Bold",
height: 24,
fontSize:12,
padding:4,
borderRadius: 12,
backgroundColor: "#1a1818",
marginBottom:15,
},
values:{
    width: 280,
height: 36,
backgroundColor: "#009ede",
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 0,
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
iicon:{
    borderRadius:100,
    width:30,
    height:30,
    marginHorizontal:15,
    marginVertical:4,
   position:"relative"
},
valueText:{
   textAlign:"center",
   fontSize:16,
   color:"white",
   padding:7,
   position:"absolute",
   top:0, 
   left:110
},

});

