import * as Sc from './styles';
import logoImg from '@assets/logo.png';

export function Header() {
  return (
    <Sc.Container>
      <Sc.Logo
        source={logoImg}
      />
    </Sc.Container>
  )
}