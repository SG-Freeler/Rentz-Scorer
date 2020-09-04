//libraries
const $ = require('jquery');
const path = require('path');
const fs = require('fs');
const Storage = require('./storage.js');
const pop = require('popper.js');
const boots = require('bootstrap');


const GameType = {
    KING: 'King of Hearts',
    QUEENS: 'Queens',
    DIAMONDS: 'Diamonds',
    HANDS: 'Hands',
    TOTALP: 'Total+',
    TOTALM: 'Total-',
    WHIST: 'Whist',
    RENTZ: 'Rentz'
}




const storage = new Storage({
    configName: 'game-state',
    defaults: {
        playerNumber: 0,
        playerTable: [{
                name: "",
                unplayed: [GameType.KING, GameType.QUEENS, GameType.DIAMONDS, GameType.HANDS, GameType.TOTALP, GameType.TOTALM, GameType.WHIST, GameType.RENTZ],
                score: ["0"] // score.length should be  = 8 x (playerData.length)
            },
            {
                name: "",
                unplayed: [GameType.KING, GameType.QUEENS, GameType.DIAMONDS, GameType.HANDS, GameType.TOTALP, GameType.TOTALM, GameType.WHIST, GameType.RENTZ],
                score: ["0"]
            },
            {
                name: "",
                unplayed: [GameType.KING, GameType.QUEENS, GameType.DIAMONDS, GameType.HANDS, GameType.TOTALP, GameType.TOTALM, GameType.WHIST, GameType.RENTZ],
                score: ["0"]
            }
        ],
        scoreTable: [ // 8 x 3
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

});



$('#submitPlayerNumber').click(function() {

    let n = $('#playerNumberSelector').val();
    storage.set('playerNumber', n);
    console.log("players:" + storage.get('playerNumber'));
    $('#setupModal').modal('hide');
});

$(window).on('load', function() {
    $('#setupModal').modal('show');
    $('body').append(storage.data);
});