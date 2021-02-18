import React, { Component } from 'react';
import { View, StyleSheet, Image,Text,Dimensions,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NavigationList from "./NavigationList";
import { Icon } from 'react-native-elements';


export default class CustomSidebarMenu extends Component {

 

  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <LinearGradient
          colors={['rgb(224,255,253)', 'rgb(248,238,234)']}
          style={{
            height: Dimensions.get('window').height - Dimensions.get('window').height / 1.5,
          }}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <View style={styles.ImageWrap}>
            <View style={{flex:1.5}}/>
            <View style={{flex:0.6}}>
              <TouchableOpacity onPress={() => this.props.navigation.push("Intro")} >
                <Image source={require('../assets/back.png')} style={{ height: 13, width: 26 }} />
              </TouchableOpacity>
            </View>
            
            <View style={{flex:2}}>
              <Text style={styles.userName}>Yusuf Kayiwa</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={styles.userEmail}>ykayiwa@gmail.com</Text>
            </View>
            <View style={{ flex: 0.5 }} />
          </View>
       </LinearGradient>

       <View style={{flex:8.5,paddingLeft:20}}>
          <View style={{flex:0.6}}/>
          <View style={{ flex: 4.3}}>
            <NavigationList navigation={this.props.navigation}/>
          </View>
          <View style={{flex:1.8}}/>
          <View style={{flex:0.6}}>
            <TouchableOpacity onPress = {this.signout} style={styles.signout}>
              <Text style={styles.signoutText}>Sign out</Text>
              <Icon name='sign-in' type='font-awesome' color='#666666' size={20}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",flex:0.6,alignItems: 'center'}}>
          
            <Text style={styles.languageText}>Language</Text>
          </View>
          <View style={{flex:0.6}}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    flex:10,
    backgroundColor: "#fff",
  },
  signout:{
    width: 95,
    height:25,
    borderWidth:1,
    borderColor:"#a6b4ad",
    borderRadius:30,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: 'space-around',
  },
  signoutText:{
    fontSize: 14,
    fontFamily:"SFProDisplay-Medium",
    color:"#666666",
    opacity: 1
  },  
  languageText:{
    fontSize: 14,
    fontFamily:"SFProDisplay-Medium",
    color:"#666666",
    opacity: 1,
    paddingLeft:10
  },
  userName:{
    fontSize: 31,
    fontFamily:"SFProDisplay-Bold",
    color:"#001260",
    opacity: 1
  },
  userEmail:{
    fontSize: 15,
    fontFamily:"SFProDisplay-Regular",
    color:"#001260",
    opacity: 0.6980392156862745
  },
  profileImage:{ width: 80, height: 80,borderRadius:50,borderWidth:3,borderColor:"#cd9208"},
  ImageWrap:{
    flex:10.6,
    paddingLeft:20
  }
});