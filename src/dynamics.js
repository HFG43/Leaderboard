const form = document.querySelector('.new_score_form');
const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const refreshScores = document.getElementById('refresh');
const flagContainer = document.querySelector('.flag_container');
const scoreListContainer = document.querySelector(
  '.recent_scores_list_container',
);

export {
  form, playerName, playerScore, refreshScores, scoreListContainer, flagContainer,
};
