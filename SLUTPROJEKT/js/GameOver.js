var restartbutton;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var person,text,text2;
var GameOver = {
        create: function(){
        restartbutton = this.game.add.button(game.world.centerX,500,'restart',this.restart, this, 1,0);
        restartbutton.anchor.setTo(0.5);
        
        console.log("Looser");
        game.stage.backgroundColor = '#000000'
        text = this.game.add.text(game.world.centerX, 300, "- GAME OVER -")
        
        //Centers the text
        text.anchor.set(0.5);
        text.align = 'center';
        
        //Our font + size
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontSize = 100;
        text.fill = '#DC143C';
        
    
        text2 = this.game.add.text(game.world.centerX, 400,'Enemies killed: ' + counter + ' / ' + enemiesTotal);
        text2.anchor.set(0.5);
        text2.align = 'center';
        
        //Our font + size
        text2.font = 'Arial';
        text2.fontWeight = 'bold';
        text2.fontSize = 50;
        text2.fill = '#DC143C';
    },
    restart: function(){
        person = '';
        text = game.add.text(100,200, '',style);
        game.state.start('GameState');
    },
};