import React from 'react'
import { StyleSheet,View,Image ,Text,Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Share = () => {
    return (
        <View style={styles.container}>
        <View style={{flex:1}}></View>
<View style={{flex:1}}>
<Image source={require("../assets/person.png")} style={{width: 104,height: 104,}}/>
</View>
<View style={{flex:2}}>
<TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/login')}>
<View style={styles.div}><Text style={styles.text}>Sign up with facebook</Text></View></TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('https://accounts.google.com/signup')}>

<View style={styles.div}><Text style={styles.text}>Sign up with google</Text></View>
</TouchableOpacity>
</View>
<View style={{flex:1}}>
<TouchableOpacity>
    <Image source={require("../assets/share.png")} style={{width: 55,height: 55,}}/></TouchableOpacity>
</View>
        </View>
    )
}

export default Share;
var styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
},
div:{
    backgroundColor: "#006ade",
    width: 253,
height: 35,
borderRadius: 16,
marginTop:10,
},
text: {
    color: "white",
    fontFamily: "Lato-Bold",
    textAlign:"center",
    fontSize: 14,
   padding:9,
},

});
