import taskEmpty from '@assets/clipboard.png'
import * as Sc from './styles';

export function TaskEmpty() {
  return (
    <Sc.Container>
      <Sc.EmptyImage
        source={taskEmpty}
      />
      <Sc.Title>
        Você ainda não tem tarefas cadastradas
      </Sc.Title>

      <Sc.SubTitle>
        Crie tarefas e organize seus itens a fazer
      </Sc.SubTitle>
    </Sc.Container>
  )
}