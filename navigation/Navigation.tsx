import React from 'react';
import {Text, View} from 'react-native';
import Stopwatch from '../screens/Stopwatch';
import WorldClock from '../screens/WorldClock';
import Alarm from '../screens/Alarm';
import Timer from '../screens/Timer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Navigation() {
  const opacityFocusedStyle = (focused: boolean) => {
    return {opacity: focused ? 1 : 0};
  };

  return (
    <Tab.Navigator
      initialRouteName="Stopwatch"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#16181d',
          height: 60,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Worldclock"
        component={WorldClock}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarLabel: ({color}) => {
            return <Text style={{color, paddingBottom: 5}}>World Clock</Text>;
          },

          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: -5,
                  }}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <Icon name="clock-time-six" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarLabel: ({color}) => {
            return <Text style={{color, paddingBottom: 5}}>Alarm</Text>;
          },
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: -5,
                  }}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <Icon name="alarm" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Stopwatch"
        component={Stopwatch}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarLabel: ({color}) => {
            return <Text style={{color, paddingBottom: 5}}>Stopwatch</Text>;
          },
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: -5,
                  }}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <IonIcon name="stopwatch" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarLabel: ({color}) => {
            return <Text style={{color, paddingBottom: 5}}>Timer</Text>;
          },
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: -5,
                  }}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <IonIcon name="timer" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
