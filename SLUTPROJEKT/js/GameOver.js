var restartbutton;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var text,text2;
var GameOver = {
        create: function(){
            
            // Lägger till knapp för att starta om
            restartbutton = this.game.add.button(game.world.centerX,500,'restart',this.restart, this, 1,0);
            restartbutton.anchor.setTo(0.5);
            
            // Bakgrundsfärg och console meddelande
            console.log("Looser");
            game.stage.backgroundColor = '#000000'
            
            // Lägger till text
            text = this.game.add.text(game.world.centerX, 300, "- GAME OVER -")
        
            // Centrerar texten
            text.anchor.set(0.5);
            text.align = 'center';
        
            // Font + strolek
            text.font = 'Arial';
            text.fontWeight = 'bold';
            text.fontSize = 100;
            text.fill = '#DC143C';
        
            // Visar hur många döda
            text2 = this.game.add.text(game.world.centerX, 400,'Enemies killed: ' + counter + ' / ' + enemiesTotal);
            text2.anchor.set(0.5);
            text2.align = 'center';
        
            // Font + Storlek
            text2.font = 'Arial';
            text2.fontWeight = 'bold';
            text2.fontSize = 50;
            text2.fill = '#DC143C';
},
    
    // Starta om spel
    restart: function(){
        game.state.start('GameState');
},
};