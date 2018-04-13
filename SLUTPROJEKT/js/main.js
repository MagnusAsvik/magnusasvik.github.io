//Skapar spelet
var game = new Phaser.Game(1280, 720, Phaser.AUTO);


//Lägger till ett spelläge
game.state.add('GameState', GameState);
game.state.add('GameOver', GameOver);
game.state.add('GameStart', GameStart);


//Startar spelets första spelläge
game.state.start('GameState');