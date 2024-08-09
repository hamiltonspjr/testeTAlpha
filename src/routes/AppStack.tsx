import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/app/HomeScreen/HomeScreen';
import {Product} from '../domain/Products/productTypes';
import {ProductScreen} from '../screens/app/ProductScreen/ProductScreen';

export type AppStackParamList = {
  HomeScreen: undefined;
  ProductScreen: {
    product: Product;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}
