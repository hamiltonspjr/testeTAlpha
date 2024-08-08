import React from 'react';
import {ScreenProps} from '../Screen';
import {Box, TouchableOpacityBox} from '../../Box/Box';
import {Icon} from '../../Icon/Icon';
import {Text} from '../../Text/Text';
import {useNavigation} from '@react-navigation/native';

type Props = Pick<ScreenProps, 'canGoBack' | 'title'>;

const ICON_SIZE = 20;

export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" bold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
