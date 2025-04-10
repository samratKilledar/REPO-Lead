import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { getItem } from '../api/storageServices';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  useEffect(() => {
    checkAuth();
  }, [isAuthenticated]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const authToken = await getItem('authToken');
      setUser(authToken);
    } catch (error) {
      console.error("Error fetching auth token:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {(user && user !== 'Network request failed' && user !== 'null' && user !== '') ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
