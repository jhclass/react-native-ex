import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
import data from '../data.json';
import Card from '../Components/Cards';
import Loading from '../Components/Loading';
export default function MainPage() {
  //useState 사용법
	//[state,setState] 에서 state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
  //setState는 state를 변경시킬때 사용해야하는 함수

  //모두 다 useState가 선물해줌
  //useState()안에 전달되는 값은 state 초기값
  const [state,setState] = useState([])
  const [cateState,setCateState] = useState([])


	//하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
  //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
  const [ready,setReady] = useState(true)

  useEffect(()=>{
    //console.log(data.tip[1].category);
	   
		//뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(()=>{
        setState(data.tip)
        setCateState(data.tip)
        setReady(false)
    },1000)
 
    
  },[])

  const category = (cate) => {
    if(cate == "전체보기"){
        //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
        setCateState(state)
    }else{
      console.log('전체보기가 아닐경우');
      //debugger;
        setCateState(state.filter((d)=>{
         // console.log(d);
          //debugger;
            return d.category == cate;
            
        }))
        //console.log([cateState]); //아직 cateState에는 전체 값만 들어있다.
        
        
    }
    console.log([cateState]); // 여기서 cateState 값이 변경되었다.
    //console.log([setCateState]);
}

  //data.json 데이터는 state에 담기므로 상태에서 꺼내옴
  // let tip = state.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림"
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return ready ? <Loading/> :  (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
			 <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <Image style={styles.mainImage} source={{uri:main}}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
      <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04} onPress={()=>{category('꿀팁 찜')}}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
         {/* 하나의 카드 영역을 나타내는 View */}
         {
          cateState.map((content,i)=>{
            return (<Card content={content} key={i}/>)
          })
        }
        
      </View>
   
    </ScrollView>)
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  title: {
    //폰트 사이즈
    fontSize: 20,
    //폰트 두께
    fontWeight: '700',
    //위 공간으로 부터 이격
    marginTop:50,
    //왼쪽 공간으로 부터 이격
    marginLeft:20
  },
weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  mainImage: {
    //컨텐츠의 넓이 값
    width:'90%',
    //컨텐츠의 높이 값
    height:200,
    //컨텐츠의 모서리 구부리기
    borderRadius:10,
    marginTop:20,
    //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    //각 속성의 값들은 공식문서에 고대로~ 나와 있음
    alignSelf:"center"
  },
  middleContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },
  middleButtonAll: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#20b2aa",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  middleButtonTextAll: {
    color:"#fff",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },


});