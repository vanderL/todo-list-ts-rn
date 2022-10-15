import * as Sc from './styles';

import { Header } from "@components/Header";
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Counts } from '@components/Counts';

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
    </Sc.Container>
  )
}