// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Feather from '@expo/vector-icons/Feather';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
//<typeof Ionicons>
export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Feather>['name']>) {
  // return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  return <Feather size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
