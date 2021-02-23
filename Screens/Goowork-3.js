
import React from 'react';
import { ImageBackground,StyleSheet, Text, View ,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Intro = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/background.png')}  style={styles.image1}>
    <View style={styles.profilediv}> 
    <View  style={styles.profileImage}>
     <Image  source={require('../assets/log1.png')}  style={styles.Image}/>
     </View>
     </View>
     <Animatable.View animation="slideInLeft" style={styles.comment}>
     <View animation="fadeInUp" style={styles.div}>  
      <Text style={[styles.text,{textAlign:"left"}]} onPress={() => navigation.navigate('Login')}>
       I am a contractor,</Text>
       <Text style={styles.text}>looking for a workers</Text>
     </View>
     <View animation="fadeInUp" delay="2" style={styles.div2}>  
      <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Looking for a job </Text>
     </View>
     </Animatable.View>
     
     
       </ImageBackground>
    );
  }
export default Intro;


const styles = StyleSheet.create({
    image1: {
        flex: 1,
       width: '100%',
        justifyContent: 'center',
      },
      profilediv:{
        flex:2,
       marginBottom:0,
     
    },
      profileImage:{
       flex:1,
    justifyContent: 'center',
    alignItems: 'center',  
    },
    Image:{
      marginTop:20,
       resizeMode: "cover",
       width: 90,
       height: 100,
      
    },
  
   comment:{
flex:4,

   },

    div:{
    
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 30,
      marginLeft: 20,
      marginTop:20,
      width: 320,
      height: 75,
      padding:35,
      backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    
      
    },
    div2:{
    
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 30,
      marginLeft: 20,
      marginTop:10,
      width: 320,
      height: 65,
      padding:5,
      backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',

    },
    text:{
      fontSize: 18 ,
      letterSpacing: .4,
      lineHeight: 28,
      color: "#1a1818",
      fontWeight:"500",
      fontFamily: "ebrima-normal",
    },

    
  });