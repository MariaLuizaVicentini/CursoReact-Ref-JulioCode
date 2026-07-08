# O QUE É REACT?

- Lib criada pelo facebook
- Baseada em componentes 
- Construido puramente com JS
- Permite escrevermos HTML dentro do JS

----
# POR QUE REACT?

- Antigamente as interfaces eram construidas em HTML
    - Usava-mos tags que representavam um elemento 
    - E CSS para estilizacao dos elementos
- Problema:
    - Para criarmos um elemento existente como um button, em outra tela, precisamos copiar toda a config dele, se ele possui 4 linhas, no minimo 4 linhas dentro da outra tela vao ser inseridas
    - Reutilizar elementos, geravam muitas linhas de codigo. 

- Atualmente, com react, conseguimos trazer a dinamicidade 
    - A base das telas ainda consiste em HTML, CSS e JS, mas tudo junto em um so componente 

- Criamos componentes para reutilizar 
    - É como se criassemos uma tag HTML

- Ele existe pra evitar a repeticao de codigo 


---

# O QUE É VITE?

- Utilizado para:
    - Criar o projeto
    - Rodar o projeto 

Dado que voce ja esteja dentro da pasta onde deseja criar o projeto:
1. Execute o comando 
```
npm create vite@latest
```
2. Responsa as pergutas:
- Digite " . " para criar o projeto na pasta atual
- React
- Js
3. Instale as dependencias do projeto:
```
npm install
```
4. Execute a aplicacao 
```
npm run dev
```