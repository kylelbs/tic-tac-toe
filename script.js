const Gameboard = (() => {

    let gameboardDisplay = ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'];

    const createGameboard = function () {
        let container = document.querySelector('.container');

        let gameboardContainer = document.createElement('div');
        gameboardContainer.classList.add('gameboardContainer');

        let playerDisplay = document.createElement('div');
        playerDisplay.classList.add('playerDisplay');
        playerDisplay.innerText = 'Player 1, your turn to play !';

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
                    gameboardDisplay[index] = 'X';
                    console.log(gameboardDisplay);

                    if (gameflow.verifyWin()) {
                        alert('heywin');
                    }

                    playerDisplay.innerText = 'Player 2, your turn to play !';
                } else {
                    tttCaseDisplay.innerText = 'O';
                    gameflow.currentPlayer = player1;
                    gameboardDisplay[index] = 'O';
                    console.log(gameboardDisplay);

                    if (gameflow.verifyWin()) {
                        alert('heywin');
                    }

                    playerDisplay.innerText = 'Player 1, your turn to play !';
                };

                if (gameflow.verifyNull() && !gameflow.verifyWin()) {
                    alert('null')
                };
            });

        };
        container.appendChild(gameboardContainer);
        container.appendChild(playerDisplay);
    }

    return {
        createGameboard,
        gameboardDisplay,
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

    const verifyNull = () => {

        const counts = {};
        for (const tttCase of Gameboard.gameboardDisplay) {
            counts[tttCase] = counts[tttCase] ? counts[tttCase] + 1 : 1;
        }
        if (counts['N'] == undefined) {
            return true;
        }
    }

    const verifyWin = () => {
        if ((Gameboard.gameboardDisplay[0] === 'X' && Gameboard.gameboardDisplay[1] === 'X' && Gameboard.gameboardDisplay[2] === 'X') ||
            (Gameboard.gameboardDisplay[3] === 'X' && Gameboard.gameboardDisplay[4] === 'X' && Gameboard.gameboardDisplay[5] === 'X') ||
            (Gameboard.gameboardDisplay[6] === 'X' && Gameboard.gameboardDisplay[7] === 'X' && Gameboard.gameboardDisplay[8] === 'X') ||
            (Gameboard.gameboardDisplay[0] === 'X' && Gameboard.gameboardDisplay[3] === 'X' && Gameboard.gameboardDisplay[6] === 'X') ||
            (Gameboard.gameboardDisplay[1] === 'X' && Gameboard.gameboardDisplay[4] === 'X' && Gameboard.gameboardDisplay[7] === 'X') ||
            (Gameboard.gameboardDisplay[2] === 'X' && Gameboard.gameboardDisplay[5] === 'X' && Gameboard.gameboardDisplay[8] === 'X') ||
            (Gameboard.gameboardDisplay[0] === 'X' && Gameboard.gameboardDisplay[4] === 'X' && Gameboard.gameboardDisplay[8] === 'X') ||
            (Gameboard.gameboardDisplay[2] === 'X' && Gameboard.gameboardDisplay[6] === 'X' && Gameboard.gameboardDisplay[4] === 'X') ||
            (Gameboard.gameboardDisplay[0] === 'O' && Gameboard.gameboardDisplay[1] === 'O' && Gameboard.gameboardDisplay[2] === 'O') ||
            (Gameboard.gameboardDisplay[3] === 'O' && Gameboard.gameboardDisplay[4] === 'O' && Gameboard.gameboardDisplay[5] === 'O') ||
            (Gameboard.gameboardDisplay[6] === 'O' && Gameboard.gameboardDisplay[7] === 'O' && Gameboard.gameboardDisplay[8] === 'O') ||
            (Gameboard.gameboardDisplay[0] === 'O' && Gameboard.gameboardDisplay[3] === 'O' && Gameboard.gameboardDisplay[6] === 'O') ||
            (Gameboard.gameboardDisplay[1] === 'O' && Gameboard.gameboardDisplay[4] === 'O' && Gameboard.gameboardDisplay[7] === 'O') ||
            (Gameboard.gameboardDisplay[2] === 'O' && Gameboard.gameboardDisplay[5] === 'O' && Gameboard.gameboardDisplay[8] === 'O') ||
            (Gameboard.gameboardDisplay[0] === 'O' && Gameboard.gameboardDisplay[4] === 'O' && Gameboard.gameboardDisplay[8] === 'O') ||
            (Gameboard.gameboardDisplay[2] === 'O' && Gameboard.gameboardDisplay[6] === 'O' && Gameboard.gameboardDisplay[4] === 'O')) {
            return true;
        }
    }

    return {
        currentPlayer,
        verifyNull,
        verifyWin
    }

})();

Gameboard.createGameboard();
