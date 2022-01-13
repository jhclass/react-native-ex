import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView , StatusBar} from 'react-native';



import data from '../data2.json';
import Card from '../Components/Cards';
import LikeCard from '../Components/LikeCard';
import Loading from '../Components/Loading';
//import { StatusBar } from 'expo-status-bar';
const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
export default function MainPage({navigation,route}) {
  //useState 사용법
	//[state,setState] 에서 state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
  //setState는 state를 변경시킬때 사용해야하는 함수

  //모두 다 useState가 선물해줌
  //useState()안에 전달되는 값은 state 초기값
  const [state,setState] = useState([])
  const [cateState,setCateState] = useState([])
  const [tip, setTip] = useState([{
    "idx":3,
    "category":"재테크",
    "title":"잠자는 내 돈을 찾아라",
    "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
    "desc":"‘새는 돈’에는 미처 몰랐던 카드 포인트, 휴면예금이나 환급금도 포함됩니다. 확실히 파악하지 못한 잠자는 돈을 찾아보고 자투리 돈들을 모으는 것도 중요합니다. 케이블방송, 위성방송 서비스를 이용하면서 중복 납부한 요금, 셋톱박스 보증금 등 돌려받지 않은 돈이 있는지 확인 해보세요. 또, 카드 포인트 통합 조회 서비스를 이용해 여러 개의 카드 포인트가 모두 얼마인지 체크해두는 것이 좋습니다. 보험해약 환급금, 휴면 보험금이나 휴면 예금을 찾아보고 돌려받는 일도 요즘에는 어렵지 않습니다.",
    "date":"2020.09.09"
},
{
    "idx":4,
    "category":"재테크",
    "title":"할인행사, 한정할인판매 문구의 함정 탈출!",
    "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money2.png",
    "desc":"‘안 사면 100% 할인’이라는 말 들어보셨나요? 견물생심, 좋은 물건을 보면 사고 싶기 마련입니다. 특히 대대적인 ‘할인 행사’ 중인 대형 마트에 갔을 때는 말할 것도 없겠죠. 따라서 생필품을 살 때, 한꺼번에 사서 사용하는 것보다 필요할 때 조금씩 구매하는 편이 좋습니다. 장을 보면서 대형마트에 자주 가다 보면 지금 필요한 것뿐 아니라 앞으로 필요할 것까지 사게 되어 지출이 커지기 때문입니다. 특히 할인 품목을 보면 뜻하지 않은 소비를 하는 경우도 많아진다. 홈쇼핑, 대형마트 등의 ‘할인행사’, ‘한정할인판매’ 등의 문구를 조심하세요. ",
    "date":"2020.09.09"
}])
console.log(setTip);
	//하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
  //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
  const [ready,setReady] = useState(true)
  StatusBar.setBackgroundColor("white");
  StatusBar.setBarStyle('dark-content');

  useEffect(()=>{
	   
		//뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    
        //헤더의 타이틀 변경
        navigation.setOptions({
          title:"꿀팁 찜"
      })  
        setState(data.tip)
        setCateState(data.tip)
        
        setReady(false)
        //

        //
       
  },[])

  const category = (cate) => {
    if(cate == "전체보기"){
        //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
        setCateState(state)
    }else if(cate == "꿀팁 찜"){
console.log('선택')
setCateState(tip)
    }else{
        setCateState(state.filter((d)=>{
            return d.category == cate
        }))
    }
}

  //data.json 데이터는 state에 담기므로 상태에서 꺼내옴
  // let tip = state.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림"
  const aboutInfo = {title:'소개페이지',desc:'소개페이지를 소개합니다.'}
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return ready ? <Loading/> :  (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
// /onPress={()=>{navigation.navigate('DetailPage',content)}
    <ScrollView style={styles.container}>
      <StatusBar />
      {/* <Text style={styles.title}>나만의 꿀팁</Text> */}
			 <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
       <TouchableOpacity style={styles.introBtn} onPress={()=>{navigation.navigate('AboutPage',aboutInfo)}}><Text style={styles.middleButtonText}>소개페이지</Text></TouchableOpacity>
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
            return (<Card content={content} key={i} navigation={navigation}/>)
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
    paddingRight:20,
    marginTop:20,
  },
  introBtn:{
    alignSelf:"flex-end",
    flex:1,
    justifyContent:'center',
    width:100,
    height:50,
    
    backgroundColor:"#20b2aa",
    borderColor:"deeppink",
    borderRadius:5,
    marginRight:20,
    marginTop:20
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