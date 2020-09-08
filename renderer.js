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
const allGameTypes = [GameType.KING, GameType.QUEENS, GameType.DIAMONDS, GameType.HANDS, GameType.TOTALP, GameType.TOTALM, GameType.WHIST, GameType.RENTZ]
const GameTypeNumber = 8;

const defaultGameValues = {
    playerNumber: 0,
    playerTable: [{
        name: "",
        unplayed: allGameTypes,
        score: []
    }],
    scoreTable: []
};


const storage = new Storage({
    configName: 'game-state',
    defaults: defaultGameValues

});



$('#submitPlayerNumber').click(function() {

    let playerNumber = parseInt($('#playerNumberSelector').val());
    storage.set('playerNumber', playerNumber);
    storage.set('scoreTable', Array(GameTypeNumber * playerNumber).fill().map(() => Array(playerNumber).fill()));


    $('#info').html("Player number is set to:" + storage.get('playerNumber'));
    $('#setupModal').modal('hide');
});



$(window).on('load', function() {

    if (storage.get('playerNumber') == 0) {
        $('#setupButton').html("You need to set up your game!");
        $('#setupModal').modal('show');
    } else {
        $('#info').html("Player number is set to:" + storage.get('playerNumber'));
        $('#setupButton').html("Modify Setup");
    }

});