import React from 'react'
import { StyleSheet } from 'react-native';
import { ImageBackground ,View,Text,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
const Log = () => {
    return (
        <ImageBackground source={require('../assets/background.png')} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
 <View style={styles.ImageDiv}>

<Animatable.Image animation="slideInDown" source={require('../assets/W.png')} style={styles.Image} />
<Animatable.Text animation="slideInUp"  style={styles.ImageText}>
<Text style={styles.getText}>GET</Text><Text style={styles.workText}>WORK</Text>
</Animatable.Text>

</View>

        </ImageBackground>
    )
}

export default Log;
const styles=StyleSheet.create({
    Image: {
        resizeMode: "cover",
        width: 130,
        height:90,
    
    },
    ImageDiv: {
        alignItems:"center",
        justifyContent:"center",
       
        marginTop: 30,
        width: 233,
        height: 80,
    
    },
    ImageText:{
        // position:'absolute',
        // top:170,
        // left:20,
    },
    getText:{
        fontSize:22,
        color: "white",
        textAlign:'center',
        fontFamily: "Lato-Bold",
            letterSpacing: .8,
            
            
    },
    workText:{
        fontSize:22,
        color: "white",
        fontFamily: "Lato-Light",
        textAlign:'center',
        letterSpacing: .8,
           
    },
});
