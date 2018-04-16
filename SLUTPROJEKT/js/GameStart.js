var GameStart = {
    preload: function(){
        this.load.image('BG1','assets/BG1.png');
        this.load.spritesheet('Smuz','assets/Smuz_Sprite.png',100,120);
        this.load.image('shark','assets/Shark1.png',100,100);
        this.load.spritesheet('bullets','assets/bullet1.png',20,20);
        this.load.spritesheet('blood','assets/blood.png',350,350);
        this.load.image('Play','assets/play.png');
    },
    create: function(){
        game.stage.backgroundColor = '#FFFFFF'
        this.add.sprite(0,40,'BG1');
        button = this.game.add.button(game.world.centerX, game.world.centerY,'play', this.actionOnClick);
        button.anchor.setTo(0.5);
    
        
        text = this.game.add.text(game.world.centerX, 180, 'Play');
        
        //Centers the text
        text.anchor.set(0.5);
        text.align = 'center';
        
        //Our font + size
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontsize = 70;
    },
    actionOnClick: function(){
        game.state.start('GameState',true,false);
    }
        
};