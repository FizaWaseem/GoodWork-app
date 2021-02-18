import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View,Image ,TouchableOpacity} from 'react-native';

export default function Bill() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image source={require("../assets/warning.png")}/>
            <Text style={styles.modalText}>
“Warning! by clicking on the “I understand“
button and you do not come to work you will
be blocked form the application
</Text>

           <View style={{marginBottom:30,flexDirection:"row",}}>
        <View style={styles.suitMe}>
        <TouchableOpacity
       
        onPress={() => {
         setModalVisible(!modalVisible);
        }}>
        
        <Text style={styles.bodyText1}>It suits me</Text>
    
     </TouchableOpacity>
     </View>
     <View style={styles.doesntSuit}>
     <TouchableOpacity
       
        onPress={() => {
         setModalVisible(!modalVisible);
        }}>
        <Text style={styles.bodyText1}>It doesn't suits me</Text>
       </TouchableOpacity>
        </View>
        </View>
        <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Moal</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  fontSize:16,
  color:"white",
  fontWeight: 'bold',
  fontFamily: "Ebrima",
  textAlign:'center',
  padding:7,
},
});