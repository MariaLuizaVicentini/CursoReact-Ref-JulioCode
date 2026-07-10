# O QUE SAO PROPS

- as propriedades sao informacoes que passamos aos componentes
- Nós passamos as propriedades como atributos no HTML
Ex
- Vamos passar a propriedade "cor" = "Azul"
```jsx
<MeuBotao cor="azul">
```
Para debugarmos melhor a propriedade que foi passada, podemos acessar o componente e usar o "alert" ou "console.log" para inspecionar o valor atual das propriedades do componente

```jsx
function MeuBotao(props) {
    console.log(props)

    alert(props.cor)

    return (
        <button>
            Enviar
        <button/>
    )
}
```

- As propriedades sao usadas essencialmente para passar informacoe de fora do componente para dentro do componente