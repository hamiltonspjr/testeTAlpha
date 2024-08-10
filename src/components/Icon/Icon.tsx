import React from 'react';
import {ArrowLeftIcon} from '../../assets/icons/ArrowLeftIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Pressable} from 'react-native';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {CheckRoundIcon} from '../../assets/icons/CheckRoundIcon';
import {ErrorRoundIcon} from '../../assets/icons/ErrorRoundIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {HomeFillIcon} from '../../assets/icons/HomeFillIcon';
import {NewProductIcon} from '../../assets/icons/NewProduct';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  checkRound: CheckRoundIcon,
  errorRound: ErrorRoundIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  newProduct: NewProductIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
