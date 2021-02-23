import React from 'react';
import { View,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import stringsoflanguages from './ScreenStrings';

export default class Lang extends React.Component{
constructor(props){
    super(props);
    const lang=[
        {id:1, fullForm:'English'},
        {id:2, fullForm:'French'},
        {id:3, fullForm:'Spanish'},
        {id:4, fullForm:'Urdu'},
    ];
    global.lang =lang;
}
settext(value) {
    // stringsoflanguages.setLanguage(value);
    this.props.navigation.navigate('content',
    // {JSON_Clicked_Iten:value,}
    
    );
}
render(){
    return(

        <View  style={{flex:1,justifyContent:"center",alignContent:"center",margin:50,
        }}>
            <Text>selct language</Text>
            <ScrollView style={{marginTop:30,width:"80%",}}>
                {global.lang.map((item)=>(
                    <View key={item.id}>
                        <Text 
                        ref={item.fullForm}
                        onPress={() => this.settext(item.fullForm)} 
                        >{item.fullForm}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

}