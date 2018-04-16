var GameOver = {
        
        create: function(){
        
        console.log("Looser");
        game.stage.backgroundColor = '#000000'
        text = this.game.add.text(game.world.centerX, game.world.centerY, "- GAME OVER -")
        
        //Centers the text
        text.anchor.set(0.5);
        text.align = 'center';
        
        //Our font + size
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontSize = 100;
        text.fill = '#DC143C';
        
       
    },
    restart: function(){
        person = '';
        text = game.add.text(100,200, '',style);
        this.state.start(game.state.current);
    },
    
    end: function(){
        game.state.start('GameOver');
    },
};