import React,{useState,useRef} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image ,Dimensions,TextInput,ImageBackground} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import { Switch } from 'react-native-switch';

function Mynote({navigation}) {
    const [data, setdata] = useState({
        phoneNumber: "",
        password: "",
        secureTextEntry:true
        // showPassword:true,
    });
    const handleInput = () => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({ ...data, [name]: value }) //dyamic 
    }
    const refRBSheet = useRef();
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
       
         <ImageBackground style={styles.container} source={require("../assets/b.png")}>
        <View style={styles.header} >
            <View style={styles.head} >
                <View style={styles.headdiv}  >
                    <TouchableOpacity  onPress={() => refRBSheet.current.open()} >
                    <View >
                    <Icon name='menu' size={30} color="black"/>
           
          </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.div}  >
                       
                        <Text style={styles.logo}>
                            My Note
                        </Text>
                    </View>
                    <View style={styles.headdiv}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name='chevron-left' size={30} color="black"/>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
        <View style={styles.footer}>

        {/* <View style={{flex:1}}></View> */}
<View style={{flex:1}}>
<TouchableOpacity onPress={() => navigation.navigate('Myprofile')} >
<Image source={require("../assets/person.png")} style={{width: 104,height: 104,}}/>
</TouchableOpacity>
<View style={{flex:1,flexDirection:"row",marginTop:10,marginLeft:-10}}>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        <Image source={require('../assets/Star.png')} style={{width: 24,height: 23,}}/>
        </View>
</View>

<View style={{    flex: 2,width: "100%", paddingLeft: 40,paddingRight:40,}}>
<View style={styles.inputWrapper}>
                    <View style={styles.input}>
                        <TextInput
                            label="Name & surname"
                            labelStyle={styles.labelStyle}
                            placeholder="Name & surname"
                            name='Phone Number'
                            value={data.phoneNumber}
                            onChangeText={handleInput}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={this.state.errorfName != "" ? this.state.errorfName:""}

                        />

                    </View>
                    <View style={styles.input}>
                        <TextInput
                            label="City"
                            labelStyle={styles.labelStyle}
                            placeholder="City"
                            name='Phone Number'
                            value={data.phoneNumber}
                            onChangeText={handleInput}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={this.state.errorfName != "" ? this.state.errorfName:""}

                        />

                    </View>
                    <View style={styles.input}>
                        <TextInput
                            label="Age"
                            labelStyle={styles.labelStyle}
                            placeholder="Age"
                            name='Phone Number'
                            value={data.phoneNumber}
                            onChangeText={handleInput}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={this.state.errorfName != "" ? this.state.errorfName:""}

                        />

                    </View>
                    <View style={styles.input}>
                        <TextInput
                            label="Competences"
                            labelStyle={styles.labelStyle}
                            placeholder="Competences"
                            name='Phone Number'
                            value={data.phoneNumber}
                            onChangeText={handleInput}
                      
                        />

                    </View>
                    <View style={styles.input}>
                        <TextInput
                            label="Year of Experience"
                            labelStyle={styles.labelStyle}
                            placeholder="Year of Experience"
                            name='Phone Number'
                            value={data.phoneNumber}
                            onChangeText={handleInput}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={this.state.errorfName != "" ? this.state.errorfName:""}

                        />

                    </View>
                    <View style={styles.input}>
                        <TextInput
                            label="People's comments"
                            labelStyle={styles.labelStyle}
                            placeholder="People's comments"
                            name='Phone Number'
                            value={data.phoneNumber}
                            onChangeText={handleInput}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={this.state.errorfName != "" ? this.state.errorfName:""}

                        />

                    </View>
                  
                    <View>
                    </View>
</View>
        </View>
     </View>
     
     <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType="slide"
                height={600}
                openDuration={300}
                closeDuration={200}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.2)",


                    },
                    container: {
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        height: "85%",
                        backgroundColor: "#0dc6fa,#0078de",
                    },
                    draggableIcon: {
                        closeOnDragDown: true,
                        height: -10,
                        width: 0,
                    }
                }}
            >
                <LinearGradient colors={['#0dd9fa', '#006ade']}
                    start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                    style={styles.back} >
                    <View style={styles.profileImage}>
                   
