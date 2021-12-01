import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const isLoggedIn = true;
function App() {
  return (
    <NavigationContainer>
      {!isLoggedIn?
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator> :
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={Profile}/>
      
    </Tab.Navigator>
}
    </NavigationContainer>
  );
};

export default App;