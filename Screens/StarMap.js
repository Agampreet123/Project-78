import * as React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import {WebView} from 'react-native-webview';
export default class StarMapScreen extends React.Component{
  constructor(props){
    super(props);
    
    const {latitude,longitude} = this.state;
    const path = 'virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}
  
  
  render(){
    return(
      
      <View style={styles.container}>
<View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App</Text>
                    </View>
                    
     <TextInput
     style={{height:40,borderColor:'gray',borderWidth:1}}
     placeholder="Enter your Latitude"
     placeholderTextColor="#ffff#000000"
     onChangeText={(text)=>{
       this.setState({
         latitude:text
       })
      }}/>
      <TextInput
     style={{height:40,borderColor:'gray',borderWidth:1}}
     placeholder="Enter your Latitude"
     placeholderTextColor="#ffff#000000"
     onChangeText={(text)=>{
       this.setState({
         longitude:text
       })
      }}/>
      <WebView
      scalesPageToFit={true}
      source={{uri:path}}
      style={{marginTop:20,marginBottom:20}}
      />
      </View>
    )
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
},
})