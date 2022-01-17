import React,{useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet,Platform} from 'react-native';
import LikeCard from '../Components/LikeCard';
import Loading from '../Components/Loading';
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';
import {firebase_db} from "../firebaseConfig"

export default function LikePage({navigation,route}){
    
    const [tip, setTip] = useState([])
    const [ready,setReady] = useState(true)

    useEffect(()=>{
        navigation.setOptions({
            title:'꿀팁 찜'
        })
        getLike()
    },[])

    const getLike = async () => {
        let userUniqueId;
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync();
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }

        console.log(userUniqueId)
        firebase_db.ref('/like/'+userUniqueId).once('value').then((snapshot) => {
            console.log("파이어베이스에서 데이터 가져왔습니다!!")
            let tip = snapshot.val();
            let tip_list = Object.values(tip)
            if(tip_list && tip_list.length > 0){
                setTip(tip_list)
                setReady(false)
            }
            
        })
    }

    return (
        <ScrollView style={styles.container}>
           {
               tip.map((content,i)=>{
                   // LikeCard에서 꿀팀 상태 데이터(==tip)과 꿀팁 상태 데이터를 변경하기 위한
                   // 상태 변경 함수(== setTip)을 건네준다.
                   //즉 자기 자신이 아닌, 자식 컴포넌트에서도 부모의 상태를 변경할 수 있다.
                   return(<LikeCard key={i} content={content} navigation={navigation} tip={tip} setTip={setTip}/>)
               })
           }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})