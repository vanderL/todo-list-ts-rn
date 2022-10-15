import * as Sc from './styles';

import { Header } from "@components/Header";
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Counts } from '@components/Counts';
import { Task } from '@components/Task';
import { useState } from 'react';

export function Home() {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>(['Integer urna interdum massa libero auctor neque turpis turpis semper.', 'Coca-cola', 'Latão', 'Mary']);

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
        array={tasks}
      />
    </Sc.Container>
  )
}