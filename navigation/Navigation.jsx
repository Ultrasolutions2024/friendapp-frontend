/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
// navigation/Navigation.jsx
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen.jsx';
import LoginScreen from '../screens/auth/LoginScreen.jsx';
import UserDetails from '../screens/auth/UserDetails.jsx';
import TabNavigation from './TabNavigation.jsx';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import SpinGame from '../screens/SpinGame/SpinGame';
import EditProfile from '../screens/profileOptions/EditProfile.jsx';
import QuickLinks from '../components/QuickLinks.jsx';
import icons from '../constants/icons.js';
import Warnings from '../screens/quickLinks/Warnings.jsx';
import WalletScreen from '../screens/wallet/WalletScreen.jsx';
import Transactions from '../screens/transactions/Transactions.jsx';
import FeedBacks from '../screens/quickLinks/FeedBacks.jsx';
import TermsAndConditions from '../screens/quickLinks/TermsAndConditions.jsx';
import SettingScreen from '../screens/settings/SettingScreen.jsx';
import MoneyRecharge from '../screens/money/MoneyRecharge.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../screens/homescreen/HomeScreen.jsx';

const Stack = createStackNavigator();

function Navigation() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const verifiedUser = await AsyncStorage.getItem('verifiedUser');
        if (verifiedUser === 'true') {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLoggedIn ? 'Tab' : 'Welcome'}>
          {!isLoggedIn ? (
            <>
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="UserDetails"
                component={UserDetails}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Tab"
                component={TabNavigation}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <Stack.Screen
              name="Tab"
              component={TabNavigation}
              options={{headerShown: false}}
            />
          )}

          {/*   <Stack.Screen
            name="Tab"
            component={TabNavigation}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
              headerRight: () => (
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{marginRight: 15}} // Adjust spacing as needed
                >
                  <Image
                    source={icons.menu} // Replace with your menu icon
                    style={{width: 24, height: 24, tintColor: '#FF3B96'}} // Adjust size and color
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
            }}
          />
          <Stack.Screen
            name="Warnings"
            component={Warnings}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTintColor: '#FF3B3B',
              headerTitleStyle: {
                color: '#FF3B3B',
              },
            }}
          />
          <Stack.Screen
            name="WalletScreen"
            component={WalletScreen}
            options={{
              headerShown: true,
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
            }}
          />
          <Stack.Screen
            name="Transactions"
            component={Transactions}
            options={{
              headerShown: true,
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
            }}
          />
          <Stack.Screen
            name="Feedback"
            component={FeedBacks}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
            }}
          />
          <Stack.Screen
            name="TermsAndConditions"
            component={TermsAndConditions}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
            }}
          />
          <Stack.Screen
            name="Recharge"
            component={MoneyRecharge}
            options={{
              headerShown: true,
              headerTintColor: '#FF3B96',
              headerTitleStyle: {
                color: '#FF3B96',
              },
            }}
          />
          <Stack.Screen
            name="Spin"
            component={SpinGame}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
        <QuickLinks modalVisible={modalVisible} toggleModal={toggleModal} />
      </NavigationContainer>
    </>
  );
}

export default Navigation;
