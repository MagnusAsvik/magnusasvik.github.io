var restartbutton2;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var person,text;
var Pannel;
var GameWin = {
  
   create: function(){
        this.add.sprite(0,0,'BG1');
        Pannel = this.add.sprite(game.world.centerX,game.world.centerY, 'Pannel');
        Pannel.anchor.setTo(0.5);
        restartbutton2 = this.game.add.button(game.world.centerX, 600,'restart2',this.restart, this, 1,0);
        restartbutton2.anchor.setTo(0.5);
        
        
        console.log("Winner winner chicken dinner!");
        text = this.game.add.text(game.world.centerX, game.world.centerY, "Congratulations!")
        
        //Centers the text
        text.anchor.set(0.5);
        text.align = 'center';
        
        //Our font + size
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontSize = 30;
        text.fill = '#FFFFFF';
        
       
    },
    restart: function(){
        person = '';
        text = game.add.text(100,200, '',style);
        game.state.start('GameState');
   },
    

    
   
};