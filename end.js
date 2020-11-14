const username = document.getElementByID("username");
const saveScoreBtn = document.getElementByID("saveScoreBtn");
const finalScore = document.getElementByID("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = e => {
    e.preventDefault();
};