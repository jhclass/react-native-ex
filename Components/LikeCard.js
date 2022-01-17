import React from 'react';
import {Alert,View, Image, Text, StyleSheet,TouchableOpacity,Platform} from 'react-native'
import {firebase_db} from "../firebaseConfig"
const isIOS = Platform.OS === 'ios';
import * as Application from 'expo-application';
//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({content,navigation,tip, setTip}){

    const detail = () => {
        navigation.navigate('DetailPage',{idx:content.idx})
    }

    const remove = async (cidx) => {
      let userUniqueId;
      if(isIOS){
      let iosId = await Application.getIosIdForVendorAsync();
          userUniqueId = iosId
      }else{
          userUniqueId = await Application.androidId
      }

      console.log(userUniqueId)
      firebase_db.ref('/like/'+userUniqueId+'/'+cidx).remove().then(function(){
        Alert.alert("삭제 완료");
        //내가 찝 해제 버튼을 누른 카드 idx를 가지고
        //찝페이지의 찜데이터를 조회해서
        //찜해제를 원하는 카드를 제외한 새로운 찜 데이터(리스트 형태!)를 만든다
        let result = tip.filter((data,i)=>{
          return data.idx !== cidx
        })
        //이렇게 만들었으면!
        //LikePage로 부터 넘겨 받은 tip(찜 상태 데이터)를
        //filter 함수로 새롭게 만든 찜 데이터를 구성한다!
        console.log(result)
        setTip(result)

      })
      
    }

    return(
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
                
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={()=>detail()}><Text style={styles.buttonText}>자세히보기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>remove(content.idx)}><Text style={styles.buttonText}>찜 해제</Text></TouchableOpacity>
              
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    },
    buttonGroup: {
        flexDirection:"row",
    },
    button:{
        width:90,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
        padding:10,
        borderWidth:1,
        borderColor:'deeppink',
        borderRadius:7
    },
    buttonText:{
        color:'deeppink',
        textAlign:'center'
    }
});