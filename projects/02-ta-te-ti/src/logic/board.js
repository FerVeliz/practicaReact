import { WINNER_COMBOS } from "../constants"
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }


export const checkEndGame = (newBoard) => {
    //chequeo que todas las posiciones del array de newBoard son distintos de null
    //quiere decir que no hay mas posiciones en null y termino el juego
    return newBoard.every((square) => square !== null)
  }