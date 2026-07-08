# DICA

- Se voce puxar o powershell ou cmd pra dentro do VScode como fosse um arquivo, o terminal vira uma aba, desocupando a parte inferior da tela do editor de codigo

---

# VALORES DINAMICOS VS ESTATICOS

Coisas ESTATICAS
- Nao mudam ao longo do tempo 
- Permanecem "paradas"
EX - React:
```
function App(){
    let texto = "Texto que deve ser exibido no botao"

    return(
        <button>
            texto
        <button/>
    )
}
```
EX - Tela do user
```
button ------> |   texto    |
```

Coisas DINAMICAS
- Podem mudar ao longo do tempo
- Dependem de fatores externos
EX - React:
```
function App(){
    let texto = "Texto que deve ser exibido no botao"

    return(
        <button>
            {texto}
        <button/>
    )
}
```
EX - Tela do user
```
button ------> |   Texto que deve ser exibido no botao    |
```

No HTML:
    - Tudo era estatico
No REACT:
    - Temos valores dinamicos, o JS é o principal responsavel pela dinamicidade