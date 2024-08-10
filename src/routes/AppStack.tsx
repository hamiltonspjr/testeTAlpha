import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Product} from '../domain/Products/productTypes';
import {ProductScreen} from '../screens/app/ProductScreen/ProductScreen';
import {NavigatorScreenParams} from '@react-navigation/native';
import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';
import {UpdateProductScreen} from '../screens/app/UpdateProductScreen/UpdateProductScreen';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  ProductScreen: {
    product: Product;
  };
  UpdateProductScreen: {
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
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen
        name="UpdateProductScreen"
        component={UpdateProductScreen}
      />
    </Stack.Navigator>
  );
}
