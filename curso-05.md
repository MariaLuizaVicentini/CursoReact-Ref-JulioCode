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

---
# HIERARQUIA DO HTML

- React segue a mesma estrutura do HTML

```
| avo - <html>
    pai - <body>
        filho - <header>
        filho - <main>
        filho - <footer>

```

---

# DICA

- Extensao do VScode chamada "Dracula"
    - Ajuda a diferenciar o HTML do que é componente proprio da sua app