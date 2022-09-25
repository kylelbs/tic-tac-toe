//next time: detecter si on peut cocher la case ou pas, puis changer l'array selon la case coché, puis detecter si win ou nul.
//attention quand tu change gameflow.currentplayer, tu ne change pas la variable currentplayer dans l'objet gameflow, tu change la variable retourné de l'objet

const Gameboard = (() => {

    const createGameboard = function () {
        let gameboardDisplay = ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'];
        let container = document.querySelector('.container');
        let gameboardContainer = document.createElement('div');
        gameboardContainer.classList.add('gameboardContainer');

        for (const [index, tttCase] of gameboardDisplay.entries()) {
            // console.log(index);
            let tttCaseDisplay = document.createElement('div');
            tttCaseDisplay.classList.add('tttCaseDisplay');
            tttCaseDisplay.innerText = 'N';
            gameboardContainer.appendChild(tttCaseDisplay);


            tttCaseDisplay.addEventListener('click', () => {
                if (tttCaseDisplay.innerText === 'X' || tttCaseDisplay.innerText === 'O') {
                    alert(`You can't play here !`);

                } else if (gameflow.currentPlayer === player1) {
                    tttCaseDisplay.innerText = 'X';
                    gameflow.currentPlayer = player2;
                    console.log(index);
                } else {
                    tttCaseDisplay.innerText = 'O';
                    gameflow.currentPlayer = player1;
                    console.log(index);
                };

            });

        };
        container.appendChild(gameboardContainer);
    }

    return {
        createGameboard,
    };
})();

const Player = (playerNumber) => {

    return {
        playerNumber
    }
};

const player1 = Player('1');
const player2 = Player('2');

const gameflow = (() => {

    let currentPlayer = player1;

    return {
        currentPlayer
    }

})();

Gameboard.createGameboard();
