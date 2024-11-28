/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/homescreen/HomeScreen';
import CallScreen from '../screens/call/CallScreen';
import MoneyRecharge from '../screens/money/MoneyRecharge';
import WalletScreen from '../screens/wallet/WalletScreen';
import { icons } from '../constants';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { display: 'none' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              style={{
                width: 30,
                height: 30,
                marginTop:20,
                tintColor: focused ? '#FF3B96' : '#888',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={CallScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.call}
              style={{
                width: 30,
                height: 30,
                marginTop:20,
                tintColor: focused ? '#FF3B96' : '#888',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recharge"
        component={MoneyRecharge}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.rupee}
              style={{
                width: 35,
                height: 35,
                marginTop:20,
                tintColor: focused ? '#FF3B96' : '#888',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.chat}
              style={{
                width: 30,
                height: 30,
                marginTop:20,
                tintColor: focused ? '#FF3B96' : '#888',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
