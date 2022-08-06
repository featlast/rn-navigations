import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/authScreens/Login";
import SignUp from "../Screens/authScreens/SignUp";

const Auth = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
