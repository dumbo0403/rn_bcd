import { Stack } from "expo-router";
import GlobalProvider from "../ctx/GlobalProvider";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack screenOptions={{headerStyle:{backgroundColor:"#e86fcd"}}}>
        <Stack.Screen name="ip" options={{title:"Серверийн хаяг"}}/>
        <Stack.Screen name="index" options={{title:"Хөхний хавдар таамаглагч"}}/>
        <Stack.Screen name="form" options={{title:"Сайн байна уу?"}}/>
      </Stack>
    </GlobalProvider>
  );
}
