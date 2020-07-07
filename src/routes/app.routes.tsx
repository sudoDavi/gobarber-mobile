import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';
import DashBoard from '../pages/DashBoard';
import AppointmentCreated from '../pages/AppointmentCreated';
import CreateAppointment from '../pages/CreateAppointment';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar backgroundColor="#28262e" />
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
      }}
    >
      <App.Screen name="Dashboard" component={DashBoard} />
      <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
      <App.Screen name="CreateAppointment" component={CreateAppointment} />
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  </>
);

export default AppRoutes;