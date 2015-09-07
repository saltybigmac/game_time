//const chai = require('chai');
const assert = require('chai').assert;
const Board  = require('../lib/board');
const Card   = require('../lib/card');


describe('the board', function() {

  it('is an object', function() {
    assert(new Board());
  });

  it('is made up of a deck of cards (array)', function() {
    var board = new Board();
    assert.equal(board.deck_for_game.length, [].length);
  });

  it('shuffles the deck before rendering board', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var board = new Board(deck);
    assert.notEqual(board.shuffle, ['card_1', 'card_2', 'card_3', 'card_4']);
  });

  it('can flip a hidden card', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var div = 'div#card_1.card';
    var card = new Card("dolphin.png", 1);
    assert.equal(card.visible, false);

    var board = new Board(deck);
    board.flipCard(div, card);

    assert.equal(card.visible, true);
  });
//
  it('cannot flip a visible card to hidden', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var div = 'div#card_1.card';
    var card = new Card("dolphin.png", 1);
    card.visible = true;
    assert.equal(card.visible, true);

    var board = new Board(deck);
    board.flipCard(div, card);

    assert.equal(card.visible, true);
  });
//
  it('does not allow players to click visible cards as their guessing choice', function() {

  });

  it('can compare two flipped cards', function() {

  });

  it('flips the two visible cards back if they do not match', function() {

  });

  it('leaves the cards faced-up until end of game if they match', function() {

  });

  it('ends game once all cards are flipped and directs player to index to select another deck', function() {

  });
//
//
//
//  it('can update the value and color of a tile', function() {
//    var board = new Board();
//    assert.equal(board.grid[0][0].num, 0);
//    var tile = board.updateTile(0, 0, 2);
//
//    assert.equal(tile.num, 2);
//    assert.equal(tile.color, '#e57373');
//
//    tile = board.updateTile(0, 0, 0);
//
//    assert.equal(tile.num, 0);
//    assert.equal(tile.color, '#FFFFFF');
//
//    tile = board.updateTile(0, 0, 4);
//
//    assert.equal(tile.num, 4);
//    assert.equal(tile.color, '#b71c1c');
//  });
});
