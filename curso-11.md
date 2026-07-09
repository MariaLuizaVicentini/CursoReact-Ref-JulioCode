# OBJETOS NO JAVASCRIPT

- Um Objeto é a instancia de uma classe 
- na sua essencia ele é uma colecao de dados (propriedades) e funcionalidades (metodos)

- A criacao de um objetio geralmente começa com a definicao e inicializacao de uma variavel em seguida um delimitador representado por chaves
```jsx
let pessoa = {}
```
- O objeto possui propriedades
```jsx
let pessoa = {
    idade: 23,
    nome: "Malu"
}
```
- O objeto pode possuir metodos/acoes
```jsx
let pessoa = {
    idade: 23,
    nome: "Malu",
    estudar() {
        console.log("Estudando....")
    }
}
```
- Para acessar o valor atual de uma propriedade, podemos chamar o objeto e em seguida a propriedade especifica
```
function Componente() {
    let pessoa = {
        idade: 23, 
        nome: "malu"
    }

    alert(pessoa.idade)
}
```
Retorno na interface, um alerta em JS na tela
```
23
```

- Para acessar um metodo desse objeto, podemos chamar o obejto e emseguida o metodo especifico
```
function Componente() {
    let pessoa - {
        idade: 23, 
        nome: "Malu"
        saudacao(){
            alert("Ola malu, seja bem vinda")
        }
    }

    console.log(pessoa.saudacao())
}
```
Retorno na interface, um alerta em JS:
```
Ola malu, seja bem vinda
```
