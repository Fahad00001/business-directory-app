import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
export default function RootLayout() {
  const [fontLoaded] = useFonts({
'appFont': require('./../assets/fonts/Montserrat-Regular.ttf'),
'appFontBold': require('./../assets/fonts/Montserrat-Bold.ttf'),

  })

  if(!fontLoaded){
    return <ActivityIndicator size="large" style={{flex:1, justifyContent:'center', alignItems:'center'}} />
  }


  return <Stack />;
}
