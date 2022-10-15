import { TouchableOpacityProps } from 'react-native'
import plus from '@assets/plus.png';

import * as Sc from './styles';
import { ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
}

export function Button({ type = "PRIMARY", ...rest }: Props) {
  return (
    <Sc.Container
      type={type}
      {...rest}
    >
      <Sc.Title source={plus} />
    </Sc.Container>
  )
}