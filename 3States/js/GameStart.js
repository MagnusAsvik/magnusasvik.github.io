    var button;
var GameStart = {
    
    preload: function(){
        this.load.image('grund','assets/grund.jpg'); 
        this.load.image('play','assets/play.png');
        this.load.spritesheet('end','assets/endknapp.png', 150, 42);
        this.load.spritesheet('restart','assets/restartknapp.png', 150, 42);
    },
    create: function(){
        this.add.sprite(0,0,'grund');
    
        button = this.game.add.button(game.world.centerX, game.world.centerY,'play', this.actionOnClick);
        button.anchor.setTo(0.5);
    
        
        text = this.game.add.text(game.world.centerX, 180, 'Klicka på knappen och skriv in en text');
        
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