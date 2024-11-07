function rollDice() {
    const dice = document.getElementById('dice');
    const roll = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = getDiceFace(roll);
}

function getDiceFace(num) {
    const diceFaces = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    };
    return diceFaces[num] || '🎲';
}
