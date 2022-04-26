# Week 4 - Challenge 2

## Ahorcado

Programa mediante React el juego del ahorcado.

En el componente GuessLetters tienen que aparecer tantas líneas como letras tenga la palabra a acertar (que será aleatoria), y se irán sustituyendo por las letras acertadas.

En el componente UsedLetters tienen que ir apareciendo las letras que ya se han usado, sin repetirse.

En el componente Result no aparecerá nada hasta el final de la partida. Si el usuario ha ganado, tendrá el texto "You're alive!", y si pierde tendrá el texto "You're dead!".

Incluye Husky con los tres hooks y también el workflow Audit.

## Listado de componentes

### App

- CONTIENE el estado del juego
- CONTIENE una lista de letras acertadas
- CONTIENE una función que devuelve una palabra aleatoria proviniente de una lista de palabras
- RENDERIZA el componente GuessLetters con el texto de la palabra a adivinar
- RENDERIZA el componente Result con el texto del estado del juego
- RENDERIZA el componente Letters

### Letters

- RENDERIZA la lista de letras del abecedario

### GuessLetters

- RENDERIZA la lista de letras de la palabra recibida

### UsedLetters

- RENDERIZA el texto "Used letters"
- RENDERIZA tantas letras usadas como RECIBA

### Result

- RENDERIZA un texto recibido.

### Hangman

- RENDERIZA un listado de lineas.
