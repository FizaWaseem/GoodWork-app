import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Assistant from '../Screens/Assistant';
import PersonalInfo from '../Screens/PersonalInfo';
import Professional from '../Screens/Professional';
import Intro from '../Screens/Goowork-3';
import Profile from '../Screens/Profile';
import Selection from '../Screens/Selection';
import ShareMoney from '../Screens/ShareMoney';
import Share from '../Screens/share';
import Mynewjob from '../Screens/MyNewJob';
import MyJobs from '../Screens/MyJobs';
import Mynote from '../Screens/MyNote';
import Myprofile from '../Screens/MyProfile';
import Myaccount from '../Screens/Myaccount';
import Contactus from '../Screens/Contactus';
import Detail from '../Screens/Detail';
const Stack = createStackNavigator();
  const Screens =( {navigation})=>{
    return (
         <Stack.Navigator screenOptions={{
           headerTransparent: true,
           headerTitle: null,
           headerLeft : null,
         }}>
          {/* <Stack.Screen name="Language" component={Language} /> */}
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
          <Stack.Screen name="Professional" component={Professional} />
          <Stack.Screen name="Assistant" component={Assistant} />
          <Stack.Screen name="Selection" component={Selection}  />
          <Stack.Screen name="ShareMoney" component={ShareMoney}  />
          <Stack.Screen name="share" component={Share}  />
          <Stack.Screen name="Mynewjob" component={Mynewjob}  />
          <Stack.Screen name="Mynote" component={Mynote}  />
          <Stack.Screen name="MyJobs" component={MyJobs}  />
          <Stack.Screen name="Myprofile" component={Myprofile}  />
          <Stack.Screen name="MyAccount" component={Myaccount}  />
          <Stack.Screen name="Contactus" component={Contactus}  />
          <Stack.Screen name="Detail" component={Detail}  />


       </Stack.Navigator>
    );
  }

export default Screens;
