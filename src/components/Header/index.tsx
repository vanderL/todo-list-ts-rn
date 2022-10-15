import * as Sc from './styles';
import logoImg from '@assets/logo.png';
import { Image } from 'react-native';

export function Header() {
  return (
    <Sc.Container>
      <Sc.Logo
        source={logoImg}
      />
    </Sc.Container>
  )
}