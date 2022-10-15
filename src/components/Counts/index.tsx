import * as Sc from './styles';

export function Counts() {
  return (
    <Sc.Container>
      <Sc.ViewContent>

        <Sc.TextCreate>
          Criadas
        </Sc.TextCreate>
        <Sc.Count>
          4
        </Sc.Count>
      </Sc.ViewContent>

      <Sc.ViewContent>
        <Sc.TextDone>
          Concluidas
        </Sc.TextDone>
        <Sc.Count>
          1
        </Sc.Count>
      </Sc.ViewContent>
    </Sc.Container>
  )
}