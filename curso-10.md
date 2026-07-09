# LISTA E EXIBICAO DINAMICA

- Ao inves de criar varios elementos manualmente, utilizamos arrays e o react cria os componentes automaticamente
- Esse processo e chamado de renderizacao dinamica

O QUE E UMA LISTA?
- uma lista e um conjunto de dados armazenados em um array

Ex
```
const  nomes = ["Ana", "Joana"];
```
Ou objetos:
```
const produtos = [
    { id: 1, nome: "guitarra"}
];
```
O QUE E EXIBICAO DINAMICA?
- E a renderizacao da interface baseada nos dados disponiveis
- Se os dados mudam, a interface muda automaticamente

COMO O REACT EXIBE LISTAS?
- O react utiliza o metodo " map( ) " do JS
- O map percorre cada item do array e retorna um elemento JSX, que no navegador e exibido em elemento puros do HTML

O QUE E O METODO MAP( )
- Funcao nativa do JS usada para percorrer itens de um array ou objetos

----

