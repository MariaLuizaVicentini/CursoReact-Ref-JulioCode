# REACT - COMPONENTE PAI
Regra de Retorno: 
- Por padrão, um componente no React só pode retornar um único elemento raiz (o elemento pai)

```jsx
function App(){
    return(
        <div>
            <h1>
                Titutlo 
            <h1/>
            <h2>
                Subtitulo
            <h2/>
        <div/>
    )
}

export default App
```
Erro de Adjacência: 
- Se você tentar inserir um elemento irmão no mesmo nível, o React apontará um erro de compilação, pois não há um único elemento pai englobando todos. 
```
function App() {
    return (
        // Erro: Os elementos devem ser envolvidos em um único pai
        <div>
            <h1>Título</h1>
        </div>
        <div>
            <h1>Outro título</h1>
        </div>
    )
}

export default App
```

---
# HIERARQUIA DO HTML

- React segue a mesma estrutura do HTML

```
<html> (Avo)
    <body> (Pai)
        <header> (Filho)
            <main> (Filho)
                <footer> (Filho)

```

---

# DICA

- Extensao do VScode chamada "Dracula"
    - Ajuda a diferenciar o HTML do que é componente proprio da sua app

---

# FRAGMENTS ( <></> )

O que são: 
- Quando você não quer adicionar um elemento extra no DOM (como uma div desnecessária) apenas para satisfazer a regra do componente pai, usamos o Fragment.