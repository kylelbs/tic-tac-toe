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
        };
        container.appendChild(gameboardContainer);
    }

    return {
        createGameboard
    };
})();

const Player = () => {

};

Gameboard.createGameboard();


