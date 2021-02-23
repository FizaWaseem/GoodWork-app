import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import Beforelogin from './route/beforeLogin';
import Log from './Screens/Log';
import { AuthContext } from './authContext/Context';
import Screens from './route/Stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [Loading, setLoading] = useState(true);
 const [userToken, setUserToken] = useState(null);

 const authContext = useMemo(()=>({
   signIn: async(phoneNumber,password)=>{
    //  setUserToken('dfgj');
    let userToken;
    userToken=null;
    if(phoneNumber == '921345' && password == "pass"){
        userToken="erty";
        setUserToken(userToken);
    try{
      await AsyncStorage.setItem('usrToken', userToken)
    } catch(e){
      console.log(e);
    }
  }
    setLoading(false);
   
   },
   signUp:()=>{
    setUserToken('dfgj');

    setLoading(false);
   },
 
 }),[]);
 useEffect(()=>{
  setTimeout(async()=>{
    console.log( userToken);
    try{
     await AsyncStorage.getItem('userToken')
    } catch(e){
      console.log(e);
    }
    // dispatch({type:'SIGUP',token:"dff"})
    setLoading(false)
  },1500)
},[]); 
//  for initalize custom font
  let [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/font/Lato-Regular.ttf'),
    'Lato-Light': require('./assets/font/Lato-Light.ttf'),
    'Lato-Bold': require('./assets/font/Lato-Bold.ttf'),
    'DancingScript-Medium': require('./assets/font/DancingScript-Medium.ttf'),
    'RAGE': require('./assets/font/RAGE.ttf'),
    'ebrima-normal': require('./assets/font/ebrima-normal.ttf')
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
else{
  if (Loading)
  {
    return ( 
      <Log/>
    );
  }
   else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer >
        <StatusBar style="light" />
        {userToken == null ? <Beforelogin/> : <Screens/>}
      
        </NavigationContainer>
        </AuthContext.Provider>
      );
   
  }
}
  
  }


