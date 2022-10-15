import * as Sc from './styles';

import { Header } from "@components/Header";
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Counts } from '@components/Counts';
import { Task } from '@components/Task';

export function Home() {
  return (
    <Sc.Container>
      <Header />
      <Sc.Form>
        <Input />
        <Button
        />
      </Sc.Form>
      <Counts />
      <Task
        array={['àgua', 'Coca-cola', 'Latão', 'Mary']}
      />
    </Sc.Container>
  )
}