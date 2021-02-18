// import React,{useState} from 'react';
// import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

// export default NavigationList = (props) => {
//     const initialState = [
//         {
//             text: "My addresses",
//             NavigateTo: 'MainScreen',
//             id:1
//         }, {
//             id: 2,
//             text: "Police service",
//             NavigateTo: 'PoliceService'
//         }, {
//             id: 3,
//             text: "Fire Service",
//             NavigateTo: 'FireService'
//         }, {
//             id: 4,
//             text: "Ambulance",
//             NavigateTo: 'Ambulance'
//         }, {
//             id: 5,
//             text: "Help",
//             NavigateTo: 'Help'
//         }, {
//             id: 6,
//             text: "Privacy Policy",
//             NavigateTo: 'PrivacyPolicy'
//         }
//     ];

//     const [navLinks, setNavLinks] = useState(initialState);

//     return (
//         <React.Fragment>
//         {navLinks.map((row) => {
//             return (
//               <TouchableOpacity 
//                 Key={row.id} 
//                 onPress={() => props.navigation.push(row.NavigateTo)} 
//                 style={{flex:0.7,width: Dimensions.get('window').width - Dimensions.get('window').width / 3 }}
//                 >
//                 <Text style={styles.navigationText}>{row.text}</Text>
//               </TouchableOpacity>
//             )
//           })}
//         </React.Fragment>
//     );
// }

// var styles = StyleSheet.create({
//     navigationText:{
//         fontSize: 19,
//         fontFamily:"SFProDisplay-Medium",
//         color:"#666666",
//         opacity: 1
//     }
// });