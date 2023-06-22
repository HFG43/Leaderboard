const form = document.querySelector('.new_score_form');
const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const submitNewScore = document.getElementById('submit');
const refreshScores = document.getElementById('refresh');
const scoreListContainer = document.querySelector('.recent_scores_list_container');

export {submitNewScore, form, playerName, playerScore, refreshScores, scoreListContainer };