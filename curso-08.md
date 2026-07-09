# STATE ( useState )

- Sintaxe basica

```
const [variavel, setVariavel] = useState("Inicial")
```

- O useState é um Hook do React que permite rastrear o estado de um componente
    - estado geralmente refere-se a dados ou propriedades que precisam ser rastreados em um aplicativo 

- Todos os Hooks comecam com " use "

- useState() aceita um estado inicial e retorna dois valores:
    - o estado atual
    - uma funcao setter que atualizar o estado

```
function Componente(){
    const [color, setColor] = useState("vermelho")
}
```
- color: representa o estado/valor atual
- setColor: e a funcao usada para atualizar o estado/valor atual