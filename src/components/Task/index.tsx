import { TaskEmpty } from '@components/TaskEmpty';
import { TaskRow } from '@components/TaskRow';
import { useState } from 'react';
import { FlatList, Text } from 'react-native';
import * as Sc from './styles';

interface Array {
  array: string[];
}

export function Task({ array }: Array) {
  const [exists, setExists] = useState<boolean>(false);
  return (
    <Sc.Container>
      {
        exists ?
          <TaskEmpty />
          :
          <FlatList
            data={array}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TaskRow
                description={item}
              />
            )}
          />
      }


    </Sc.Container>
  )
}