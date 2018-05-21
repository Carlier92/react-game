// src/actions/game.js

import { CREATE_GAME } from './types'
import { fillBoard } from '../lib/Game'

export const createGame = (rows = 6) => {
  const [board, locked] = fillBoard(rows)
  return {
    type: CREATE_GAME,
    payload: {
      board,
      locked
    }
  }
}
