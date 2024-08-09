import React, {useRef} from 'react';
import {
  Pressable,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box} from '../Box/Box';
import {$textInputStyle} from '../TextInput/TextInput';
import {Text} from '../Text/Text';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Pesquisar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
