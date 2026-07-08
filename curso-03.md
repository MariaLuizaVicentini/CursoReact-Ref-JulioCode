# CRIANDO COMPONENTES
- Componentes sao trechos de codigo para sem reutilizados sem reescrita de toda sua configuracao 
- O componente nada mais é do que uma funcao que começa com a letra maiuscula " function MinhaDiv( ) "
```
function Saudacao( ){
    return ......
}
```
- Retorna um trecho HTML:
```
 return <h1> Hello Word </h1> 
```

Outro exemplo:

```
function FotoPerfil( ){
    return ......
}
```
- Retorna um trecho HTML:
```
 return <img
            src="imagem.png"
            alt="Essa é a imagem"
        > 
```
----

# UTILIZANDO COMPONENTES 

Depois que um componente foi declarado por meio de uma funcao, basta chama-lo como uma tag HTML

Criando:
```
function FotoPerfil ( ) {
    return ....
}
```
Utilizando:
```
export default function App ( ) {
    return (
        <div>
            <FotoPerfil/>
            <p>
                Bem Vindo
            <p/>
        <div>
    )
}
```

