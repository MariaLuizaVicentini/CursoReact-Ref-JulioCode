# REACT - COMPONENTE PAI
- Por padrao, um componente só pode retornar uma tag ou seja um elemento HTML PAI

```
function App(){
    return(
        <div>
            <h1>
                <h2>
                <h2/>
            <h1/>
        <div/>
    )
}

export default App
```
- Se inserirmos um elemento irmao, o react aponta erro 
```
function App(){
    return(
        <div>
            <h1>
                <h2>
                <h2/>
            <h1/>
        <div/>
        <!-- tudo sublinhado e vermelho e cagado -->
        <div>
            <h1>
                <h2>
                <h2/>
            <h1/>
        <div/>
    )
}

export default App
```

