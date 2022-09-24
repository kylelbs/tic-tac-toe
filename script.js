const Gameboard = (() => {

    const createGameboard = function () {
        let gameboardDisplay = ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'];
        let container = document.querySelector('.container');
        let gameboardContainer = document.createElement('div');
        gameboardContainer.classList.add('gameboardContainer');

        for (const tttCase of gameboardDisplay) {
            let tttCaseDisplay = document.createElement('div');
            tttCaseDisplay.classList.add('tttCaseDisplay');
            tttCaseDisplay.innerText = 'N';
            gameboardContainer.appendChild(tttCaseDisplay);


            tttCaseDisplay.addEventListener('click', () => {
                if (gameflow.currentPlayer === player1) {
                    tttCaseDisplay.innerText = 'X';
                    gameflow.currentPlayer = player2;
                } else {
                    tttCaseDisplay.innerText = 'O';
                    gameflow.currentPlayer = player1;
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
