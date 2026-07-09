# EVENTOS 

- Assim como no HTML, o react também trabalha com eventos
- Os eventos permitem que a aplicao responda as acoes do usuario

O QUE SAO EVENTOS?
- Eventos sao acoes realizadas pelo usuario em uma tela

Ex
- Clicar em um botao
- Digitar em um campo de texto
- Mover o mouse
- Enviar um form 
- Pressionar uma tecla

O QUE É UMA ACAO?
- A acao e o comportamento executado pelo usuario 

Ex
- Clicar 
- Arrastar um elemento 
- Digitar 
- Selecionar uma opca 

O QUE E CONSEQUENCIA?
- É o resultado que acontece apos a acao do usuario

Ex
- Exibir uma mensagem de sucesso ou erro
- Alterar um texto na tela 
- Atualizar um contador
- Enviar dados para uma API 
- Abrir ou fechar um menu 

COMO O REACT LIDA COM EVENTOS?

O fluxo normalmente acontece nessa ordem:
1. User executa uma acao
2. Essa acao dispara um evento
3. O react captura esse evento
4. uma funcao ( geralmente event handler ) é executada
5. A funcao realiza uma logica 
6. O componente pode ser atualizado automaticamente

Isso é o principio de tudo. 

RESUMO
- ACAO 
    - Comportamento do user, clicar, digitar, enviar, selecionar
- EVENTO
    - A notificacao gerada por essa acao (onClick, onChange, onSubmit)
- HANDLER EVENT
    - Function executada quando o evento acontec
- CONSEQUENCIA
    - Resultado da execucao da function ( alterar estado, atualizar a tela, fazer uma request, exibir uma mensagem)

BDD lembra muito essa técnica baseada em comportamento esperado VS comportamento obtido

---

# 