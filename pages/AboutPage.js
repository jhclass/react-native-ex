import React from 'react'
import {View,Text,SafeAreaView,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import { TouchableOpacity } from 'react-native-web';

const imageUrl = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png";
let hText = `Hi! 스파르타코딩 앱개발
반에 오신것을 환영합니다`;
export default function AboutPage(){
  // return (<MainPage/>)
  return(
      
    <SafeAreaView>
        <ScrollView style={styles.container}>
            <View style={styles.heading}><Text style={styles.hText}>{hText}</Text></View>
            <View style={styles.Contents}>
                <View style={styles.image}>
                    <Image
                    style={styles.aboutImage}
                    source={{uri:imageUrl}}
                    />
                </View>
                <View style={styles.textWrap}>
                    <View><Text style={styles.title}>많은 내용을 간결하게 담아내려 노력했습니다!</Text></View>
                    <View><Text style={styles.desc}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다!</Text></View>
                    <TouchableOpacity style={styles.buttonWrap}><Text style={styles.button1}>여러분의 인스타계정</Text></TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
  );
  
}
const styles = StyleSheet.create({
    container:{
        height:"100%",
        paddingBottom:50,
       paddingLeft:30,
       paddingRight:30,
       backgroundColor:"navy"
    },
    heading:{
        paddingTop:50,
        paddingBottom:30,
        
    },
    hText: {
        fontSize:30,
        color:"#fff",
        
    },
    Contents:{
        paddingTop:80,
        paddingBottom:80,
        backgroundColor:"#fff",
        paddingLeft:20,
        paddingRight:20,
        borderRadius:30
    },
    aboutImage:{
        width:"50%",
       height:200,
        alignSelf:'center',
        
    },
    title:{
        marginTop:20,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'

    },
    desc:{
        marginTop:20,
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold'
    },
    buttonWrap:{
        borderRadius:10,
        backgroundColor:'orange',
        width:'60%',
        marginTop:20,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:15,
        paddingRight:15,
        alignSelf:'center',
        
    },
    button1:{
        textAlign:'center',
        color:'#fff',
    }
    
    
});