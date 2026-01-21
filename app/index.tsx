import Colors from "@/services/Colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Index() {
  const navigation=useNavigation();


  useEffect(()=>{
    navigation.setOptions({
      headerShown:false 
    })
  },[])
  return (
    <View
   style={styles.container}
     
    >
     <Image source={require('./../assets/images/welcome.png')} style={{
        width:'100%', height:270,
        resizeMode:'contain',
        marginTop:50,
        marginBottom:25
     }}/>
     <Text style={styles.heading}>Welcome to</Text>
     <Text style={styles.heading}>Business Directory</Text>
     <View style={{
      padding:20,
      backgroundColor:"white",
      margin:20,
      borderRadius:20

     }}>
      <Text style={{
        fontFamily:'appFont',
        fontSize:20,
        textAlign:'center'
      }}>Discover thousands of local business all in one place</Text>

      <View style={[styles.button,{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:3
      }]}>
        <Image source={require('./../assets/images/google.png')}
        style={{width:20, height:20, resizeMode:'contain', marginRight:10}} 
        />
        <Text style={{fontFamily:'appfont',fontSize:20,textAlign:'center'}}>Sign In With Google</Text>
      </View>

        <View style={[styles.button,{backgroundColor:Colors.PRIMARY,borderColor:Colors.PRIMARY}]}>
        <Text style={{fontFamily:'appfont',fontSize:20,textAlign:'center',color:"white"}}>Skip</Text>
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.PRIMARY,
    height:'100%'
  },
  heading:{
    fontFamily:'appFontBold',
    fontSize:24,
    color:'#fff',
    textAlign:'center',
    marginTop:20
  },
  button:{
    borderWidth:1,
    borderRadius:99,
    padding:15,
    marginTop:20,
  }
})