<TouchableOpacity onPress={() => navigation.navigate('Myprofile')} >
<Image source={require("../assets/person.png")} style={{width: 90,height: 90,borderRadius:100,borderColor:"white",borderWidth:3}}/>
</TouchableOpacity>
                     <Text style={styles.user}>User Name</Text> 
                    </View>
                    <View style={{flex:2,}}>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>Profile Picture</Text>
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>My account</Text>
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>Contact us</Text>
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
<View style={styles.notification}>
<View > 
 <Text style={styles.notiText}>Notification </Text>
</View>
     <LinearGradient colors={['#0dd9fa', '#006ade']}
                    start={{ x: .1, y: 0 }} end={{ x: .9, y: 1 }}
                    style={styles.Switch}    >
       <TouchableOpacity>            
   <Switch
        // trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "white" : "#006ade"}
        // ios_backgroundColor="#006ade"
        activeText={'activate'}
inActiveText={'deactivate'}
backgroundActive={'transparent'}
backgroundInactive={'transparent'}
circleSize={15}
    barHeight={36}
    barWidth={106}
    circleBorderWidth={0}
    style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] ,width:60,fontSize:12}}
        onValueChange={toggleSwitch}
        value={isEnabled}
        switchWidthMultiplier={8} // multipled by the `circleSize` prop to calculate total width of the Switch
    switchBorderRadius={30}
        innerCircleStyle={{ alignItems: "center", justifyContent: "center", marginLeft:0, marginRight:0}}
        style={styles.Switch2}
      />
      </TouchableOpacity> 
      </LinearGradient>
      </View>
  
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>Change Language</Text>
    </TouchableOpacity>
</View>
<View style={styles.values}>
<TouchableOpacity onPress={() => navigation.navigate("Profile")} >
    <Text style={styles.valueText}>Disconnect</Text>
    </TouchableOpacity>
</View>

            
                   
                    </View>
                </LinearGradient>
            </RBSheet>

     </ImageBackground>
    
    
    )
};

export default Mynote;

var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    header: {
        marginBottom: 5,
        backgroundColor: '#ffff',
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height - Dimensions.get('window').height / 1.15,
    },
    head: {
        marginBottom: 5,
        width: "100%",
        flexDirection: "row",
    },
    div: {
        marginTop: 35,
        width: "65%",
        height: 40,
        alignItems: "center",
    },
    headdiv: {
        marginTop: 40,
        width: "16%",
        height: 20,
        alignItems: "center",
    },
    footer: {
        flex: 2,
        paddingLeft: 0,
        paddingRight: 0,
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",

    },

    image1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    logo: {
        color: "black",
        fontFamily: "Lato-Bold",
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        // fontWeight:600,
        marginBottom: 20,
       
    },
 
    chevron: {
        marginTop: 15,
        width: 12,
        height: 16,
        //    height:20,
        //     width: 20,
    },
    input: {
        height: 30,
        marginTop: 20,
        width:"100%",
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
    },
    labelStyle: {
        color: "#aeb0b3",
        fontFamily: "ebrima-normal",
        fontSize: 14,
        opacity: 1,

    },
    Image: {
        marginTop: 15,
        marginRight: 40,
        width: 22,
        height: 15,
    },
 //-======================= Bottom-sheet
 back: {
    marginTop: 0,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
},
profileImage: {
    marginTop: 10,
    flex: .5,
    flexDirection: 'row',
    marginRight:70,
    alignItems: "center",  
},
user: {
    color: "#fff",
    textAlign: "left",
    fontFamily: "Lat-Bold",
    marginLeft:10,
    fontSize: 18,
  
},
values:{
    width: 280,
height: 36,
backgroundColor: "white",
borderRadius: 30,
marginTop:10,
shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,
elevation: 4,
},
valueText:{
   textAlign:"left",
   fontSize:15,
   fontFamily:"ebrima-normal",
   color:"black",
   padding:7, 
   paddingLeft:15,
},
notiText:{
    textAlign:"left",
    fontSize:15,
    fontFamily:"ebrima-normal",
    color:"black",
    padding:7, 
    paddingLeft:15,
    marginRight:77,
   
 },
 notification:{
   flexDirection:"row",
    
 },
Switch:{
    borderRadius:30,
    width:100,
    height:36,
   
},
Switch2:{
    fontSize:12,
    width:190,
    height:56,
   
   
}



    
});