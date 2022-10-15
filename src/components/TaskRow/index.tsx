import * as Sc from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import trashIcon from '@assets/trash.png'
import { Image } from 'react-native';

interface Props {
  description: string;
}

export function TaskRow({ description }: Props) {
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <Sc.Container>
      <BouncyCheckbox
        size={25}
        fillColor={checkboxState ? '#5e60ce' : '#4EA8DE'}
        text={description}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={checkboxState}
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <Sc.TaskDescription>
        <Image source={trashIcon} />
      </Sc.TaskDescription>
    </Sc.Container>
  )
}