import * as Sc from './styles';
import { View } from 'react-native';

export function Counts() {
  return (
    <Sc.Container>
      <View>
        <Sc.TextCreate>
          Criadas
        </Sc.TextCreate>
        <Sc.Count>
          0
        </Sc.Count>
      </View>
      <Sc.TextDone>
        Concluidas 0
      </Sc.TextDone>
    </Sc.Container>
  )
}