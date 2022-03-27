let gameStart = document.querySelector('body');
let gameBlock = document.querySelectorAll('.gameBlock');
let game_restart = document.querySelector('.game-reset');
let game_Win = document.querySelector('.game_win');

gameStart.onload = function() {
    alert("Buranı Diqqətli Oxu! Bu Oyunu Qazanmaq Üçün\
 Mousun Oxu'nu Qırmızı Bloklardan Qaçırtmalısan. Əks Halda Məğlub Sayılacaqsan!");
    game_restart.style.opacity = 0;
    game_restart.style.visibility = 'hidden';
    game_restart.style.transition = '0.2s';
}

function gameReset() {
    
    gameBlock.forEach(function(gameVisible) {
        gameVisible.style.visibility = 'visible';
        gameVisible.style.opacity = 1;
        gameVisible.style.transition = '0.2s';
    })

    game_restart.style.opacity = 0;
    game_restart.style.visibility = 'hidden';
    game_restart.style.transition = '0.2s';

    game_Win.style.opacity = 1;
    game_Win.style.visibility = 'visible';
    game_Win.style.transition = '0.2s';
}

function gameLoser() {
    alert("Siz Qırmızı Bloklara Toxunduğunuz Üçün Məğlub Oldunuz!");

    gameBlock.forEach(function(gameHidden) {
        gameHidden.style.visibility = 'hidden';
        gameHidden.style.opacity = 0;
        gameHidden.style.transition = '0.2s';
    });

    game_restart.style.opacity = 1;
    game_restart.style.visibility = 'visible';
    game_restart.style.transition = '0.2s';

    game_Win.style.opacity = 0;
    game_Win.style.visibility = 'hidden';
    game_Win.style.transition = '0.2s';
}

function gameWin() {
    alert("Bravo! Siz Uğurla Sona Qədər Gəlməyi Başardınız");
}