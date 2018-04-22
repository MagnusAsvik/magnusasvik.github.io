var restartbutton2;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var text;
var Pannel;
var GameWin = {
  
   create: function(){
       
        // Lägger till bakgrundsbild och Pannel
        this.add.sprite(0,0,'BG1');
        Pannel = this.add.sprite(game.world.centerX,game.world.centerY, 'Pannel');
        Pannel.anchor.setTo(0.5);
       
        // Lägger till knapp för att starta om
        restartbutton2 = this.game.add.button(game.world.centerX, 600,'restart2',this.restart, this, 1,0);
        restartbutton2.anchor.setTo(0.5);
        
        // Console meddelande
        console.log("Winner winner chicken dinner!");
        
        // Lägger till text
        text = this.game.add.text(game.world.centerX, game.world.centerY, "Congratulations!")
        
        // Centrerar the text
        text.anchor.set(0.5);
        text.align = 'center';
        
        // Font + size
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontSize = 30;
        text.fill = '#FFFFFF';
        
       
},
    
    // Startar om spelet
    restart: function(){
        game.state.start('GameState');
},
    

    
   
};