import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,Image,StyleSheet, Text, View } from 'react-native';
import Intro from './Screens/Goowork-3';
import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from "react-navigation";
import Login from './Screens/login';
import ForgetPassword from './Screens/ForgetPassword';
import Profile from './Screens/Profile';
import PersonalInfo from './Screens/PersonalInfo';
import Professional from './Screens/Professional';
import Assistant from './Screens/Assistant';
import Selection from './Screens/Selection';
import ShareMoney from './Screens/ShareMoney';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Share from './Screens/share';
import MyJobs from './Screens/MyJobs';
import Mynote from './Screens/MyNote';
import Myprofile from './Screens/MyProfile';
import Myaccount from './Screens/Myaccount';
import Contactus from './Screens/Contactus';
import Detail from './Screens/Detail';

import Bill from './component/Bill';
import Mynewjob from './Screens/MyNewJob';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

 
// const Intro = () => {
//   return (
   
//      <ImageBackground source={require('./assets/background.png')}  style={styles.image1}>
//    <View style={styles.profilediv}> 
//    <View  style={styles.profileImage}>
//     <Image  style={styles.Image}  source={require('./assets/log1.png')} />
//     </View>
//     <View style={styles.div}>  
//      <Text style={styles.text}>I am a Contractor,Looking for a workers</Text>
//     </View>
//     <View style={styles.div2}>  
//      <Text style={styles.text}>Looking for a job</Text>
//     </View>
//     </View>
    
    
//       </ImageBackground>
    
//   );
// }
//  const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerStyle={{
//         backgroundColor: 'red',
//         width: 230,
//       }}
//     >
//       <Drawer.Screen name="Feed" component={Profile} />
//       <Drawer.Screen name="Article" component={Intro} />
//     </Drawer.Navigator>
//   );
// }
const App = createStackNavigator({
 
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },
},
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  PersonalInfo: {
    screen: PersonalInfo,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  Professional: {
    screen: Professional,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
 
  Assistant: {
    screen: Assistant,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  Selection: {
    screen: Selection,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },}, 
  ShareMoney: {
    screen: ShareMoney,
    navigationOptions: {
      header: null,
   headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  share: {
    screen: Share,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
 
  Mynewjob: {
    screen: Mynewjob,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  MyJobs: {
    screen: MyJobs,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },}, 
  Mynote: {
    screen: Mynote,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  Myprofile: {
    screen: Myprofile,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  MyAccount: {
    screen: Myaccount,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  Contactus: {
    screen: Contactus,
    navigationOptions: {
      header: null,
 headerBackground: () => (
  <StatusBar style="light" />
  ),
  },},
  Detail: {
    screen: Detail,
    navigationOptions: {
      header: null,
      headerBackground: () => (
      <StatusBar style="light" />
      ),
  },},
  // Modal: {
  //   screen: Bill,
  //   navigationOptions: {
  //     header: null,
  //     headerBackground: () => (
  //     <StatusBar style="light" />
  //     ),
  // },},

  // navigationOptions: {
    // <StatusBar style="light" />
  //   headerStyle:{backgroundImage:'#FFFF00'},
  //   headerBackground: () => (
  //     <ImageBackground source={require('./assets/background.png')}  style={styles.image1}>
  //     <View style={styles.div}  >
        
  //       <Image  style={styles.Image}  source={require('./assets/W.png')} />
  //       <Text style={styles.logo}>
  //                      <Text style={styles.get}>GET</Text><Text style={styles.work}>WORK</Text>
  //                  </Text>
  //            </View>
  //     </ImageBackground>
  //   ),
  //   headerTintColor:'white',
  //   gesturesEnabled:false
  // },
  // cardStyle: {
  //   backgroundColor: 'black'
  // },},
 
});

  



export default createAppContainer(App);
// export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'Ebrima': require('./assets/ebrima-normal.ttf'),
  // });
  // if (!fontsLoaded) {
    // return (
    //   <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Intro">
    //     <Stack.Screen name="Intro" component={Intro} />
    //     <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //   <View style={styles.container}>
    //  <Intro/> 
  
        
    //   </View>); 
  // }
  // else { return <AppLoading />;}
  
  
// }

var styles = StyleSheet.create({

  image1: {
    flex: 1,
   width: '100%',
    justifyContent: 'center',
  },
  logo:{
      position:"absolute",
      left:40,
      top:10,
  },
  get: {
    color: "white",
    fontFamily: "Ebrima",
    fontSize: 14,
    letterSpacing: .8,
    textDecorationStyle: "solid",
    // fontWeight:600,
    marginBottom: 20,
    lineHeight: 18,
},
work: {
    color: "white",
    fontFamily: "Ebrima",
    fontSize: 12,
    marginBottom: 20,
    lineHeight: 18,
},div:{
  width: 130,
  height:180,
  marginTop:180,
 marginLeft:120,

},
        Image:{
          width: "30%",
          height:"15%",
          
        },
});

