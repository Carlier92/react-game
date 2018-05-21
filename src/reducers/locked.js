// src/reducers/board.js

import { LOCKED_GAME } from '../actions/types'

const lockedBoard = [
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ]
]

export default (state = lockedBoard, { type, payload } = {}) => {
  switch (type) {
  case LOCKED_GAME :
    return [].concat(payload.locked)

  default :
    return state
  }
}
