import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { ImageBackground, Pressable } from 'react-native';
import {globalStyle} from '../Styles/global';
import { StyleSheet, Text, View, Image,Dimensions,Alert, Modal, } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';


function Detail() {
  const [modalVisible, setModalVisible] = useState(false);
    return (
      
        <ImageBackground style={globalStyle.container} source={require("../assets/b.png")}>
        <LinearGradient colors={['#0dd9fa', '#006ade']}
            start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
            style={globalStyle.header} >
            <View style={globalStyle.head} >

                <View style={globalStyle.headdiv}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View >
                    <Icon name='menu' size={30} color="white"/>
          </View>
                    </TouchableOpacity>
                </View>

                <View style={globalStyle.Getworkdiv}  >
                        <Image style={globalStyle.WImage} source={require('../assets/W.png')} />
                        <Text style={globalStyle.Wlogo}>
                            <Text style={globalStyle.get}>GET</Text><Text style={globalStyle.work}>WORK</Text>
                        </Text>
                    </View>
                    <View style={globalStyle.headdiv}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        {/* <Image  source={require('../assets/chev.png')} /> */}
                        <Icon name='chevron-left' size={35} color="white"/>
                    </TouchableOpacity>
                </View>

            </View>

        </LinearGradient>
        <View style={style.footer}>
         <View style={style.grid}>
       
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/magni.png')}/></View>
  <View style={style.Item}><Text style={style.text} >Electrician</Text></View>
  </View>
  
  <View style={style.grid}>
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/calender.png')}/></View>
  <View style={style.Item}><Text style={style.text}>Job Start / End Date</Text></View>
</View>
<View style={style.grid}>
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/clock.png')}/></View>
  <View style={style.Item}><Text style={style.text}>What time to What time</Text></View>
</View>

<View style={style.grid}>
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/money.png')}/></View>
  <View style={style.Item}><Text style={style.text}>How much money per day</Text></View>
</View>
<View style={style.grid}>
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/location.png')}/></View>
  <View style={style.Item}><Text style={style.text}>In which city and street is the work</Text></View>
</View>
<View style={style.grid}>
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/work.png')}/></View>
  <View style={style.Item}><Text style={style.text}>Details of the work</Text></View>
</View>
<View style={style.grid}>
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/work.png')}/></View>
  <View style={style.Item}><Text style={style.text}>Option to pick up the worker or not</Text></View>
</View>
<View style={style.grid}>
  <View style={style.gridItem}><Image style={style.icon} source={require('../assets/option.png')}/></View>
  <View style={style.Item}><Text style={style.text1}>Option to see photos of the work </Text>
   <Text style={style.text2} >(which was put by the constructor)</Text>
  </View>
</View>

        </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
          <Image source={require("../assets/warning.png")} style={{marginBottom:5}}/>
            <Text style={style.modalText}>
“Warning! by clicking on the “I understand“
button and you do not come to work you will
be blocked form the application
</Text>
            <View style={{marginBottom:30,flexDirection:"row",}}>
            <Pressable
              style={[style.suitMe, style.bodyText1]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.textStyle}>It suits me</Text>
            </Pressable>
            <Pressable
              style={[style.doesntSuit, style.bodyText1]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.textStyle}>It doesn't suits me</Text>
            </Pressable>
          </View>
          </View>
        </View>
      </Modal>

        <View style={{flexDirection:"row",flex:1,justifyContent:"center",alignItems:"flex-end",}} >
<View style={{marginBottom:30,flexDirection:"row",}}>
        <View style={style.suitMe}>
        <Pressable
      onPress={() => setModalVisible(true)} >
        
        <Text style={style.bodyText1}>It suits me</Text>
    
        </Pressable>
     </View>
     <View style={style.doesntSuit}>
     <TouchableOpacity
       onPress={() => setModalVisible(true)}  >
        <Text style={style.bodyText1}>It doesn't suits me</Text>
       </TouchableOpacity>
        </View>
       
        </View>
</View>

  

        </ImageBackground>
    )
}

export default Detail;
var style = StyleSheet.create({
  footer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:30,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",

},
    grid:{
flex:.4,
flexDirection:"row",
height:20,

    },
    icon:{
      alignItems:"center",

      width: 20,
height: 20,
    },
    text:{
textAlign:"left",
  color: "black",
  fontFamily: "ebrima-normal",
  fontSize: 15,
  paddingTop:15,
  marginBottom: 20,

    },
    text1:{
      textAlign:"left",
        color: "black",
        fontFamily:"ebrima-normal",
        fontSize: 16,
        paddingTop:10,
          },
    text2:{
      textAlign:"left",
        color: "black",
        fontFamily:"ebrima-normal",
        fontSize: 12,
        marginTop:0,
        marginBottom: 0,
          },
    gridItem: {
        margin: 5,
        width: Dimensions.get('window').width / 3.6, //Device width divided in almost a half
        height: 10,
        justifyContent: 'center',
        alignItems: "flex-end",
      },
     Item: {
        margin:5,
        width: Dimensions.get('window').width / 1, //Device width divided in almost a half
        // width: 128,
        height: 12,
        justifyContent: 'center',
        alignItems: "flex-start",
      },
      doesntSuit:{
        margin:5,
        width: 141,
        height: 43,
        backgroundColor: "#00973d",
borderTopLeftRadius: 50,
borderTopRightRadius: 50,
borderBottomLeftRadius: 50,
borderBottomRightRadius: 0,
    },
    suitMe:{
        margin:5,
        width: 141,
height: 43,
backgroundColor:"#e50019",
borderTopLeftRadius: 50,
borderTopRightRadius: 50,
borderBottomLeftRadius: 0,
borderBottomRightRadius: 50,
    },
  bodyText1:{
      fontSize:14,
      color:"white",
     fontFamily:"Lato-Bold",
      textAlign:'center',
      padding:11,
  },
  //  ===========Modal================
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 30,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    fontSize:16,
      color:"white",
      fontFamily: "Lato-Bold",
      textAlign:'center',
      padding:7,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


});