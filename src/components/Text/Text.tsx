import {createText} from '@shopify/restyle';
import React from 'react';
import {Theme} from '../../theme/theme';
import {TextStyle} from 'react-native';

const RNText = createText<Theme>();
type RNTextProps = React.ComponentProps<typeof RNText>;

export interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  bold,
  italic,

  ...srTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic);
  return (
    <RNText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...srTextProps}>
      {children}{' '}
    </RNText>
  );
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  bold: 'Roboto-Bold',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  regular: 'Roboto-Regular',
};

function getFontFamily(preset: TextVariants, bold?: boolean, italic?: boolean) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    default:
      return $fontFamily.regular;
  }
}
