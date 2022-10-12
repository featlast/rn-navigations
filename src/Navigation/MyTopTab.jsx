import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../Constants/Colors";
import Contacts from "../Screens/Contacts";
import ContactsRedux from "../Screens/ContactsRedux";
import Home from "../Screens/Home";

const Tab = createMaterialTopTabNavigator();

export default function MyTopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Redux" component={ContactsRedux}/>
    </Tab.Navigator>
  );
}
