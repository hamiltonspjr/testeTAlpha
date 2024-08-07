import React from 'react';
import {ScrollView, View, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[{backgroundColor}, $styleContainer]}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={[{backgroundColor}, $styleContainer]}>{children}</View>;
}

const $styleContainer: ViewStyle = {
  flex: 1,
};
