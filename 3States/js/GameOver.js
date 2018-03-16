//SKapar ojektet
var GameOver = {
    
    create: function(){
    
        console.log("Hurra 2");
        text = this.game.add.text(game.world.centerX, game.world.centerY, "- Danilo Gallinari -")
        
        //Centers the text
        text.anchor.set(0.5);
        text.align = 'center';
        
        //Our font + size
        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontsize = 70;
        text.fill = '#00FA9A';
    
    }
};