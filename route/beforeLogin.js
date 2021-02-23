import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/login';
import ForgetPassword from '../Screens/ForgetPassword';
import Intro from '../Screens/Goowork-3';
import Language from '../Screens/language';
const Beforelogin = ({navigation}) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft : null,
          }}>
           <Stack.Screen name="Language" component={Language} />
           <Stack.Screen name="Intro" component={Intro} />
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
         </Stack.Navigator>
  
    )
}

export default Beforelogin
