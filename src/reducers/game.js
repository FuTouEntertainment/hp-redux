/* eslint-env node*/

const { ADD_PLAYER } = require('../actions');

const initialState = {
  players: [],
  activePlayer: 0,
  currentSequenceId: 0,
};

const game = (state = initialState, action) => {
  const { players } = state;
  switch (action.type) {
    case ADD_PLAYER: {
      const { playerId } = action;
      return Object.assign({}, state, {
        players: [...players, playerId],
      });
    }
    default:
      return state;
  }
};

module.exports = game;
